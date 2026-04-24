import { test, expect } from '@playwright/test';

test.describe('Input Fields Practice', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qatesting.vercel.app/practice/input-fields');
    });

    test('Scenario 1: Simple Input Field', async ({ page }) => {
        const inputField = page.locator('input[placeholder="Enter text"]').first();
        await inputField.fill('Hello World');
        await expect(inputField).toHaveValue('Hello World');
    });

    test('Scenario 2: Clear Input Field', async ({ page }) => {
        const inputField = page.locator('input').nth(1);
        await inputField.fill('Test Text');
        await inputField.clear();
        await expect(inputField).toHaveValue('');
    });

    test('Scenario 3: Type Slowly', async ({ page }) => {
        const inputField = page.locator('input').nth(2);
        await inputField.type('Typing slowly', { delay: 100 });
        await expect(inputField).toHaveValue('Typing slowly');
    });

    test('Scenario 4: Verify Input Attributes', async ({ page }) => {
        const inputField = page.locator('input').nth(3);
        await expect(inputField).toHaveAttribute('type', 'text');
        await expect(inputField).toBeEnabled();
    });

    test('Scenario 5: Number Input Field', async ({ page }) => {
        const numberInput = page.locator('input[type="number"]');
        await numberInput.fill('42');
        await expect(numberInput).toHaveValue('42');
    });

    test('Scenario 6: Password Input Field', async ({ page }) => {
        const passwordInput = page.locator('input[type="password"]');
        await passwordInput.fill('SecurePassword123');
        await expect(passwordInput).toHaveAttribute('type', 'password');
    });
});