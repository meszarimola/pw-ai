import { test, expect } from '@playwright/test';

// Use browser navigation instead of API client to avoid bot protection blocks.
test.describe('Site Health', () => {
  test('Browser GET / returns 2xx', async ({ page }) => {
    const resp = await page.goto('/');
    expect(resp).toBeTruthy();
    expect(resp!.status()).toBeLessThan(400);
  });
});
