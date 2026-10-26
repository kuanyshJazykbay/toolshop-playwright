
const { test, expect } = require('../fixtures/test-fixtures');

test('compare two products and toggle differences', async ({ pages, page }) => {
  await pages.compare.addProduct('product-01M5WWSMQHG59P4K2G9SFCBEMK');
  await pages.compare.addProduct('product-01M5WWSMQRCZYTHS8PMX771E7P');

  await pages.compare.openComparison();

  // Проверяем, что открылась страница сравнения
  await expect(page).toHaveURL(/\/comparison$/);

  await pages.compare.toggleDifferences();
});
