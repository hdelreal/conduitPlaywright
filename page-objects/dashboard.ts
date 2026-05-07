import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class Dashboard extends BasePage {
    readonly yourFeed: Locator;
    readonly globalFeed: Locator;
    readonly homeLink: Locator;
    readonly newArticleLink: Locator;
    readonly settingsLink: Locator;

    constructor (page: Page) {
        super(page);
        this.yourFeed = this.page.getByRole('link', { name: 'Your Feed' });
        this.globalFeed = this.page.getByRole('link', { name: 'Global Feed' });
        this.homeLink = this.page.getByRole('link', { name: 'Home' });
        this.newArticleLink = this.page.getByRole('link', { name: 'New Article' });
        this.settingsLink = this.page.getByRole('link', { name: 'Settings' });
    }

    

}