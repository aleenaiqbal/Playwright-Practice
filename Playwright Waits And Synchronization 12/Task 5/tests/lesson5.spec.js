/* Exercise 5 — Real SQA Challenge 🔥
Take your signup flow.
Create this sequence:
Open website
     ↓
Find signup form
     ↓
Fill name
     ↓
Fill email
     ↓
Fill phone
     ↓
Click submit
     ↓
Wait for successful result
     ↓
Assert success/thank-you message
Rule:
Do NOT use waitForTimeout() anywhere.
Use:
auto-waiting
locators
assertions
event/response waits where appropriate
*/
import {test, expect} from "@playwright/test";
test("Real SQA Challenge", async({page})=>{
    await page.goto("https://dissertationhelper.de/");
    
    const signupForm = page.locator("form").first();
    await signupForm.locator('input[name="name"]').fill("Playwright Test");
    await signupForm .locator('input[name="email"]') .fill("playwrighttest@example.com");
    await signupForm .locator('input[name="phone"]') .fill("03001234567");
    const submitButton = signupForm.getByRole("button", { name: /Proceed To Signup/i });
    await expect(submitButton).toBeVisible(); await expect(submitButton).toBeEnabled();
    await submitButton.click();

    await expect( page.getByText(/thank you|success|successfully/i).first() ).toBeVisible();
    
})