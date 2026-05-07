import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnMenuLink (menu: string) {
    const menuLink = this.page.getByRole('link', { name: `${menu}`});
    await menuLink.click();
  }
}