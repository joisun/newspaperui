import { test, expect } from '@playwright/test';

const VISUAL_PAGES = [
  { path: '/', name: 'homepage' },
  { path: '/blocks', name: 'blocks-index' },
  { path: '/blocks/zh-frontpage', name: 'block-zh-frontpage' },
  { path: '/blocks/en-feature', name: 'block-en-feature' },
  { path: '/blocks/jp-horizontal', name: 'block-jp-horizontal' },
  { path: '/examples/nyt-frontpage', name: 'example-nyt' },
  { path: '/docs/grid-system', name: 'docs-grid-system' },
  { path: '/docs/theme', name: 'docs-theme' },
];

test.describe('visual regression — light mode', () => {
  for (const pg of VISUAL_PAGES) {
    test(`${pg.name}`, async ({ page }) => {
      await page.goto(pg.path);
      await page.waitForLoadState('networkidle');
      // Wait for web fonts
      await page.evaluate(() => document.fonts.ready);
      await expect(page).toHaveScreenshot(`${pg.name}-light.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.02,
      });
    });
  }
});

test.describe('visual regression — dark mode', () => {
  for (const pg of VISUAL_PAGES) {
    test(`${pg.name}`, async ({ page }) => {
      await page.goto(pg.path);
      await page.waitForLoadState('networkidle');
      await page.evaluate(() => document.fonts.ready);

      // Activate dark mode
      const toggle = page.getByRole('button', { name: /dark mode/i });
      if (await toggle.isVisible()) {
        await toggle.click();
        await page.waitForTimeout(150);
      } else {
        // Fallback: set via JS
        await page.evaluate(() => {
          document.documentElement.dataset.theme = 'dark';
        });
        await page.waitForTimeout(150);
      }

      await expect(page).toHaveScreenshot(`${pg.name}-dark.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.02,
      });
    });
  }
});
