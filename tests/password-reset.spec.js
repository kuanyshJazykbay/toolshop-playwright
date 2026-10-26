
const { test, expect } = require('../fixtures/test-fixtures');

test('password reset rejects an unknown email', async ({ pages, page }) => {
  await pages.passwordReset.open();

  const responsePromise = page.waitForResponse(response =>
    response.url().includes('/users/forgot-password') &&
    response.request().method() === 'POST'
  );

  await pages.passwordReset.submitEmail(
    `unknown${Date.now()}@example.com`
  );

  const response = await responsePromise;

  expect(response.status()).toBe(422);

  const body = await response.json();

  expect(body.message).toBe('The selected email is invalid.');
  expect(body.errors.email).toContain('The selected email is invalid.');
});
