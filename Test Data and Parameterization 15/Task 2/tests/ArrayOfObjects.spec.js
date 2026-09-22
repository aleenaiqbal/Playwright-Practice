/* Exercise 2 — Objects
Create:
const websites = [
    {
        siteName: "Website A",
        url: "https://example.com"
    },
    {
        siteName: "Website B",
        url: "https://example.org"
    }
];
Create a test for each website.
Test name should include the siteName.
*/

import {test, expect} from '@playwright/test';
const websites = [
    {
        siteName: "Dissertation Helper",
        url: "https://dissertationhelper.de/"
    },
    {
        siteName: "Assignment Help 247",
        url: "https://assignmenthelp247.com.pk/"
    }

];
for(const website of websites){
    test(`Website Check: ${website.siteName}`,async({page})=>{
        const response = await page.goto(website.url);
        console.log(`${website.siteName} → Status: ${response.status()}`);
        expect(response.status()).toBe(200);
    });
}