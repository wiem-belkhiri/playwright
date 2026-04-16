import { expect } from "@playwright/test";

export class PlaywrightDevPage {
    constructor(private page) {}

    async goto() {
      await this.page.goto('https://playwright.dev/dotnet');
    }

    async clickTestingDocumentation() {
      const $link = await this.page.getByRole('link', { name: 'Testing documentation' });
      await expect($link).toBeVisible();
      await $link.click();
    }

    async verifyInstallationHeading() {
      const $heading = await this.page.getByRole('heading', { name: 'Installation' });
      await expect($heading).toBeVisible();
    }

    async clickGettingStarted() {
      const $gettingStarted = await this.page.getByRole('link', { name: 'Getting started' });
      await expect($gettingStarted).toBeVisible();
      await $gettingStarted.click();
    }

    async clickAPI() {
      const $apiReference = await this.page.getByRole('link', { name: 'API' });
      await expect($apiReference).toBeVisible();
      await $apiReference.click();
    }

    async verifySearchFunctionality(searchTerm: string) {
        await this.page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
        const $searchInput = await this.page.getByRole('searchbox', { name: 'Search' });
      
      await expect($searchInput).toBeVisible();
      await $searchInput.fill(searchTerm);

      const $searchResult = await this.page.getByText(searchTerm, { exact: false });
      await expect($searchResult).toBeVisible();
    }
  }
