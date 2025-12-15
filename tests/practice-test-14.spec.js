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

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);

    const frame = page.frameLocator("#firstFr");
    await frame.locator("//input[@placeholder='Enter name']").fill("TestUser");
    await page.waitForTimeout(3000);

    await frame.locator("//input[@placeholder='Enter email']").fill("UpdatedUser");
    await page.waitForTimeout(3000);

    const nestedFrame = frame.frameLocator("iframe[src='innerframe']");
    await nestedFrame.locator("//input[@name='email']").fill("testuser@123");
    await page.waitForTimeout(3000);
});
