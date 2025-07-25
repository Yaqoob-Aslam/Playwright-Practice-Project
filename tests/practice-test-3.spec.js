import { test, expect, chromium } from '@playwright/test';

test('has title', async () => {
    const browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized'],
    });
    
    const context = await browser.newContext({
        viewport: null,
        deviceScaleFactor: undefined,
    });
    
    const page = await context.newPage();
    await page.goto('https://www.ebay.com/');
    await page.locator("//li[@class='vl-flyout-nav__js-tab']//a[contains(text(),'Electronics')]").hover();

    await page.pause();
});


