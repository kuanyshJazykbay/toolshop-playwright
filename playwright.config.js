const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    browserName: 'chromium',
    headless: true,
    testIdAttribute: 'data-test',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  }
});