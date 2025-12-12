
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'fast-glob';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// --- CONFIGURATION ---
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    console.error('❌ Missing Cloudinary configuration. Please check your .env file.');
    process.exit(1);
}

// Configure Cloudinary
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

// Paths
const IMAGES_DIR = path.join(PROJECT_ROOT, 'public/images/projects');
const CONTENT_DIR = path.join(PROJECT_ROOT, 'src/content/projects');

async function getCloudinaryResources() {
    try {
        console.log('🔍 Fetching existing Cloudinary resources...');
        let resources = [];
        let nextCursor = null;

        do {
            const result = await cloudinary.api.resources({
                type: 'upload',
                prefix: 'portfolio-projects/', // Only get images in our folder
                max_results: 500,
                next_cursor: nextCursor
            });

            resources = resources.concat(result.resources);
            nextCursor = result.next_cursor;
        } while (nextCursor);

        // Map: public_id -> { bytes, url }
        const resourceMap = new Map();
        resources.forEach(res => {
            resourceMap.set(res.public_id, {
                bytes: res.bytes,
                url: res.secure_url
            });
        });

        console.log(`📚 Found ${resources.length} existing images on Cloudinary.`);
        return resourceMap;
    } catch (error) {
        console.error('⚠️ Could not fetch Cloudinary resources (might be API permissions). Proceeding with overwrite mode.');
        return new Map(); // Return empty map to fallback to normal upload
    }
}

async function uploadImage(filePath, projectFolder, existingResources) {
    try {
        const fileName = path.basename(filePath, path.extname(filePath));
        const publicId = `portfolio-projects/${projectFolder}/${fileName}`; // accurate public_id

        const stats = fs.statSync(filePath);

        // Check if exists
        if (existingResources.has(publicId)) {
            const remote = existingResources.get(publicId);
            // Simple check: If file size matches, we skip. 
            // Better check would be content hash, but size is a good heuristic for speed.
            if (remote.bytes === stats.size) {
                console.log(`⏩ Skipped (Already exists): ${path.basename(filePath)}`);
                return remote.url;
            }
        }

        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'portfolio-projects', // Base folder?
            // Note: 'folder' param combined with public_id can be tricky.
            // Best practice: Specify full public_id and no folder if you want precise control, 
            // OR specify folder and simple filename. 
            // Let's use public_id directly to match our check logic.
            public_id: `${projectFolder}/${fileName}`,
            folder: 'portfolio-projects',
            overwrite: true,
        });
        return result.secure_url;
    } catch (error) {
        console.error(`❌ Failed to upload ${filePath}:`, error.message);
        return null;
    }
}

async function run() {
    console.log('🚀 Starting Cloudinary Sync (Smart Detect)...');

    // 1. Get existing map
    const existingResources = await getCloudinaryResources();

    // 2. Find all local images
    const imageFiles = await glob('**/*.{png,jpg,jpeg,gif,webp}', {
        cwd: IMAGES_DIR,
        absolute: true
    });

    if (imageFiles.length === 0) {
        console.log('✅ No local images to upload.');
        return;
    }

    console.log(`📸 Found ${imageFiles.length} local images to process.`);

    const urlMapping = new Map();

    // 3. Upload images loop
    for (const file of imageFiles) {
        const relativePath = path.relative(IMAGES_DIR, file);
        // relativePath is like "behance/coverImage.png"

        // Extract project folder name
        const projectFolder = path.dirname(relativePath);

        // Original MDX path reference (to be replaced)
        const publicPath = `/images/projects/${relativePath}`;

        // Check if this is indeed a project file (has a parent folder)
        if (projectFolder === '.') {
            console.warn(`⚠️ Skipping root file: ${relativePath}`);
            continue;
        }

        // console.log(`Processing: ${relativePath}...`);
        const cloudUrl = await uploadImage(file, projectFolder, existingResources);

        if (cloudUrl) {
            urlMapping.set(publicPath, cloudUrl);
        }
    }

    // 4. Update MDX files (Smart Replacement)
    console.log('📝 Checking MDX content files...');
    const mdxFiles = await glob('*.mdx', { cwd: CONTENT_DIR, absolute: true });

    for (const mdxFile of mdxFiles) {
        const projectSlug = path.basename(mdxFile, '.mdx'); // e.g. "behance"
        let content = fs.readFileSync(mdxFile, 'utf-8');
        let hasChanges = false;

        // Find all images belonging to this project from our map
        const projectImages = [];
        urlMapping.forEach((cloudUrl, localPublicPath) => {
            // localPublicPath is like "/images/projects/behance/cover.png"
            if (localPublicPath.includes(`/images/projects/${projectSlug}/`)) {
                const originalFileName = path.basename(localPublicPath); // cover.png
                const fileNameNoExt = path.parse(originalFileName).name; // cover
                projectImages.push({
                    nameNoExt: fileNameNoExt,
                    newUrl: cloudUrl
                });
            }
        });

        if (projectImages.length === 0) continue;

        // Replace in content
        projectImages.forEach(img => {
            // Regex to find url containing the filename
            // Matches: https://.../cover.png OR /images/.../cover.png OR .../cover.webp
            const regex = new RegExp(`(https?:\\/\\/[^\\s\\)]+|\\/[^\\s\\)]+)\\/${img.nameNoExt}\\.(png|jpg|jpeg|webp|gif)`, 'gi');

            if (regex.test(content)) {
                // Check if it's ALREADY the same cloud URL to avoid pointless writes
                const match = content.match(regex);
                if (match && match[0] !== img.newUrl) {
                    content = content.replace(regex, img.newUrl);
                    hasChanges = true;
                }
            }
        });

        if (hasChanges) {
            fs.writeFileSync(mdxFile, content, 'utf-8');
            console.log(`   ✨ Updated references in ${path.basename(mdxFile)}`);
        }
    }

    console.log('🎉 Sync Complete!');
}

run();
