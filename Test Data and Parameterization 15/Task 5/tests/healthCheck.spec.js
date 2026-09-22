import { test, expect } from '@playwright/test';
import XLSX from 'xlsx';
import path from 'path';


// ========================================
// READ WEBSITES FROM EXCEL
// ========================================

const filePath = path.join(
    process.cwd(),
    'data',
    'websites.xlsx'
);

const workbook = XLSX.readFile(filePath);

const sheetName = workbook.SheetNames[0];

const worksheet = workbook.Sheets[sheetName];

const websites = XLSX.utils.sheet_to_json(worksheet);


// ========================================
// CREATE PARAMETERIZED TESTS
// ========================================

for (const website of websites) {

    test(`Health Check - ${website.siteName}`, async ({ page }) => {

        const startTime = Date.now();

        const response = await page.goto(website.url, {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

        const responseTime = Date.now() - startTime;

        console.log(
            `${website.siteName} → Status: ${response.status()}`
        );

        console.log(
            `${website.siteName} → Response Time: ${responseTime} ms`
        );

        expect(response).not.toBeNull();

        expect(response.status()).toBe(200);

        expect(responseTime).toBeGreaterThan(0);
    });
}