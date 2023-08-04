import { test, expect } from '@playwright/test';

test('displays ticket after registering with email', async ({ page }) => {
    // act
    await page.goto('/');
    // enter email
    await page.getByPlaceholder('Enter email to register free').fill('sam.kosky@aginic.com');
    // click register button
    await page.getByRole('button', { name: 'Register' }).click();    
    // assert
    await expect(page.getByRole('heading', { name: 'You\'re in. Make it unique.' })).toBeVisible();
});