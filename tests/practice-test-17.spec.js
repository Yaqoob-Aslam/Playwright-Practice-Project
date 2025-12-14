import { test, expect, chromium } from '@playwright/test';

test('Interact with frames', async ({}, testInfo) => {
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

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Like, Share, comment & subscribe to LambdaTest");
    await page.click("#create");
    // await page.click("#link-to-download");

    const download = await Promise.all([
      page.waitForEvent('download'),
      page.click("#link-to-download"),
    ])

    const fileName = download[0].suggestedFilename()
    await download[0].saveAs(fileName);
});
