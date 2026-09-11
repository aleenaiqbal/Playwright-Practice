/* Task 6 — Real SQA challenge
Create a test like this:
Open signup page
       ↓
Fill name
       ↓
Fill email
       ↓
Fill phone
       ↓
Verify values
       ↓
Click Submit
       ↓
Verify success message
       ↓
Verify URL
Your test should contain at least 4 assertions.
For example:
await expect(name)
    .toHaveValue("Aleena");

await expect(email)
    .toHaveValue("test@example.com");

await expect(successMessage)
    .toBeVisible();

await expect(page)
    .toHaveURL(/thank-you/);
*/

import { test, expect } from "@playwright/test";

test("Real SQA challenge", async ({ page }) => {

    await page.goto("https://domyassignmentfree.co.uk/");

    console.log("URL:", page.url());
    console.log("Title:", await page.title());
    console.log("Phone fields:", await page.locator('input[type="tel"]').count());

    const fname = page.getByPlaceholder("Name");
    await fname.fill("Aleena");

    const email = page.getByPlaceholder("Email");
    await email.fill("aleena@gmail.com");

    const phoneno = page.getByPlaceholder("PhoneNo");
    await phoneno.fill("123456789");

    const service = page.getByPlaceholder("Select Service");
    await service.selectOption({ label: "Essay Service" });

    const message = page.getByPlaceholder("Message");
    await message.fill("TESTING");


    // Assertions

    await expect(fname).toHaveValue("Aleena");

    await expect(email).toHaveValue("aleena@gmail.com");

    await expect(phoneno).toHaveValue("123456789");

    await expect(service).toHaveValue("Essay Service");


    // Submit

    const btn = page.locator('button[type="submit"]');
    await btn.click();


    // URL assertion
    await expect(page).toHaveURL(/thanks/);

});