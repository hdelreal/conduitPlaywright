/* This is the page object model for landing page of the
| conduit application. It contains the locators and methods for interacting with the landing page. */

import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly newAccount: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.newAccount = page.getByRole('link', { name: 'Need an account?' });
    this.email = page.getByRole('textbox', { name: 'Email' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
  }

  async login() {
    await this.email.fill('testgen@test.com');
    await this.password.fill('test12345678');
    await this.signInButton.click();
  }
}