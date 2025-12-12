
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'fast-glob';

// --- CONFIGURATION ---
const CLOUD_NAME = 'diy4eubhe';
const API_KEY = '151696535945977';
const API_SECRET = '-dBHqIGaAIE-yziOJs0SngnMmfY';

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

async function uploadImage(filePath) {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'portfolio-projects',
            use_filename: true,
            unique_filename: false,
            overwrite: true,
        });
        return result.secure_url;
    } catch (error) {
        console.error(`❌ Failed to upload ${filePath}:`, error.message);
        return null;
    }
}

async function run() {
    console.log('🚀 Starting Cloudinary Sync...');

    // 1. Find all local images
    const imageFiles = await glob('**/*.{png,jpg,jpeg,gif,webp}', {
        cwd: IMAGES_DIR,
        absolute: true
    });

    if (imageFiles.length === 0) {
        console.log('✅ No local images to upload.');
        return;
    }

    console.log(`📸 Found ${imageFiles.length} local images to upload.`);

    const urlMapping = new Map();

    // 2. Upload images loop
    for (const file of imageFiles) {
        const relativePath = path.relative(IMAGES_DIR, file);
        const publicPath = `/images/projects/${relativePath}`; // The path currently used in MDX

        console.log(`Uploading: ${relativePath}...`);
        const cloudUrl = await uploadImage(file);

        if (cloudUrl) {
            urlMapping.set(publicPath, cloudUrl);
            console.log(`   ✅ Uploaded -> ${cloudUrl}`);

            // Optional: Delete local file after success?
            // For safety, let's keep them for now or ask user.
            // fs.unlinkSync(file); 
        }
    }

    // 3. Update MDX files
    console.log('📝 Updating MDX content files...');
    const mdxFiles = await glob('*.mdx', { cwd: CONTENT_DIR, absolute: true });

    for (const mdxFile of mdxFiles) {
        let content = fs.readFileSync(mdxFile, 'utf-8');
        let hasChanges = false;

        // Replace all matching paths
        urlMapping.forEach((newUrl, oldPath) => {
            if (content.includes(oldPath)) {
                // Global replace
                content = content.replaceAll(oldPath, newUrl);
                hasChanges = true;
            }
        });

        if (hasChanges) {
            fs.writeFileSync(mdxFile, content, 'utf-8');
            console.log(`   ✨ Updated references in ${path.basename(mdxFile)}`);
        }
    }

    console.log('🎉 Sync Complete! Images are now on Cloudinary.');
}

run();
