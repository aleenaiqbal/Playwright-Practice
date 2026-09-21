# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\screenshot.spec.js >> Intentional failure - screenshot test
- Location: tests\screenshot.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'This Heading Does Not Exist' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'This Heading Does Not Exist' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'This Heading Does Not Exist' })

```

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img "Google"
- search:
  - combobox "Search"
  - button "Search by voice"
  - button "Search by image"
  - button "Google Search"
  - button "I'm Feeling Lucky"
- contentinfo:
  - link "Advertising":
    - /url: https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Build, create, and do more with AI tools from Google":
    - /url: https://ai.google/helpful-tools/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en&fg=1
  - button "Settings"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Intentional failure - screenshot test', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://www.google.com');
  6  | 
  7  |     // This is intentionally incorrect.
  8  |     // Google does not have a heading with this exact text.
  9  |     await expect(page.getByRole('heading', { name: 'This Heading Does Not Exist' }))
> 10 |         .toBeVisible();
     |          ^ Error: expect(locator).toBeVisible() failed
  11 | 
  12 | });
```