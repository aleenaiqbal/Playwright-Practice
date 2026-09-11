/* Task 5 — Negative assertion
Find an error/success message and write:
await expect(locator)
    .not.toBeVisible();
Use a situation where the message genuinely shouldn't appear.
*/

import {test, expect} from "@playwright/test";
test("Negative assertion", async({page})=>{
    await page.goto("https://domyassignmentfree.co.uk/");
    const errorMessage = page.getByText("Please enter a valid email address");
    await expect(errorMessage).not.toBeVisible();
})
