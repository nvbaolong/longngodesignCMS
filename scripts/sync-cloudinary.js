
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
const VIDEOS_DIR = path.join(PROJECT_ROOT, 'public/videos/projects');
const CONTENT_DIR = path.join(PROJECT_ROOT, 'src/content/projects');

async function getCloudinaryResources(resourceType = 'image') {
    try {
        console.log(`🔍 Fetching existing Cloudinary ${resourceType}s...`);
        let resources = [];
        let nextCursor = null;

        do {
            const result = await cloudinary.api.resources({
                resource_type: resourceType,
                type: 'upload',
                prefix: 'portfolio-projects/',
                max_results: 500,
                next_cursor: nextCursor
            });

            resources = resources.concat(result.resources);
            nextCursor = result.next_cursor;
        } while (nextCursor);

        const resourceMap = new Map();
        resources.forEach(res => {
            resourceMap.set(res.public_id, {
                bytes: res.bytes,
                url: res.secure_url
            });
        });

        console.log(`📚 Found ${resources.length} existing ${resourceType}s on Cloudinary.`);
        return resourceMap;
    } catch (error) {
        console.error(`⚠️ Could not fetch Cloudinary ${resourceType}s:`, error.message);
        return new Map();
    }
}

async function uploadResource(filePath, projectFolder, existingResources, resourceType = 'image') {
    try {
        const fileName = path.basename(filePath, path.extname(filePath));
        const publicId = `portfolio-projects/${projectFolder}/${fileName}`;

        const stats = fs.statSync(filePath);

        if (existingResources.has(publicId)) {
            const remote = existingResources.get(publicId);
            if (remote.bytes === stats.size) {
                console.log(`⏩ Skipped (Already exists): ${path.basename(filePath)}`);
                return remote.url;
            }
        }

        console.log(`⬆️ Uploading ${resourceType}: ${path.basename(filePath)}...`);
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: resourceType,
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
    console.log('🚀 Starting Cloudinary Sync (Images & Videos)...');

    // 1. Get existing maps
    const existingImages = await getCloudinaryResources('image');
    const existingVideos = await getCloudinaryResources('video');

    const urlMapping = new Map();

    // 2. Process Images
    console.log('\n📸 Processing Images...');
    const imageFiles = await glob('**/*.{png,jpg,jpeg,gif,webp}', { cwd: IMAGES_DIR, absolute: true });
    for (const file of imageFiles) {
        const relativePath = path.relative(IMAGES_DIR, file);
        const projectFolder = path.dirname(relativePath);
        const publicPath = `/images/projects/${relativePath}`;

        if (projectFolder === '.') continue;

        const cloudUrl = await uploadResource(file, projectFolder, existingImages, 'image');
        if (cloudUrl) urlMapping.set(publicPath, cloudUrl);
    }

    // 3. Process Videos
    console.log('\n🎥 Processing Videos...');
    const videoFiles = await glob('**/*.{mp4,mov,webm,ogg,m4v}', { cwd: VIDEOS_DIR, absolute: true });
    for (const file of videoFiles) {
        const relativePath = path.relative(VIDEOS_DIR, file);
        const projectFolder = path.dirname(relativePath);
        const publicPath = `/videos/projects/${relativePath}`;

        if (projectFolder === '.') continue;

        const cloudUrl = await uploadResource(file, projectFolder, existingVideos, 'video');
        if (cloudUrl) urlMapping.set(publicPath, cloudUrl);
    }

    // 4. Update MDX files
    console.log('\n📝 Updating MDX content files...');
    const mdxFiles = await glob('*.mdx', { cwd: CONTENT_DIR, absolute: true });

    for (const mdxFile of mdxFiles) {
        let content = fs.readFileSync(mdxFile, 'utf-8');
        let hasChanges = false;

        urlMapping.forEach((cloudUrl, localPath) => {
            // Escape dots for regex
            const escapedPath = localPath.replace(/\./g, '\\.');
            const regex = new RegExp(escapedPath, 'g');

            if (regex.test(content)) {
                content = content.replace(regex, cloudUrl);
                hasChanges = true;
            }
        });

        if (hasChanges) {
            fs.writeFileSync(mdxFile, content, 'utf-8');
            console.log(`   ✨ Updated references in ${path.basename(mdxFile)}`);
        }
    }

    console.log('\n🎉 Sync Complete!');
}

run();
