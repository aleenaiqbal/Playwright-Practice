/* Task 2 — Locator practice
Find an element using:
1. locator()
2. getByText()
3. getByRole()
4. getByPlaceholder()
You don't necessarily need all four on the same element. Practice each on suitable elements.
*/

import {test, expect} from "@playwright/test";
test("Locator Practice", async({page})=>{
    //Open website 
    await page.goto("https://www.saucedemo.com/");

    //Locator
    const username = page.locator("#user-name");
    await username.fill("standard_user");

    // 2. getByPlaceholder()
    const password = page.getByPlaceholder("Password");
    await password.fill("secret_sauce");

    // 3. getByRole()
    const loginButton = page.getByRole("button", { name: "Login" });
    await loginButton.click();

    // 4. getByText()
    const productsText = page.getByText("Products");
    await expect(productsText).toBeVisible();


})