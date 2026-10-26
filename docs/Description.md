# Project Description

## Overview

This project contains end-to-end UI tests for the Practice Software
Testing Toolshop demo website. The tests are written in JavaScript and
executed with Playwright Test. They cover customer account flows,
product comparison, guest checkout, and password-reset validation.

## Technology

-   JavaScript
-   Node.js and npm
-   Playwright Test
-   Page Object Model (POM)
-   Playwright fixtures

## Architecture

### Tests

Files in `tests/` describe user scenarios and contain test-level
assertions. The specifications use page objects provided by the custom
fixture rather than defining page locators directly in each test.

### Page objects

Classes in `pages/` encapsulate selectors and actions for the relevant
application pages:

-   `LoginPage.js` --- opens the login page and submits credentials.
-   `RegisterPage.js` --- fills and submits the new-customer
    registration form.
-   `ProductPage.js` --- opens a product and adds it to the cart.
-   `CartPage.js` --- opens the cart and proceeds to checkout.
-   `CheckoutPage.js` --- completes guest details, address, payment
    selection, and order submission.
-   `ComparePage.js` --- adds products to comparison and toggles the
    differences filter.
-   `PasswordResetPage.js` --- opens the password-reset form and submits
    an email address.

### Fixture

`fixtures/test-fixtures.js` extends the Playwright test fixture and
supplies reusable page objects through a `pages` object. This keeps
setup consistent and reduces repeated object construction in the specs.

## Test scenarios

1.  **Register a new customer**\
    Creates a customer using unique email data, fills the registration
    form, and checks that the application navigates to the login page
    where the login fields are visible.

2.  **Login with valid credentials**\
    Submits the demo account credentials and checks that the browser
    navigates to the account page.

3.  **Login with invalid credentials**\
    Submits an unknown email and an incorrect password, then checks that
    the login control remains visible. This is a negative-path smoke
    check; a more specific assertion against the application's error
    message would make it stronger.

4.  **Purchase a product as a guest**\
    Opens a product, adds it to the cart, proceeds through guest
    checkout, fills the address, selects cash on delivery, and checks
    for an order confirmation indicator.

5.  **Compare two products**\
    Adds two products to the comparison list, opens the comparison page,
    and checks that the "show differences" control can be enabled and
    disabled.

6.  **Password reset with an unknown email**\
    Submits a unique email address that is not expected to exist. The
    test checks for HTTP 422 and the API validation message indicating
    that the email is invalid. This verifies negative validation
    behavior, not successful password reset.

## Test execution and evidence

Run the suite with:

``` powershell
npx playwright test
```

Open the HTML report with:

``` powershell
npx playwright show-report
```

At the time of writing, the latest full run reported **6 passed** with 4
workers in approximately 16.8 seconds. The `screenshots/` folder
contains the execution evidence collected for the submission.

## Limitations and possible improvements

-   The invalid-login test can assert a specific error message or verify
    that the account page is not opened.
-   The password-reset test covers only an unknown email. A separate
    positive test would be needed to claim successful password reset.
-   The checkout test uses the demo site's test environment and should
    not be treated as a real purchase.
-   Because the demo site's catalog can change, product selection should
    use stable, user-facing identifiers or selectors wherever possible.
