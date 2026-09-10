/* ⭐ Task 5 — Your real project challenge
In your WebsiteHealthChecker project, choose one form you've been testing.
Find:
Name
Email
Phone
Submit
and write the four locators.
For example:
const name =
    page.getByLabel("Name");

const email =
    page.getByLabel("Email");

const phone =
    page.getByLabel("Phone");

const submit =
    page.getByRole("button", {
        name: "Submit"
    });
Then test each locator with:
console.log(await name.count());
console.log(await email.count());
console.log(await phone.count());
console.log(await submit.count());
Your goal is:
Name   → 1
Email  → 1
Phone  → 1
Submit → 1
If you get 0 or more than 1, don't panic. That's exactly what this lesson is teaching you to debug.
*/

import {test, expect} from "@playwright/test";
test("real project challenge",async({page})=>{
    await page.goto('https://paysomeonetotakemyonlineclass.us/');
    const name = page.getByPlaceholder("Name");
    const email =
    page.getByPlaceholder("Email");

    const phone =
    page.getByPlaceholder("Phone No");

    const submit =
    page.getByRole("button", {
        name: "Proceed to Signup"
    });

    console.log(await name.count());
    console.log(await email.count());
    console.log(await phone.count());
    console.log(await submit.count());



})