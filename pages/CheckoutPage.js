
const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async continueAsGuest(email) {
    await this.page.getByRole('tab', {
      name: 'Continue as Guest'
    }).click();

    await this.page.locator('[data-test="guest-email"]').fill(email);
    await this.page.locator('[data-test="guest-first-name"]').fill('Kama');
    await this.page.locator('[data-test="guest-last-name"]').fill('Eduardo');

    await this.page.locator('[data-test="guest-submit"]').click();
    await this.page.locator('[data-test="proceed-2-guest"]').click();
  }

  async fillAddress() {
    await this.page.locator('[data-test="country"]').selectOption('KZ');
    await this.page.locator('[data-test="postal_code"]').fill('500600');
    await this.page.locator('[data-test="house_number"]').fill('48');
    await this.page.locator('[data-test="street"]').fill('Kazybekbi');
    await this.page.locator('[data-test="city"]').fill('Almaty');
    await this.page.locator('[data-test="state"]').fill('Almaty');

    await this.page.locator('[data-test="proceed-3"]').click();
  }

  async selectPaymentAndFinish() {
    const paymentMethod = this.page.locator(
      '[data-test="payment-method"]'
    );
    const finishButton = this.page.locator('[data-test="finish"]');

    await paymentMethod.selectOption('cash-on-delivery');
    await expect(finishButton).toBeEnabled();
    await finishButton.click();

    await expect(this.page.locator('body')).toContainText(
      /order|success|thank you/i
    );
  }
}

module.exports = { CheckoutPage };
