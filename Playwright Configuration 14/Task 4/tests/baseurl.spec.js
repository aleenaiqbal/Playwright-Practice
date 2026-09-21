/* Exercise 4 — Base URL ⭐
Set:
use: {
    baseURL: "https://example.com"
}
Then change:
await page.goto("https://example.com/login");
to:
await page.goto("/login");
Understand why this works.
*/

const {test, expect} = require('@playwright/test');
test('Base Url test', async({page})=>{
    await page.goto('/login');
    console.log('Current Url: ', page.url());
    

})