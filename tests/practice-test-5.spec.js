import { test, expect, chromium } from '@playwright/test';

test('File Upload', async () => {
    const browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized'],
    });
    
    const context = await browser.newContext({
        viewport: null,
        deviceScaleFactor: undefined,
    });

    const page = await context.newPage();
    await page.goto('https://www.google.com/');

    await page.locator('textarea[name="q"]').fill('Playwright file upload example');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);


    await page.locator('textarea[name="q"]').fill('Playwright file upload example');
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(2000);

    await page.keyboard.press('Control+C');
    await page.waitForTimeout(2000);

    await page.keyboard.press('Backspace');
    await page.waitForTimeout(2000);

    await page.keyboard.press('Control+V');
    await page.waitForTimeout(2000);

    /*
    await page.keyboard.type('Hello World!');
    await page.keyboard.press('ArrowLeft');

    await page.keyboard.down('Shift');
    for (let i = 0; i < ' World'.length; i++)
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.up('Shift');
    await page.waitForTimeout(7000);

    await page.keyboard.press('Backspace');
    await page.waitForTimeout(2000);
    */
})