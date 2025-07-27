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
  await page.locator('textarea[name="q"]').fill('Playwright');

  // Wait for the suggestion box to appear
  await page.waitForSelector("//li[@role='presentation']");
  const elements = await page.$$("//li[@role='presentation']");

  for (let i = 0; i < elements.length; i++) {
    const text = await elements[i].textContent();
    if (text.includes('playwright documentation')) {
      await elements[i].click();
      break;
    }
  }
});