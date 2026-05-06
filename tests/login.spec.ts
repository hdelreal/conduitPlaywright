import { expect } from '@playwright/test';
import { HtttpRequests } from '../utils/http';
import { test } from '../fixtures/baseTest';

test.describe('Login tests', () => {

  test.beforeEach(async ({ pm, page }) => {
  
  })

  test('Sign in to app', async ({ pm, page, request }) => {
    
    const api = new HtttpRequests(request)
    const response = await api.get('/api/tags')
    expect(response.status()).toBe(200)

  });
})



