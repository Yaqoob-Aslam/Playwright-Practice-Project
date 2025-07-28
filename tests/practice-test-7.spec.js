import { test, expect, chromium } from '@playwright/test';

test.skip('Alert', async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });

  const context = await browser.newContext({
    viewport: null,
    deviceScaleFactor: undefined,
  });

  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
  });
  await page.locator("//button[text()='Click for JS Alert']").click();
});

//------------------------------------------------------------------------

test.skip('Handle JS Confirm Alert', async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });
  const context = await browser.newContext({
    viewport: null,
    deviceScaleFactor: undefined,
  });

  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Click for JS Confirm');
    await dialog.dismiss(); 
  });

  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
});

//------------------------------------------------------------------------

test('Prompt', async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });

  const context = await browser.newContext({
    viewport: null,
    deviceScaleFactor: undefined,
  });

  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('I am JS Prompt');
    await dialog.accept("Hello, World!"); 
  });
  await page.locator("//button[text()='Click for JS Prompt']").click();
});