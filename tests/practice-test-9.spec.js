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

  await page.getByText('New user? Signup').click();
  await page.waitForLoadState('networkidle');
  const count = await page.locator('//input[@type="checkbox"]').count();
  expect(count).toBe(9);
  
});