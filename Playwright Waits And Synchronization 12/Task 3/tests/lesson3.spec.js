/* Exercise 3 — Loading spinner
Imagine:
const loader = page.locator(".loading");
Write code that waits until the loader disappears.
*/

import { test, expect } from "@playwright/test";

test("Loading spinner", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    const loader = page.locator(".loading");

    await expect(loader).toBeHidden();

    console.log("Loading spinner disappeared");
});