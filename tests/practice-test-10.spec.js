import { test, expect, chromium } from '@playwright/test';

const testData = require('../testdata.json');

test('Working with Multiple Tabs', async () => {
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

  await page.locator('#name').fill(testData.name);
  await page.locator('#email').fill(testData.username);
  await page.locator('#password').fill(testData.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(3000);
  await page.pause();

});