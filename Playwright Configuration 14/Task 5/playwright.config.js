/* Exercise 5 — Browser testing 🔥
Configure Chromium and Firefox.
Then run:
npx playwright test
and observe which browsers execute the tests.
*/

const { defineConfig, devices } = require('@playwright/test');
export default defineConfig({
    testDir: './tests',
    timeout: 60000,
    use: {
        headless: true,
        baseURL: 'https://crm.internalcreatics.com/',
        screenshot: 'only-on-failure'
    },
    projects:[
        {
            name: 'chromium',
            use:{
                ...devices['Desktop Chrome']
            }
        },
        {
            name: 'firefox',
            use:{
                ...devices['Desktop Firefox']
            }
        }
    ]
});