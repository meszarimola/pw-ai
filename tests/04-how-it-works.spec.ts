import { test, expect } from '@playwright/test';

test.describe('Homepage Navigation', () => {
  test('How it works link goes to /features', async ({ page }) => {
    await page.goto('/');

    const howItWorks = page.getByRole('link', { name: /how it works/i });
    await expect(howItWorks).toBeVisible();

    await Promise.all([
      page.waitForURL(/https:\/\/ko-fi\.com\/features(\b|\/|\?|#)/i),
      howItWorks.click(),
    ]);
  });
});

