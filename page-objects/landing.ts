/* This is the page object model for landing page of the
| conduit application. It contains the locators and methods for interacting with the landing page. */

import { expect, Locator, Page } from '@playwright/test';

export class LandingPage {
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.signInButton = page.getByRole('link', { name: 'Sign in' });
  }

  async clickSignIn() {
    await this.signInButton.click();
  }
}