
import axios from 'axios';
import slugify from 'slugify';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(PROJECT_ROOT, 'src/content/projects');
const PUBLIC_IMG_DIR = path.join(PROJECT_ROOT, 'public/images/projects');

// Ensure directories exist
if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
if (!fs.existsSync(PUBLIC_IMG_DIR)) fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });

async function downloadImage(url, filepath) {
    const writer = fs.createWriteStream(filepath);
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

export async function scrapeBehance(page, url) {
    try {
        console.log(`Navigating to ${url}...`);
        await page.goto(url, { waitUntil: 'networkidle2' });

        // 1. Extract Meta Data from DOM
        const title = await page.title(); // Usually "Project Name on Behance"
        const cleanTitle = title.replace(' on Behance', '').trim();

        const description = await page.$eval('meta[property="og:description"]', el => el.content).catch(() => '');
        const coverImageUrl = await page.$eval('meta[property="og:image"]', el => el.content).catch(() => null);

        // Try to find Category
        let category = 'Design';
        try {
            // Behance checks: often in .Project-fields or similar. 
            // We can check common classes.
            const field = await page.$eval('.Project-fields-KxS a', el => el.textContent);
            if (field) category = field.trim();
        } catch (e) {
            // ignore
        }

        const slug = slugify(cleanTitle, { lower: true, strict: true });
        console.log(`Found project: "${cleanTitle}" (Slug: ${slug})`);

        // 2. Prepare Directories
        const projectImgDir = path.join(PUBLIC_IMG_DIR, slug);
        if (!fs.existsSync(projectImgDir)) {
            fs.mkdirSync(projectImgDir, { recursive: true });
        }

        // 3. Download Cover Image
        let coverImgPath = '';
        if (coverImageUrl) {
            const ext = path.extname(coverImageUrl.split('?')[0]) || '.jpg';
            const filename = `cover${ext}`;
            try {
                await downloadImage(coverImageUrl, path.join(projectImgDir, filename));
                coverImgPath = `/images/projects/${slug}/${filename}`;
                console.log('Downloaded cover image.');
            } catch (e) {
                console.error('Failed to download cover:', e.message);
            }
        }

        // 4. Extract Content Images
        // Scroll to bottom to ensure lazy loading
        await page.evaluate(async () => {
            await new Promise((resolve) => {
                let totalHeight = 0;
                const distance = 100;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 50); // Fast scroll
            });
        });

        // Wait a bit for images to populate
        // await new Promise(r => setTimeout(r, 1000));

        const imageUrls = await page.evaluate(() => {
            // Select all probable project images
            const images = document.querySelectorAll('img.ImageElement-image-src-t4d, img.js-project-module-image, #project-modules img');
            return Array.from(images).map(img => img.src || img.dataset.src || img.srcset?.split(' ')[0]).filter(Boolean);
        });

        const contentImages = [];
        console.log(`Found ${imageUrls.length} content images. Downloading...`);

        // Dedupe
        const uniqueUrls = [...new Set(imageUrls)];

        for (let i = 0; i < uniqueUrls.length; i++) {
            const src = uniqueUrls[i];
            const ext = path.extname(src.split('?')[0]) || '.jpg';
            // Skip weird extensions or tiny images/spacers
            if (ext.length > 5 || src.includes('spacer') || src.includes('blank')) continue;

            const filename = `img-${i + 1}${ext}`;
            const localPath = path.join(projectImgDir, filename);

            try {
                await downloadImage(src, localPath);
                contentImages.push(`/images/projects/${slug}/${filename}`);
                process.stdout.write('.');
            } catch (err) {
                console.error(`\nFailed to download image ${i}:`, err.message);
            }
        }
        console.log('\nAll images downloaded.');

        // 5. Generate MDX
        const mdxContent = `---
title: "${cleanTitle.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
category: "${category}"
coverImage: "${coverImgPath}"
---

${contentImages.map(img => `![Project Image](${img})`).join('\n\n')}
`;

        const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
        fs.writeFileSync(mdxPath, mdxContent);
        console.log(`Successfully created: src/content/projects/${slug}.mdx`);

    } catch (error) {
        console.error(`Error importing project ${url}:`, error.message);
    }
}

// Check if running directly
if (import.meta.url === `file://${process.argv[1]}`) {
    const url = process.argv[2];
    if (!url) {
        console.error('Please provide a Behance project URL.');
        process.exit(1);
    }

    (async () => {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await scrapeBehance(page, url);
        await browser.close();
    })();
}
