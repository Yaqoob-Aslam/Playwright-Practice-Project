import { test, expect, chromium } from '@playwright/test';

test('has title', async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });

  const context = await browser.newContext({
    viewport: null,
   //viewport: { width: 1654, height: 832 },
    deviceScaleFactor: undefined,
  });

  const page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle('OrangeHRM');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Leave' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Time' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Recruitment' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'My Info' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Performance' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Directory' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Maintenance' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Buzz' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'OrangeHRM, Inc' })).toBeVisible();
  await expect(page.getByRole('link', {name: 'Time' })).toHaveAttribute('href', '/web/index.php/time/viewTimeModule').click();
  
  await page.pause();
});