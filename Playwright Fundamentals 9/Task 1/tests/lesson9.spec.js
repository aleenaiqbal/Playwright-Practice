/* Task 1 — Basic navigation
Create:
tests/lesson9.spec.js
Write a test that:
Opens a website
Prints the page title
Prints the current URL
Use:
page.title()
page.url()
*/
import {test} from "@playwright/test";
test("My first playwright test", async ({ page }) => {

    // Open website
    await page.goto("https://www.google.com/");

    // Print page title
    const title = await page.title();
    console.log("Page Title:", title);

    // Print current URL
    const url = page.url();
    console.log("Current URL:", url);
});