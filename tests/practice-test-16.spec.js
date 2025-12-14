
import { test, expect, chromium } from '@playwright/test';
import moment from 'moment';

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

    /* ------------------------------------------------------------------------------
    1st Approach: Directly fill the date input field
    ---------------------------------------------------------------------------------


    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "1994-12-04";
    await page.fill("#birthday", date);   // #birthday is correct selector
    await page.waitForTimeout(3000);
    */

    /* ------------------------------------------------------------------------------
    2nd Approach: Interact with the calendar UI to select a date
    ---------------------------------------------------------------------------------


    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await page.click("//input[@placeholder='Start date']")
    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

    await prev.click();
    await page.click("//td[@class='day'][text()='4']");
    await page.waitForTimeout(3000);
    */

    /* ------------------------------------------------------------------------------
    3rd Approach: Interact with the calendar UI to select a date dynamically
    ---------------------------------------------------------------------------------


    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await page.click("//input[@placeholder='Start date']")

    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

    let dateToSelect = "March 2025";
    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    console.log(thisMonth);
    
    while(await mmYY.textContent() !== dateToSelect){
      if(thisMonth){
        await prev.click();
      }
      else{
        await next.click();
      }
    }

    await page.click("//td[@class='day'][text()='4']");
    await page.waitForTimeout(3000);
    // await browser.close();
    */
   
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await selectDate(12, "December 2017");
    await page.reload();

    await selectDate(5, "December 2023");
    await page.reload();

    await selectDate(2, "July 2022");
    await page.waitForTimeout(3000)

    async function selectDate(date, dateToSelect) {
        await page.click("//input[@placeholder='Start date']")

        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

        // let dateToSelect: string = "May 2019";
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
        console.log("this month? " + thisMonth);
        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click();
            } else {
                await next.click();
            }
        }
        await page.click(`//td[@class='day'][text()='${date}']`);
    }

 });
