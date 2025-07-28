import { test, expect, chromium } from '@playwright/test';

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

  await page.goto('https://freelance-learn-automation.vercel.app/login');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("(//a[contains(@href, 'facebook')])[1]").click()
  ]);
  
  await newPage.waitForTimeout(3000);
  await newPage.locator("(//input[@name='email'])[2]").fill('test@gmail.com');

  await newPage.waitForTimeout(3000);
  await newPage.close();

  await page.locator("#email1").fill('reach@gmail.com');
  await page.waitForTimeout(3000);

});