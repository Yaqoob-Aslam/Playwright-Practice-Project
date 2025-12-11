import { test, expect, chromium } from '@playwright/test';

test('Stage website automation', async ({}, testInfo) => {
  testInfo.setTimeout(90000); // Increase timeout to 90 seconds
  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });

  const context = await browser.newContext({
    viewport: null,
    deviceScaleFactor: undefined,
  });

  const page = await context.newPage();

  // Login
  await page.goto('https://stage.ikhub.biz/auth/login', { timeout: 60000 });
  await page.waitForSelector('[placeholder="Email or User Name"]', { timeout: 15000 });
  await page.getByPlaceholder('Email or User Name').fill('owner');
  await page.getByPlaceholder('Password').fill('Password@123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Wait for dashboard heading to ensure navigation is complete
  await page.waitForSelector('h1:has-text("Dashboard")', { timeout: 30000 });

  await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.waitForTimeout(2000);
  await page.locator('[title*="-08-01"]').first().click();
  await page.waitForTimeout(1000);
  await page.getByText('31', { exact: true }).nth(1).click();
  
  await page.waitForTimeout(5000);
  
  await page.pause();
});