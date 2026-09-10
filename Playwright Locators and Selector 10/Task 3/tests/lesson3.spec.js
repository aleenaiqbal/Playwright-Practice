/* Task 3 — Find a specific button
Find a button called:
Submit
and print how many matching buttons exist.
*/

import {test} from "@playwright/test";
test("Find a specific button", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const btn = page.getByRole("button",{name:"Login"});
    console.log(await btn.count());
})