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
    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    await page.locator('#state').selectOption('Goa');
    await page.waitForTimeout(5000);

    await page.locator('#state').selectOption({value: 'Gujarat'});
    await page.waitForTimeout(5000);

    await page.locator('#state').selectOption({index: 2});
    await page.waitForTimeout(5000);

    await page.locator('#state').selectOption({label: 'Haryana'});
    await page.waitForTimeout(5000);

    const value = await page.locator('#state').textContent();
    console.log(value);

    await expect(page.locator('#state')).toHaveValue('Haryana');
    await page.waitForTimeout(5000);

    await expect(value.includes('Haryana')).toBeTruthy();


    let state = await page.$('#state');
    let allElements = await state.$$('option');

    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i]
        let text = await element.textContent();
        if( text === 'Haryana') {
            break;
        }
        console.log(text);
    }
});