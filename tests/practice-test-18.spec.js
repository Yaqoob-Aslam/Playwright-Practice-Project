
import { test, expect, chromium } from '@playwright/test';

test('File-Upload-Interaction', async ({}, testInfo) => {
  testInfo.setTimeout(90000);

  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });

  const context = await browser.newContext({
    viewport: null,
    deviceScaleFactor: undefined,
  });

  const page = await context.newPage();  
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

  const addFilesButton = page.locator('span.btn:has-text("Add files...") >> visible=true');
  await addFilesButton.waitFor({ state: 'visible' });

  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    addFilesButton.click()
  ]);

  console.log('Multiple allowed:', fileChooser.isMultiple()); 

  await fileChooser.setFiles(['./tests/uploadedfile/apple-1.jpg','./tests/uploadedfile/mango-1.jpg']);
  await page.waitForTimeout(3000);
  await page.pause();
});