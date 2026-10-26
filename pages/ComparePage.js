
const { expect } = require('@playwright/test');

class ComparePage {
  constructor(page) {
    this.page = page;
    this.compareLink = page.locator('[data-test="compare-link"]');
    this.showDifferences = page.locator('[data-test="show-differences"]');
  }

  async addProduct(productId) {
    await this.page.goto('https://practicesoftwaretesting.com/');

    await this.page.locator(`[data-test="${productId}"]`).click();

    const addToCompareButton = this.page.locator('[data-test="add-to-compare"]');
    await expect(addToCompareButton).toBeVisible();
    await addToCompareButton.click();
  }

  async openComparison() {
    await this.compareLink.click();
    await expect(this.showDifferences).toBeVisible();
  }

  async toggleDifferences() {
    await this.showDifferences.check();
    await expect(this.showDifferences).toBeChecked();

    await this.showDifferences.uncheck();
    await expect(this.showDifferences).not.toBeChecked();
  }
}

module.exports = { ComparePage };
