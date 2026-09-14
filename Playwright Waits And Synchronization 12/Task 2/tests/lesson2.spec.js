/* Exercise 2 — Wait for text
Write code that:
Finds text "Dashboard"
Waits for it to become visible
Prints "Dashboard loaded"
Hint:
const dashboard = ...
*/

import {test, expect} from "@playwright/test"
test("Wait for text", async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    // Enter username
    await page.getByPlaceholder("Username").fill("standard_user");

    // Enter password
    await page.getByPlaceholder("Password").fill("secret_sauce");

    // Locate Login button
    const loginButton = page.locator("#login-button");

    // Click Login
    await loginButton.click();

    const dashboard = page.getByText("Swag Labs");

    await expect(dashboard).toBeVisible();

    console.log("Dashboard Loaded");

})