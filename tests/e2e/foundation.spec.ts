import { test, expect } from '@playwright/test';
test('home renders without browser errors and supports section navigation', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Your next chapter starts in Da Lat.');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  await page.getByRole('link', { name: 'Explore hostel life' }).click();
  await expect(page).toHaveURL(/#hostel-life$/);
  await expect(page.getByRole('heading', { name: 'Travel is better with a little company.' })).toBeInViewport();
  expect(errors).toEqual([]);
});
test('keyboard skip link reaches main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});
test('narrow layout has no horizontal overflow and menu supports Escape', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto('/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const trigger = page.getByRole('button', { name: 'Menu', exact: true });
  await trigger.click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Hostel life' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await trigger.click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Rooms', exact: true }).click();
  await expect(page).toHaveURL(/#rooms$/);
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
});
