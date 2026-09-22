/* Exercise 1 — Simple parameterization
Create:
const websites = [
    "https://example.com",
    "https://example.org",
    "https://example.net"
];
Create Playwright tests dynamically for each URL.
Each test should:
Open the URL
Get the response
Print status
Assert status is 200
*/
import {test, expect} from '@playwright/test';
const websites = [
    "https://dissertationhelper.de/",
    "https://assignmenthelp247.com.pk/",
    "https://dissertation.us.com/"
];

for(const url of websites){
    test(`Website check: ${url}`, async ({ page })=>{
        const response = await page.goto(url);

        expect(response.status()).toBe(200);

    });
}