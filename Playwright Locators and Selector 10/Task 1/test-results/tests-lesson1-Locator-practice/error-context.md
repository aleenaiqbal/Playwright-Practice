# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\lesson1.spec.js >> Locator practice
- Location: tests\lesson1.spec.js:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Username')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByLabel('Username') with timeout 5000ms
  - waiting for getByLabel('Username')

```

```yaml
- text: Swag Labs
- textbox "Username": standard_user
- textbox "Password": secret_sauce
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Locator practice", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://www.saucedemo.com/");
  6  | 
  7  |     // 1. getByPlaceholder()
  8  |     const username = page.getByPlaceholder("Username");
  9  |     await username.fill("standard_user");
  10 | 
  11 |     // 2. locator()
  12 |     const password = page.locator("#password");
  13 |     await password.fill("secret_sauce");
  14 | 
  15 |     // 3. getByRole()
  16 |     const loginButton = page.getByRole("button", { name: "Login" });
  17 |     await expect(loginButton).toBeVisible();
  18 | 
  19 |     // 4. getByText()
  20 |     const loginPageText = page.getByText("Swag Labs");
  21 |     await expect(loginPageText).toBeVisible();
  22 | 
  23 |     // 5. getByLabel()
  24 |     const usernameInput = page.getByLabel("Username");
> 25 |     await expect(usernameInput).toBeVisible();
     |                                 ^ Error: expect(locator).toBeVisible() failed
  26 | 
  27 | });
```