# Prompt.md --- AI Tool and Prompt Record

## Tool and project details

-   **AI tool:** ChatGPT
-   **Model:** GPT-6 (model label shown for this ChatGPT session)
-   **Automation framework:** Playwright Test
-   **Programming language:** JavaScript
-   **Target application:** https://practicesoftwaretesting.com/
-   **Operating environment:** Windows PowerShell
-   **Project directory:** `D:\toolshop-playwright`

## Important note about prompt accuracy

The assignment asks for the exact prompts used with the AI tool. The
prompts below are reproduced only where the corresponding request is
available in the conversation context. They are not presented as a
complete verbatim export of every earlier message. Where the original
exact wording is unavailable, the entry is explicitly labelled as a
summary rather than a verbatim prompt. Do not submit a summary as an
exact prompt if the instructor requires a literal transcript.

## Requests visible in the conversation

### 1. Diagnose the test run

The conversation included the user's test output showing that five tests
passed and the purchase test failed because Playwright timed out while
clicking a product locator. The request was to continue troubleshooting
the project based on that output; there was no separate literal prompt
beyond the pasted test output in the visible context.

### 2. Review the successful test run

The user provided this command and output:

``` text
npx playwright test

Running 6 tests using 4 workers

✓ login with invalid credentials
✓ compare two products and toggle differences
✓ login with valid credentials
✓ password reset rejects an unknown email
✓ purchase product as guest
✓ register a new customer

6 passed (16.8s)
```

The assistant used this evidence to advise on final project
documentation and submission checks.

## Prompt summaries for work stages

The following are **summaries of the kinds of requests made**, not
guaranteed verbatim copies of the original prompts. They are included
for transparency and must not be misrepresented as exact quotations.

1.  **Project setup summary:** Help set up a JavaScript Playwright Test
    project for the Toolshop demo site, explain Windows PowerShell
    commands, and organize tests, page objects, and fixtures.
2.  **Page Object Model summary:** Help encapsulate page selectors and
    user actions in page classes and keep test specs focused on scenario
    steps and assertions.
3.  **Registration summary:** Help automate customer registration with
    unique email data and assertions for the resulting navigation.
4.  **Login summary:** Help implement valid- and invalid-credential
    login scenarios with a Login Page Object.
5.  **Purchase summary:** Help debug and automate a guest purchase flow
    across product, cart, and checkout pages.
6.  **Comparison summary:** Help automate adding two products to a
    comparison list and toggling the differences option.
7.  **Password-reset summary:** Help verify the negative password-reset
    case for an unknown email by checking the API response.
8.  **Debugging summary:** Help diagnose a timeout caused by a product
    locator and choose a more robust way to select a product.

## How to make this section fully compliant

If the instructor strictly requires every prompt word-for-word, copy the
original prompts from the ChatGPT conversation history and replace the
summaries above with those exact messages. Keep the tool/model metadata
above accurate, and include only tools that were actually used.
