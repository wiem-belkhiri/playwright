import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qatesting.vercel.app/practice/input-fields');
  await page.getByTestId('input-movie-name').click();
  await page.getByTestId('input-movie-name').press('CapsLock');
  await page.getByTestId('input-movie-name').fill('T');
  await page.getByTestId('input-movie-name').press('CapsLock');
  await page.getByTestId('input-movie-name').fill('Titanic');
  await page.getByTestId('input-movie-name').press('Enter');
  await page.getByTestId('input-append-text').click();
  await page.getByTestId('input-append-text').press('Tab');
  await page.getByTestId('input-verify-text').click();
  await page.getByTestId('input-clear-text').click();
  await page.getByTestId('input-clear-text').fill('');
  await page.getByTestId('input-readonly').click();
});