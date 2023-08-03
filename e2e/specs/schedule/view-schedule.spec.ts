import { test, expect } from '@playwright/test';


test('displays list of talks', async ({ page }) => {
  await page.goto('/schedule');
  await expect(page.getByRole('heading', { name: 'Schedule' })).toBeVisible();
});