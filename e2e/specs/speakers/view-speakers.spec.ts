import { test, expect } from '@playwright/test';


test('displays list of speakers', async ({ page }) => {
  await page.goto('/speakers');
  await expect(page.getByRole('heading', { name: 'Speakers' })).toBeVisible();
});