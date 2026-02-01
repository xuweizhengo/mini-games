const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 700, height: 850 });
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });
  
  // 点击开始按钮
  await page.click('#startBtn');
  
  // 等待游戏运行一会，让蛇移动几步
  await new Promise(r => setTimeout(r, 1500));
  
  await page.screenshot({ path: '/root/.openclaw/workspace/games/screenshot.png' });
  await browser.close();
  console.log('Screenshot saved!');
})();
