/* Exercise 4 — Login data
Create:
const loginData = [
    {
        email: "valid@example.com",
        password: "Password123",
        expected: "success"
    },
    {
        email: "wrong@example.com",
        password: "wrong123",
        expected: "error"
    }
];
Create parameterized tests.
*/

import {test,expect} from '@playwright/test';
const login = [
    {
        email: "standard_user",
        password: "secret_sauce",
        expected: "success"
    },
    {
        email: "wrong@example.com",
        password: "wrong123",
        expected: "error"
    }
];
for(const data of login){
    test(`Login test:${data.expected}`,async({page})=>{
        await page.goto("https://www.saucedemo.com/");
        await page.locator('#user-name').fill(data.email);
        await page.locator('#password').fill(data.password);
        await page.locator('#login-button').click();

        if(data.expected==="success"){
            await expect(page).toHaveURL(/inventory/);

        }else if(data.expected==="error"){
            await expect(page.locator('[data-test="error"]'))
                .toBeVisible();

        }
    });
}