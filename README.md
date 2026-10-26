# Toolshop Playwright Tests

Automated end-to-end tests for [Practice Software Testing ---
Toolshop](https://practicesoftwaretesting.com/) using JavaScript and
Playwright Test.

## Prerequisites

-   Node.js (LTS recommended)
-   npm
-   Internet access to reach the Toolshop test website

## Installation

Open a terminal in the project directory:

``` powershell
cd D:\toolshop-playwright
npm install
npx playwright install
```

If the project already has its dependencies installed, the installation
commands do not need to be repeated.

## Run the tests

Run the complete suite:

``` powershell
npx playwright test
```

Run one test file:

``` powershell
npx playwright test tests/login.spec.js
```

Run tests with a visible browser:

``` powershell
npx playwright test --headed
```

Open the HTML report from the latest run:

``` powershell
npx playwright show-report
```

Playwright normally writes the HTML report to `playwright-report/` and
test artifacts to the configured output directory. Keep screenshots and
other evidence required for submission in the `screenshots/` folder.

## Project structure

``` text
toolshop-playwright/
├── fixtures/
│   └── test-fixtures.js
├── pages/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── ComparePage.js
│   ├── LoginPage.js
│   ├── PasswordResetPage.js
│   ├── ProductPage.js
│   └── RegisterPage.js
├── tests/
│   ├── compare.spec.js
│   ├── login.spec.js
│   ├── password-reset.spec.js
│   ├── purchase.spec.js
│   └── register.spec.js
├── screenshots/
├── Description.md
├── Prompt.md
├── Review.md
├── README.md
└── playwright.config.js
```

The exact file list can differ slightly if the project has been updated.

## Design approach

-   **Page Object Model (POM):** page-specific locators and user actions
    are encapsulated in classes under `pages/`.
-   **Fixture:** `fixtures/test-fixtures.js` provides reusable page
    objects to test cases.
-   **Independent tests:** test data such as registration and
    guest-checkout email addresses includes a timestamp where
    appropriate.
-   **Assertions:** tests check visible controls, navigation, response
    status, and/or resulting UI state rather than relying only on the
    absence of exceptions.

## Latest verification

The full suite was run with:

``` powershell
npx playwright test
```

The reported result was **6 passed**. The run used 4 workers and
completed in approximately 16.8 seconds. The password-reset scenario
intentionally verifies rejection of an unknown email; it does not claim
that a successful password reset was performed.
