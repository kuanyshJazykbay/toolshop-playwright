
const { expect } = require('@playwright/test');

class PasswordResetPage {
  constructor(page) {
    this.page = page;
    this.forgotPasswordLink = page.getByText('Forgot your Password?');
    this.emailInput = page.locator('[data-test="email"]');
    this.submitButton = page.locator(
      '[data-test="forgot-password-submit"]'
    );
  }

  async open() {
    await this.page.goto(
      'https://practicesoftwaretesting.com/auth/login'
    );

    await this.forgotPasswordLink.click();
    await expect(this.emailInput).toBeVisible();
  }

  async submitEmail(email) {
    await this.emailInput.fill(email);
    await expect(this.submitButton).toBeEnabled();
    await this.submitButton.click();
  }
}

module.exports = { PasswordResetPage };
