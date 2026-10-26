
const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator('[data-test="nav-cart"]');
    this.proceedButton = page.locator('[data-test="proceed-1"]');
  }

  async open() {
    await this.cartButton.click();
    await expect(this.proceedButton).toBeVisible();
  }

  async proceedToCheckout() {
    await this.proceedButton.click();
  }
}

module.exports = { CartPage };
