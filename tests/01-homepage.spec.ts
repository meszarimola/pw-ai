import { test, expect } from '@playwright/test';

test.describe('Ko-fi Homepage', () => {
  test('responds and has a sensible title', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveTitle(/ko.?fi/i);
  });
});
