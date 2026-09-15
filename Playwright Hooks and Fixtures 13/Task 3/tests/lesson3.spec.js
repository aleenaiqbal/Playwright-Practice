/* Exercise 3 — Login
Create:
test.describe("Login Tests")
Inside it create:
Valid Login
Invalid Login
Empty Login
Use beforeEach() to open the login page.
*/
import { test, expect } from "@playwright/test";

test.describe("Login Tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
    });

    test("Valid Login", async ({ page }) => {

        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();

        await expect(page).toHaveURL(/inventory/);
        console.log("Valid login successful");
    });

    test("Invalid Login", async ({ page }) => {

        await page.locator("#user-name").fill("wrong_user");
        await page.locator("#password").fill("wrong_password");
        await page.locator("#login-button").click();

        const errorMessage = page.locator('[data-test="error"]');

        await expect(errorMessage).toBeVisible();
        console.log("Invalid login error displayed");
    });

    test("Empty Login", async ({ page }) => {

        await page.locator("#login-button").click();

        const errorMessage = page.locator('[data-test="error"]');

        await expect(errorMessage).toBeVisible();
        console.log("Empty login validation displayed");
    });

});