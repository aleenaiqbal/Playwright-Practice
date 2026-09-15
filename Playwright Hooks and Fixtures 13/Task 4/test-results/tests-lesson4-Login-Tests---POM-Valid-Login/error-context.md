# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\lesson4.spec.js >> Login Tests - POM >> Valid Login
- Location: tests\lesson4.spec.js:10:5

# Error details

```
TypeError: LoginPage is not a constructor
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { LoginPage } = require("../pages/LoginPage");
  3  | 
  4  | test.describe("Login Tests - POM", () => {
  5  | 
  6  |     test.beforeEach(async ({ page }) => {
  7  |         await page.goto("https://www.saucedemo.com/");
  8  |     });
  9  | 
  10 |     test("Valid Login", async ({ page }) => {
  11 | 
> 12 |         const loginPage = new LoginPage(page);
     |                           ^ TypeError: LoginPage is not a constructor
  13 | 
  14 |         await loginPage.login(
  15 |             "standard_user",
  16 |             "secret_sauce"
  17 |         );
  18 | 
  19 |         await expect(page).toHaveURL(/inventory/);
  20 | 
  21 |         console.log("Valid login successful");
  22 |     });
  23 | 
  24 | });
```