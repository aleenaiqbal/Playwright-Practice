```javascript
import { test, expect } from "@playwright/test";

async function checkWebsite(page, url) {

    // 1. Record start time
    const startTime = Date.now();

    // 2. Open the URL
    const response = await page.goto(url);

    // 3. Record end time
    const endTime = Date.now();

    // 4. Calculate response time
    const responseTime = endTime - startTime;

    // 5. Get HTTP status
    const status = response.status();

    // 6. Return object
    return {
        status: status,
        responseTime: responseTime
    };
}

test("Website Health Checker", async ({ page }) => {

    const result = await checkWebsite(
        page,
        "https://www.google.com"
    );

    console.log(result);

    expect(result.status).toBe(200);
});
```
