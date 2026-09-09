/* Task 4 — Assertion
After clicking the button, verify one expected result using:
expect()
For example:
await expect(page).toHaveURL(/thank-you/);
or:
await expect(locator).toBeVisible();
*/

import { test, expect } from "@playwright/test";

import { test, expect } from "@playwright/test";

test("Form Automation with Assertion", async ({ page }) => {

    // Open page
    await page.goto("YOUR_FORM_URL");

    // Fill name
    await page.locator("#name").fill("Aleena");

    // Fill email
    await page.locator("#email").fill("aleena@example.com");

    // Fill phone
    await page.locator("#phone").fill("03001234567");

    // Click button
    await page.locator("#submit").click();

    // Assertion
    await expect(page).toHaveURL(/thank-you/);

});