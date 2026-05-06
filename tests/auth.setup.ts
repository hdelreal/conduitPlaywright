import { test, expect } from '@playwright/test';
import path from 'path';
import { LandingPage } from '../page-objects/landing';
import { LoginPage } from '../page-objects/LoginPage';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('authentication', async ({ page }) => {
    const landing = new LandingPage(page)
    const login = new LoginPage(page)

    await page.goto('/');
    await expect(page).toHaveTitle(/Conduit/);
    await landing.clickSignIn()
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible()
    await login.login() 
    await expect(page.getByRole('link', { name: 'New Article' })).toBeVisible()
    await page.context().storageState({ path: authFile });
})