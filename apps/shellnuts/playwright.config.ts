// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir:'src',
  testMatch: /\.e2e\.ts/,
  webServer: {
    port:3333,
    command:'npx nx run shellnuts:serve'
  },
  projects: [
    {
      name: 'Chrome Stable',
      use: {
        browserName: 'chromium',
        // Test against Chrome Stable channel.
        channel: 'chrome'
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 1200, height: 750 },
      }
    },
    {
      name: 'Desktop Firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 800, height: 600 },
      }
    },
  ],
};
export default config;
