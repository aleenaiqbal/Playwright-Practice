const {defineConfig, devices}=require('@playwright/test');
export default defineConfig({

    //where playwright looks for test file
    testDir: "./tests",

    // Maximum time for each test: 60 seconds
    timeout: 60000,

    // How test results are reported
    reporter: 'html',

    // Default settings for all tests
    use: {
        // Run browser without opening a visible window
        headless: true
    }
});