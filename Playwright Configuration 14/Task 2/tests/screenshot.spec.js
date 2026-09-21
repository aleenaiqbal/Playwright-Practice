const { test, expect } = require('@playwright/test');

test('Intentional failure - screenshot test', async ({ page }) => {

    await page.goto('https://www.google.com');

    // This is intentionally incorrect.
    // Google does not have a heading with this exact text.
    await expect(page.getByRole('heading', { name: 'This Heading Does Not Exist' }))
        .toBeVisible();

});