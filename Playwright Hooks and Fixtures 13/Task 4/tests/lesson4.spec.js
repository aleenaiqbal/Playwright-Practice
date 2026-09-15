const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test.describe("Login Tests - POM", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
    });

    test("Valid Login", async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login(
            "standard_user",
            "secret_sauce"
        );

        await expect(page).toHaveURL(/inventory/);

        console.log("Valid login successful");
    });

});