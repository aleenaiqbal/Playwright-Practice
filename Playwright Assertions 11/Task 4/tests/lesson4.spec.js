/* Task 4 — Form assertion ⭐
Fill an input:
await locator.fill("Aleena");
Then verify:
await expect(locator)
    .toHaveValue("Aleena");
*/

import {test, expect} from "@playwright/test";
test("Form assertion", async({page})=>{
    await page.goto("https://domyassignmentfree.co.uk/");
    const locator = page.getByPlaceholder("Name");
    await locator.fill("Aleena");
    await expect(locator).toHaveValue("Aleena");
})