const puppeteer = require('puppeteer');
const { join } = require('path');

const pageName = 'obfuscate-tailwind-nextjs';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();
  await page.goto(`http://localhost:3000/${pageName}`);
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    type: 'png',
    path: join(__dirname, '..', 'outputs', `${pageName}.png`),
    fullPage: true
  });

  browser.close();
  console.log(`screenshoted http://localhost:3000/${pageName}`);
})();
