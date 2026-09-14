/* Exercise 1 — Basic beforeEach
Create two tests:
Test 1 → Check page title
Test 2 → Check page URL
Use:
test.beforeEach()
to open the website.
*/
import {test, expect} from "@playwright/test";
test.beforeEach(async({page})=>{
    await page.goto("https://dissertationhelper.de/");
});
test("Test 1 - Check page title", async ({ page }) => { 
    await expect(page).toHaveTitle(/Dissertation/i); 
});
test("Test 2 - Check page URL", async ({ page }) => { 
    await expect(page).toHaveURL("https://dissertationhelper.de/"); 
});