import { test, expect } from '@playwright/test';

test.describe('theme system', () => {
  test('light mode — CSS variables resolve to expected values', async ({ page }) => {
    await page.goto('/');
    const bg = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--nui-bg-page').trim(),
    );
    expect(bg).toBe('#F7F4ED');
  });

  test('dark mode toggle — data-theme attribute switches', async ({ page }) => {
    await page.goto('/');
    // Find the theme toggle button
    const toggle = page.getByRole('button', { name: /dark mode/i });
    await expect(toggle).toBeVisible();
    await toggle.click();
    const theme = await page.evaluate(() => document.documentElement.dataset.theme);
    expect(theme).toBe('dark');
  });

  test('dark mode — CSS variables update after toggle', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: /dark mode/i });
    await toggle.click();

    const bg = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--nui-bg-page').trim(),
    );
    expect(bg).toBe('#14110D');
  });

  test('dark mode — toggle label flips to "Light Mode"', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: /dark mode/i });
    await toggle.click();
    await expect(page.getByRole('button', { name: /light mode/i })).toBeVisible();
  });

  test('dark mode — body background color changes', async ({ page }) => {
    await page.goto('/');
    const lightBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);

    const toggle = page.getByRole('button', { name: /dark mode/i });
    await toggle.click();
    await page.waitForTimeout(100);

    const darkBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(lightBg).not.toBe(darkBg);
  });

  test('dark mode — text color changes', async ({ page }) => {
    await page.goto('/');
    const lightColor = await page.evaluate(() => getComputedStyle(document.body).color);

    await page.getByRole('button', { name: /dark mode/i }).click();
    await page.waitForTimeout(100);

    const darkColor = await page.evaluate(() => getComputedStyle(document.body).color);
    expect(lightColor).not.toBe(darkColor);
  });

  test('theme toggle — persists across navigation (localStorage)', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /dark mode/i }).click();

    // Navigate away and back
    await page.goto('/blocks');
    await page.goto('/');

    // Check if dark mode persists (requires localStorage implementation)
    const theme = await page.evaluate(() => document.documentElement.dataset.theme);
    // This test documents current behavior — will fail if persistence not implemented
    expect(theme).toBe('dark');
  });
});
