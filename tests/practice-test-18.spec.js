import { test, expect, chromium } from '@playwright/test';

test('File-Upload-Interaction', async ({}, testInfo) => {
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
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
  await page.locator('[name="files[]"]').setInputFiles(['./tests/uploadedfile/apple-1.jpg', './tests/uploadedfile/mango-1.jpg']);

  await page.waitForTimeout(3000);
  await page.pause();

});