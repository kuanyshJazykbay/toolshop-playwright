# Review.md --- AI Output Review and Decisions

## 1. Project summary

The project automates user-facing flows on the Practice Software Testing
Toolshop demo site using JavaScript and Playwright Test. It follows a
Page Object Model (POM) structure and uses a custom fixture to provide
reusable page objects to the test cases.

The latest recorded full-suite run was:

``` text
Running 6 tests using 4 workers
6 passed (16.8s)
```

The six tests cover registration, valid login, invalid login, guest
purchase, product comparison, and password-reset validation for an
unknown email.

## 2. How the AI-generated suggestions were reviewed

AI suggestions were treated as drafts, not accepted without execution.
The review process used the following checks:

1.  Read the Playwright console output and identify the test that
    failed.
2.  Inspect the reported locator and the page-object method involved.
3.  Update the product-selection approach so the test would not depend
    solely on a product ID that could become stale.
4.  Run the purchase test again.
5.  Run the entire test suite with `npx playwright test`.
6.  Confirm that the final run completed with six passing tests while
    using four workers.

The successful run is evidence that the suite passed in that environment
at that time. It does not prove that every assertion is optimal or that
the remote demo website will never change.

## 3. Failure found and change made

### Product locator timeout

An earlier run failed in the purchase scenario. Playwright timed out
while trying to click a product locator built from a fixed product ID:

``` text
locator('[data-test="product-01M5WNXT1B1NR1D7PR9W284ZGR"]')
```

The product identifier was no longer reliably available on the page. The
proposed correction was to select the product by its visible name and
verify that the product and add-to-cart control were visible before
continuing. The purchase test was also changed to call the page-object
method without passing the old product ID.

After that change, the full test run reported six passing tests. This
was a practical example of using test output to guide debugging instead
of assuming the first generated implementation was correct.

## 4. Why Page Objects were used

Page Objects keep page-specific selectors and interactions in dedicated
classes, for example `LoginPage`, `RegisterPage`, `ProductPage`,
`CartPage`, `CheckoutPage`, `ComparePage`, and `PasswordResetPage`.

This design was chosen because it:

-   reduces duplicated selectors and interaction code in test
    specifications;
-   gives page actions descriptive method names;
-   makes it easier to update a selector when the website changes;
-   keeps test scenarios focused on the user journey and its expected
    outcome.

The trade-off is that page objects add extra files and abstractions. For
a small test suite this is additional structure, but it is useful for
demonstrating maintainable automation and for reusing the same page
actions.

## 5. Why a custom fixture was used

The custom fixture in `fixtures/test-fixtures.js` provides the page
objects through a shared `pages` object. Each test can use the same
setup pattern without constructing all page objects manually.

This improves consistency and reduces repeated setup code. It also works
with Playwright's per-test `page` fixture, so tests can run
independently in separate browser contexts.

## 6. Parallel execution review

The final command was:

``` powershell
npx playwright test
```

Playwright reported:

``` text
Running 6 tests using 4 workers
6 passed (16.8s)
```

This confirms that the six tests passed in the observed parallel run
with four workers. Timestamp-based email addresses were used in relevant
scenarios to reduce collisions when tests are repeated. This is useful
for registration and guest checkout data.

Parallel success is a useful independence check, but it is not an
exhaustive proof of race-condition freedom. Repeated runs and
clean-environment runs would provide additional confidence.

## 7. Assertion quality and remaining limitations

### Invalid login

The test currently checks that the login button remains visible after
invalid credentials are submitted. This is a weak negative assertion
because the button could remain visible even if the application
displayed an unexpected result.

**Decision:** retain the passing test for the current version, but
record an improvement: assert the exact validation message or verify
that the account page is not reached.

### Password reset

The test submits an unknown email and expects HTTP 422 with the
validation message `The selected email is invalid.`

**Decision:** describe this scenario as rejection of an unknown email.
It must not be described as proof of a successful password reset. A
separate positive test would be required if the assignment expects the
successful reset flow.

### Registration diagnostics

The run printed:

``` text
Register button enabled: true
Invalid fields: []
```

These lines are debugging output rather than failures.

**Decision:** they can be removed from the final code for cleaner test
output, unless diagnostic output is specifically required.

### External demo-site dependency

The tests depend on the availability and current behavior of the public
demo website. Product data, selectors, API responses, or application
behavior may change outside the project.

**Decision:** use stable test attributes when available, assert
important page states, and investigate failures against the current site
rather than assuming the old DOM remains unchanged.

## 8. Final assessment

The latest recorded run passed all six tests with four workers. The
project demonstrates JavaScript browser automation, Page Objects, a
reusable fixture, positive and negative scenarios, and end-to-end guest
checkout.

The review also identified areas for future improvement: strengthen the
invalid-login assertion, add a successful password-reset test if
required, remove temporary diagnostic logs, and repeat the suite to
check stability.

The final decision was to keep the current implementation because it
passed the recorded run, while documenting the remaining limitations
instead of claiming that the tests cover behavior they do not actually
verify.
