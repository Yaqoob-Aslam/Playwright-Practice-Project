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
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('/home/yaqoob/Downloads/photo.jpg');
    await page.locator('#file-submit').click();
    await expect(page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText('File Uploaded!');

    await page.pause();

})