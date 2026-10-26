
const { test: base, expect } = require('@playwright/test');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { LoginPage } = require('../pages/LoginPage');
const { RegisterPage } = require('../pages/RegisterPage');
const { PasswordResetPage } = require('../pages/PasswordResetPage');
const { ComparePage } = require('../pages/ComparePage');

const test = base.extend({
  pages: async ({ page }, use) => {
    await use({
      product: new ProductPage(page),
      cart: new CartPage(page),
      checkout: new CheckoutPage(page),
      login: new LoginPage(page),
      register: new RegisterPage(page),
      passwordReset: new PasswordResetPage(page),
      compare: new ComparePage(page),
    });
  },
});

module.exports = { test, expect };