
const { test, expect } = require('../fixtures/test-fixtures');

test('register a new customer', async ({ pages, page }) => {
  const user = {
    firstName: 'Test',
    lastName: 'Customer',
    dob: '1995-05-15',
    country: 'KZ',
    postalCode: '050000',
    houseNumber: '48',
    phone: '77012345678',
    email: `customer${Date.now()}@example.com`,
    password: 'France2026!'
  };

  await pages.register.open();
  await pages.register.register(user);

  // Проверяем, что после регистрации открылась страница входа
  await expect(page).toHaveURL(/\/auth\/login/);

  // Проверяем, что отображается форма входа
  await expect(page.locator('[data-test="email"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
});
