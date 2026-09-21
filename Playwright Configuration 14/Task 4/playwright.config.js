const {defineConfig} = require ('@playwright/test');
export default defineConfig({
    testDir: "./tests",
    timeout: 60000,
    reporter: 'html',
    use: {
        headless: true,
        baseURL: 'https://crm.internalcreatics.com/',
        screenshot: 'only-on-failure'
    }
});