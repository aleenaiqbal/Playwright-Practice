/* Exercise 3 — Expected result
Add:
expectedStatus: 200
Then use:
expect(response.status())
    .toBe(website.expectedStatus);
Don't hardcode 200 inside the assertion.
*/
import {test, expect} from '@playwright/test';
import { url } from 'node:inspector';
const websites = [
    {
        siteName: 'Dissertation Helper',
        url: 'https://dissertationhelper.de/',
        expectedStatus: 200
    },
    {
        siteName: 'Assignment Help 247',
        url: 'https://assignmenthelp247.com.pk/',
        expectedStatus: 200
    }
];

for(const website of websites){
    test(`website check:${website.siteName}`, async({page})=>{
        const response = await page.goto(website.url);
        console.log(`${website.siteName} Status: ${response.status()}`);
        expect(response.status()).toBe(website.expectedStatus);
    })
}