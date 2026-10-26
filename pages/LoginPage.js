
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
  }

  async open() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await this.page.locator('[data-test="nav-sign-in"]').click();
    await expect(this.emailInput).toBeVisible();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
