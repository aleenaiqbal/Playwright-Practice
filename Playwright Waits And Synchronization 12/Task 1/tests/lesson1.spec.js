/* Exercise 1 — Remove the bad wait
Change this:
await page.goto("https://example.com");

await page.waitForTimeout(5000);

await page.getByRole("button", {
    name: "Login"
}).click();
into a better Playwright approach.
*/

import { test, expect } from "@playwright/test";

test("Remove the bad wait", async ({ page }) => {

    // Open SauceDemo
    await page.goto("https://www.saucedemo.com/");

    // Enter username
    await page.getByPlaceholder("Username").fill("standard_user");

    // Enter password
    await page.getByPlaceholder("Password").fill("secret_sauce");

    // Locate Login button
    const loginButton = page.locator("#login-button");

    // Verify Login button is visible
    await expect(loginButton).toBeVisible();

    // Click Login
    await loginButton.click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory.html/);

});