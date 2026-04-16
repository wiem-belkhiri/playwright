import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../pages/main'; // Adjust the path to the correct location

test('E2E Testing', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a LINK named "Testing documentation".
  const $link = await page.getByRole('link', { name: 'Testing documentation' });
  await expect($link).toBeVisible();
  await $link.click();
});
  

  test('E2E Testing with Page Object Model', async ({ page }) => {
    const playwrightPage = new PlaywrightDevPage(page);

    await playwrightPage.goto();
    await playwrightPage.clickTestingDocumentation();
    await playwrightPage.verifyInstallationHeading();
  });


  test('Verify Getting Started Page with Page Object Model', async ({ page }) => {
    const playwrightPage = new PlaywrightDevPage(page);

    await playwrightPage.goto();
    await playwrightPage.clickGettingStarted();
    await playwrightPage.verifyInstallationHeading();
});

  test('Verify API Reference Page with Page Object Model', async ({ page }) => {
    const playwrightPage = new PlaywrightDevPage(page);

    await playwrightPage.goto();
    await playwrightPage.clickAPI();

  await page.getByRole('heading', { name: 'Playwright' }).click();
});

  test('Verify Search Functionality with Page Object Model', async ({ page }) => {
    const playwrightPage = new PlaywrightDevPage(page);

    await playwrightPage.goto();
    await playwrightPage.verifySearchFunctionality('core commands');
  });

  test('Verify Community Page', async ({ page }) => {
    const playwrightPage = new PlaywrightDevPage(page);
    await playwrightPage.goto();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: '.NET' }).click();
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('heading', { name: 'GitHubDirect link to GitHub' }).click();
  });

  test('Verify Blog Page', async ({ page }) => {
    const playwrightPage = new PlaywrightDevPage(page);
    await playwrightPage.goto();
    const $blogLink = await page.getByRole('link', { name: 'Blog' });
    await expect($blogLink).toBeVisible();
    await $blogLink.click();
});


