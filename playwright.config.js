import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: 'e2e.spec.js',
  use: {
    browserName: 'chromium',
    // No Windows usamos o Edge; no GitHub Actions, Chromium instalado pelo Playwright.
    ...(process.env.CI ? {} : { channel: 'msedge' }),
    baseURL: 'http://127.0.0.1:5173',
    viewport: { width: 1440, height: 1000 },
    headless: true
  },
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 5173 --strictPort',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30000
  },
  reporter: 'list'
});
