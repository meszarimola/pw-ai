import { Page, Locator } from '@playwright/test';

// Attempts to accept common cookie banners to unblock UI interactions.
export async function acceptCookiesIfPresent(page: Page) {
  const candidates: Locator[] = [
    page.getByRole('button', { name: /accept|agree|allow all|got it|ok/i }),
    page.locator('#onetrust-accept-btn-handler'),
    page.locator('button:has-text("Accept All")'),
    page.locator('button:has-text("Accept Cookies")'),
  ];

  for (const loc of candidates) {
    try {
      if (await loc.count()) {
        const btn = loc.first();
        if (await btn.isVisible()) {
          await btn.click({ timeout: 2000 }).catch(() => {});
          break;
        }
      }
    } catch {
      // ignore
    }
  }
}

export async function closePopupsIfAny(page: Page) {
  // Generic close buttons for modals/popups if they appear.
  const close = page.locator('button[aria-label="Close"], button:has-text("Close")');
  if (await close.count()) {
    await close.first().click({ timeout: 2000 }).catch(() => {});
  }
}

