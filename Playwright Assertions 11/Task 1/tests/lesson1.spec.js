/* Task 1 — URL assertion
Open any test website and verify its URL:
await expect(page)
    .toHaveURL(...);
*/

import {test, expect} from "@playwright/test";
test("URL assertion", async({page})=>{
    //open website
    await page.goto("https://www.google.com/");
    await expect(page).toHaveURL(/google/);
})