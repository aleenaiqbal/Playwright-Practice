/* Write a test where:
You start waiting for /login
Click Login
Get the response
Print its status code
Assert that status is 200
Start with:
const responsePromise = page.waitForResponse(
    response => response.url().includes("/login")
);
*/

import {test, expect} from "@playwright/test";
test("API response", async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");

    const responsePromise = page.waitForResponse(response=>response.url().includes("/login"));

    await page.locator('#login-button').click();

    const response = await responsePromise;

    console.log("Status code:", response.status());

    expect(response.status()).toBe(200);
})