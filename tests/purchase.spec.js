
const { test, expect } = require('../fixtures/test-fixtures');

test('purchase product as guest', async ({ pages }) => {
  await pages.product.open();

  await pages.product.addToCart();

  await pages.cart.open();
  await pages.cart.proceedToCheckout();

  const email = `customer${Date.now()}@example.com`;

  await pages.checkout.continueAsGuest(email);
  await pages.checkout.fillAddress();
  await pages.checkout.selectPaymentAndFinish();
});
