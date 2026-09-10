/* Task 3 — Form automation
Create a test that:
Open page
   ↓
Fill name
   ↓
Fill email
   ↓
Fill phone
   ↓
Click button
Use:
fill()
click()
*/

import {test} from "@playwright/test";
test("Form Automation", async ({page})=>{
    //Open page
    await page.goto("https://www.saucedemo.com/");

    //Fill name 
    await page.locator("#user-name").fill("Aleena");

    // Fill email
    await page.locator("#email").fill("aleena@example.com");

    // Fill phone
    await page.locator("#phone").fill("03001234567");

    // Click button
    await page.locator("#submit").click();

})