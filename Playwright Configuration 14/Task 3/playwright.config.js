const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: "./tests",

    timeout: 60000,

    reporter: 'html',

    use: {
        headless: true,

        screenshot: "only-on-failure"
    }
});