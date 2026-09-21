const { test, expect } = require('@playwright/test');

test('Browser compatibility test', async ({ page }) => {

    await page.goto('/');

    await expect(page).toHaveTitle('CRM - Creatics Information Technology');

    console.log('Browser:', test.info().project.name);
    console.log('URL:', page.url());

});