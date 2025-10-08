import { defineConfig, devices } from '@playwright/test';

// Build reporters dynamically so Allure is optional locally
const reporters: any[] = [
  ['list'],
  ['html'],
];
try {
  // Only include Allure if the package is installed
  require.resolve('allure-playwright');
  reporters.push(['allure-playwright', { detail: true, resultsDir: 'allure-results', suiteTitle: false }]);
} catch {
  // skip allure locally if not installed
}

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  retries: 0,
  reporter: reporters as any,
  use: {
    baseURL: 'https://ko-fi.com',
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'msedge' },
    },
    // Uncomment to run in more browsers once installed
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
