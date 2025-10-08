import { test, expect } from '@playwright/test';

test.describe('Homepage Basics', () => {
  test('has at least one internal link', async ({ page }) => {
    await page.goto('/');
    const internalLink = page.locator('a[href^="/"]');
    await expect(internalLink.first()).toBeVisible();
  });
});

