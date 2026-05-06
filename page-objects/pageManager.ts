/* This file stores all the page object classes for the conduit application.
| It contains the base of the classes.
| It is needed to work with the dry principle and to avoid code duplication.
| to work directly with the page object classes without using the Page class from playwright in the tests */
import { Page } from "@playwright/test";
import { LandingPage } from "./landing";
import { LoginPage } from "./LoginPage";

export class PageManager {
  private readonly page: Page;
  readonly landingPage: LandingPage;
  readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page
    this.landingPage = new LandingPage(page);
    this.loginPage = new LoginPage(page);
  }

}