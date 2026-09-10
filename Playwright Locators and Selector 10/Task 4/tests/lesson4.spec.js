/* Task 4 — Strict mode challenge ⭐
Find an element that has multiple matches.
Then:
console.log(await locator.count());
Use .nth() to select one
*/

import {test, expect} from "@playwright/test";
test('Strict mode challenge',async({page})=>{
    //open your website
    await page.goto('https://paysomeonetotakemyonlineclass.us/');
    const buttons = page.getByRole('button');
    console.log('Total buttons: ',await buttons.count());

    const firstButton = buttons.nth(0);

    console.log('First button:', await firstButton.innerText());

    await expect(firstButton).toBeVisible();
})