const { test, expect } = require('@playwright/test');

test('Passing test', async ({ page }) => {

    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle(/Google/);

});

test('Intentional failure - screenshot test', async ({ page }) => {

    await page.goto('https://www.google.com');

    // Intentionally incorrect assertion
    await expect(
        page.getByRole('heading', {
            name: 'This Heading Does Not Exist'
        })
    ).toBeVisible();

});