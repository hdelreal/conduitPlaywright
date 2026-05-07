import { expect } from '@playwright/test';
import { HtttpRequests } from '../utils/http';
import { test } from '../fixtures/baseTest';

test.describe('Login tests', () => {

  const title = 'This is my test'
  const about = 'I want to add the best article'
  const content = 'This is gonna be the best article for my newest frameworks. I want it to testing porpose'
  const tag = 'newFramework'
  test.use({ storageState: 'playwright/.auth/user.json'})

  test('Sign in to app', async ({ UserPM, page, request }) => {
    
    const api = new HtttpRequests(request)
    const response = await api.get('/api/tags')
    expect(response.status()).toBe(200)

  });

  test('Add New Article', async ({ UserPM, page, request }) => {
    await UserPM.dashboard.clickOnMenuLink('New Article');
    await UserPM.newArticle.addNewArticle(title, about, content, tag);
    await expect(page).toHaveURL(/article/)
    await expect(page.getByRole('heading', { name: `${title}`})).toBeTruthy();
    await UserPM.newArticle.clickOnMenuLink('Home');
  })
})



