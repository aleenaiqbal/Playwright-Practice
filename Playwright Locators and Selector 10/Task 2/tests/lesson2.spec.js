/* Task 2 — Count elements
Find all buttons:
const buttons =
    page.getByRole("button");

console.log(await buttons.count());
Then print the count.
*/

import {test} from "@playwright/test";
test("Count elements", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const buttons = page.getByRole("button");
    console.log(await buttons.count());

})