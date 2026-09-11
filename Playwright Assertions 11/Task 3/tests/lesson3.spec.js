/* Task 3 — Visibility assertion
Find an important element and check:
await expect(locator)
    .toBeVisible();
*/

import { test, expect } from "@playwright/test"; 
test("Visibility assertion", async ({ page }) => { 
    await page.goto("https://www.google.com/"); 
    const searchBox = page.getByRole("combobox"); 
    await expect(searchBox).toBeVisible(); 
});