/* Task 2 — Title assertion
Verify the page title:
await expect(page)
    .toHaveTitle(...);
*/
import {test, expect} from "@playwright/test";
test("Title assertion", async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})