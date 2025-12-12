
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

async function uploadImage(filePath, projectFolder) {
    try {
        const fileName = path.basename(filePath, path.extname(filePath));
        const publicId = `${projectFolder}/${fileName}`; // E.g. behance/coverImage

        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'portfolio-projects', // Base folder
            public_id: publicId,          // Subpath: behance/coverImage
            overwrite: true,
        });
        return result.secure_url;
    } catch (error) {
        console.error(`❌ Failed to upload ${filePath}:`, error.message);
        return null;
    }
}

async function run() {
    console.log('🚀 Starting Cloudinary Sync (Fixed Structure)...');

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

        console.log(`Uploading: ${relativePath} -> portfolio-projects/${projectFolder}...`);
        const cloudUrl = await uploadImage(file, projectFolder);

        if (cloudUrl) {
            urlMapping.set(publicPath, cloudUrl);
            console.log(`   ✅ Uploaded -> ${cloudUrl}`);

            // Optional: Delete local file after success?
            // For safety, let's keep them for now or ask user.
            // fs.unlinkSync(file); 
        }
    }

    // 3. Update MDX files (Smart Replacement)
    console.log('📝 Updating MDX content files...');
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
        // We look for any URL that ends with the filename (ignoring extension/version variances)
        // Common patterns: "coverImage: URL", "![alt](URL)"

        projectImages.forEach(img => {
            // Regex to find url containing the filename
            // Matches: https://.../cover.png OR /images/.../cover.png OR .../cover.webp
            const regex = new RegExp(`(https?:\\/\\/[^\\s\\)]+|\\/[^\\s\\)]+)\\/${img.nameNoExt}\\.(png|jpg|jpeg|webp|gif)`, 'gi');

            if (regex.test(content)) {
                content = content.replace(regex, img.newUrl);
                hasChanges = true;
            }
        });

        if (hasChanges) {
            fs.writeFileSync(mdxFile, content, 'utf-8');
            console.log(`   ✨ Fixed references in ${path.basename(mdxFile)}`);
        }
    }

    console.log('🎉 Sync Complete! Images are now on Cloudinary.');
}

run();
