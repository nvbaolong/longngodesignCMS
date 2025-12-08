
import { scrapeBehance } from './import-behance.js';
import puppeteer from 'puppeteer';

const urls = [
    'https://www.behance.net/gallery/208644583/Chatbot-Builder',
    'https://www.behance.net/gallery/207632573/VPN-Mobile-App-concept',
    'https://www.behance.net/gallery/204056601/Lean-Growth-Website-Design',
    'https://www.behance.net/gallery/199115079/PockWord-The-Mobile-Vocabulary-Builder-App',
    'https://www.behance.net/gallery/179472601/Data-Connection-Services-Website',
    'https://www.behance.net/gallery/174742281/Chacha-Charity-on-chain-mobile-App',
    'https://www.behance.net/gallery/159186385/METAVERSE-SHOPPING-MALL-USER-INTERFACE',
    'https://www.behance.net/gallery/157710763/Custodial-Wallets-Website-Dashboard',
    'https://www.behance.net/gallery/153750513/eKYC-with-OCR-and-Liveness-Detection',
    'https://www.behance.net/gallery/153736819/Freelancer-and-Client-Dashboard',
    'https://www.behance.net/gallery/153749289/Data-Center-Landing-Page',
    'https://www.behance.net/gallery/152540607/Freelancer-Job-Finder-in-Web3',
    'https://www.behance.net/gallery/147901091/Sunrise-Chain-Landing-page',
    'https://www.behance.net/gallery/147844757/DEX-Trading-Platform-Application',
    'https://www.behance.net/gallery/143897623/Bikearn-Move-to-Earn-App',
    'https://www.behance.net/gallery/154071931/Job-Finding-Website-for-Young-People',
    'https://www.behance.net/gallery/139197249/Axie-Infinity-Marketplace-Redesign',
    'https://www.behance.net/gallery/153753885/Social-Media-for-Dating',
    'https://www.behance.net/gallery/133325181/Merchant-Mobile-App',
    'https://www.behance.net/gallery/132505927/Autism-Treatments-App-UI',
    'https://www.behance.net/gallery/130843161/Finding-Estate-App',
    'https://www.behance.net/gallery/130826197/Foreign-Language-Learning-App',
    'https://www.behance.net/gallery/130821297/Online-Booking-Room-App-UI',
    'https://www.behance.net/gallery/130812857/Underwear-E-commerce-Website'
];

async function run() {
    console.log(`Starting import of ${urls.length} projects using Puppeteer...`);

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // Safer for some envs
    });
    const page = await browser.newPage();

    // Set viewport to desktop to ensure layouts are correct
    await page.setViewport({ width: 1920, height: 1080 });

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(`\n[${i + 1}/${urls.length}] Processing: ${url}`);

        try {
            await scrapeBehance(page, url);
        } catch (err) {
            console.error('Failed to process project:', err);
        }
    }

    await browser.close();
    console.log('\nBulk import completed!');
}

run();
