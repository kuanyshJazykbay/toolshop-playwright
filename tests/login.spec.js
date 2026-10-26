
const { test, expect } = require('../fixtures/test-fixtures');

test('login with valid credentials', async ({ pages, page }) => {
  await pages.login.open();

  await pages.login.login(
    'customer@practicesoftwaretesting.com',
    'welcome01'
  );

  // После успешного входа должна открыться страница аккаунта
  await expect(page).toHaveURL(/\/account/);
});

test('login with invalid credentials', async ({ pages }) => {
  await pages.login.open();

  await pages.login.login(
    `unknown${Date.now()}@example.com`,
    'WrongPassword123!'
  );

  // Пользователь должен остаться на странице входа
  await expect(pages.login.loginButton).toBeVisible();
});
