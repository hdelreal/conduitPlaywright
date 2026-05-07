/* This is the page object model for landing page of the
| conduit application. It contains the locators and methods for interacting with the landing page. */

import { Locator, Page } from '@playwright/test';
import dotenv from 'dotenv';
import { BasePage } from './basePage';


export class LoginPage extends BasePage{
  readonly newAccount: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page)
    this.newAccount = page.getByRole('link', { name: 'Need an account?' });
    this.email = page.getByRole('textbox', { name: 'Email' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
  }

  async login() {
    await this.email.fill(`${process.env.USER_EMAIL}`);
    await this.password.fill(`${process.env.USER_PASSWORD}`);
    await this.signInButton.click();
  }
}