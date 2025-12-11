import { test, expect, chromium } from '@playwright/test';

test('POPUP-Window', async ({}, testInfo) => {
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

  await page.goto('https://demoqa.com/browser-windows');

  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('#windowButton')
  ]);

  await popup.waitForLoadState();
  console.log(await popup.title());
});
