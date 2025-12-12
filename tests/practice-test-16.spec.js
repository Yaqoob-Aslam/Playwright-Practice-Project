
import { test, expect, chromium } from '@playwright/test';


test('Calendar interaction', async ({}, testInfo) => {
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

  /*
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  let date = "1994-12-04";
  await page.fill("#birthday", date);   // #birthday is correct selector
  await page.waitForTimeout(3000);
  */

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await selectDate(12, "December 2017");
    await page.reload();
    await selectDate(5, "December 2023");
    await page.reload();
    await selectDate(2, "July 2022");
    await page.waitForTimeout(3000) ;

    










 });
