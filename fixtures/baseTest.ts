import { test as base, Page, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

async function login (pm: PageManager, page: Page) {
    await page.goto('/');    
    await expect(page).toHaveTitle(/Conduit/);
    await pm.landingPage.clickSignIn()
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible()
    await pm.loginPage.login() 
    await expect(page.getByRole('link', { name: 'New Article' })).toBeVisible()
}

export const test = base.extend<{ pm: PageManager }> ({
    pm: async ({ page }, use) => {
        const pm = new PageManager(page);
        await login(pm, page)
        await use(pm);
    },
});