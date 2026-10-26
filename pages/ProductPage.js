
const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
  }

  async open() {
    await this.page.goto('https://practicesoftwaretesting.com/');

    // Ищем товар по названию, а не по меняющемуся ID
    const product = this.page.getByText('Combination Pliers', {
      exact: true
    });

    await expect(product).toBeVisible();
    await product.click();

    await expect(this.addToCartButton).toBeVisible();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = { ProductPage };
