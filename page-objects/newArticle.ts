import { BasePage } from "./basePage";
import { Locator, Page } from '@playwright/test';

export class NewArticle extends BasePage {
    readonly title: Locator;
    readonly about: Locator;
    readonly content: Locator;
    readonly tags: Locator;
    readonly publishButton: Locator;

    constructor(page: Page) {
        super(page)
        this.title = this.page.getByPlaceholder('Article Title');
        this.about = this.page.getByPlaceholder("What's this article about?");
        this.content = this.page.getByPlaceholder("Write your article (in markdown)");
        this.tags = this.page.getByPlaceholder('Enter tags');
        this.publishButton = this.page.getByRole('button', { name: 'Publish Article'});
    }

    async addNewArticle(title: string, about: string, content: string, tags: string) {
        await this.title.fill(`${title}`);
        await this.about.fill(`${about}`);
        await this.content.fill(`${content}`);
        await this.tags.fill(`${tags}`);
        await this.publishButton.click();
    }
}