
const { expect } = require('@playwright/test');

class RegisterPage {
  constructor(page) {
    this.page = page;
    this.registerLink = page.locator('[data-test="register-link"]');

    this.firstName = page.locator('[data-test="first-name"]');
    this.lastName = page.locator('[data-test="last-name"]');
    this.dob = page.locator('[data-test="dob"]');

    this.country = page.locator('[data-test="country"]');
    this.postalCode = page.locator('[data-test="postal_code"]');
    this.houseNumber = page.locator('[data-test="house_number"]');

    this.street = page.locator('[data-test="street"]');
    this.city = page.locator('[data-test="city"]');
    this.state = page.locator('[data-test="state"]');

    this.phone = page.locator('[data-test="phone"]');
    this.email = page.locator('[data-test="email"]');
    this.password = page.locator('[data-test="password"]');

    this.submitButton = page.locator('[data-test="register-submit"]');
  }

  async open() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await this.page.locator('[data-test="nav-sign-in"]').click();
    await this.registerLink.click();

    await expect(this.firstName).toBeVisible();
  }

  async register(user) {
  await this.firstName.fill(user.firstName);
  await this.lastName.fill(user.lastName);
  await this.dob.fill(user.dob);

  await this.country.selectOption(user.country);
  await this.postalCode.fill(user.postalCode);
  await this.houseNumber.fill(user.houseNumber);

  await expect(this.street).toHaveValue(/.+/);
  await expect(this.city).toHaveValue(/.+/);
  await expect(this.state).toHaveValue(/.+/);

  await this.phone.fill(user.phone);
  await this.email.fill(user.email);
  await this.password.fill(user.password);

  // Проверяем, не отключена ли кнопка регистрации
  console.log('Register button enabled:', await this.submitButton.isEnabled());

  // Проверяем валидность HTML-формы
  console.log(
    'Invalid fields:',
    await this.page.locator('input, select').evaluateAll(elements =>
      elements
        .filter(element => !element.checkValidity())
        .map(element => ({
          name: element.name,
          testId: element.getAttribute('data-test'),
          value: element.value,
          message: element.validationMessage
        }))
    )
  );

  await this.submitButton.click();

  // Дадим Playwright дождаться одного из возможных результатов
  await expect(this.page.locator('body')).toContainText(
    /success|successfully|account|error|required|invalid|already exists/i
  );
}
}
module.exports = { RegisterPage };
