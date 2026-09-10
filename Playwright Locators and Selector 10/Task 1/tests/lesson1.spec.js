import { test, expect } from "@playwright/test";

test("Locator practice", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    // 1. getByPlaceholder()
    const username = page.getByPlaceholder("Username");
    await username.fill("standard_user");

    // 2. locator()
    const password = page.locator("#password");
    await password.fill("secret_sauce");

    // 3. getByRole()
    const loginButton = page.getByRole("button", { name: "Login" });
    await expect(loginButton).toBeVisible();

    // 4. getByText()
    const loginPageText = page.getByText("Swag Labs");
    await expect(loginPageText).toBeVisible();

    // 5. getByLabel()
    const usernameInput = page.getByLabel("Username");
    await expect(usernameInput).toBeVisible();

});