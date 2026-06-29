import { test, expect } from '@playwright/test';

const KEY_PAGES = ['/', '/blocks', '/docs/grid-system', '/docs/components/article', '/docs/theme'];

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

for (const vp of VIEWPORTS) {
  test.describe(`viewport: ${vp.name} (${vp.width}px)`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    for (const path of KEY_PAGES) {
      test(`${path} — no horizontal overflow`, async ({ page }) => {
        await page.goto(path);
        await page.waitForLoadState('networkidle');

        const overflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });
        expect(overflow, `horizontal scroll detected on ${path}`).toBe(false);
      });
    }

    test('/ — hero title visible and not clipped', async ({ page }) => {
      await page.goto('/');
      const title = page.locator('h1').first();
      await expect(title).toBeVisible();
      const box = await title.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width).toBeGreaterThan(0);
    });

    test('/ — nav links accessible (not hidden behind overflow)', async ({ page }) => {
      await page.goto('/');
      // At least the logo link should be visible
      const logo = page.getByRole('link', { name: /NewspaperUI/i });
      await expect(logo).toBeVisible();
    });

    if (vp.name === 'mobile') {
      test('/ — body content text not below 11px (WCAG-friendly)', async ({ page }) => {
        await page.goto('/');
        const tooSmall = await page.evaluate(() => {
          const all = Array.from(document.querySelectorAll('p, li, td, th'));
          return all
            .filter((el) => {
              const fs = parseFloat(window.getComputedStyle(el).fontSize);
              // Exclude decorative small-caps elements (newspaper convention allows 11px)
              const isSmallCaps =
                el.closest('.nui-small-caps') || el.classList.contains('nui-small-caps');
              return fs > 0 && fs < 11 && !isSmallCaps;
            })
            .map((el) => ({
              tag: el.tagName,
              fs: parseFloat(window.getComputedStyle(el).fontSize),
              text: el.textContent?.slice(0, 40) ?? '',
            }));
        });
        expect(tooSmall, `elements with font-size < 11px: ${JSON.stringify(tooSmall)}`).toEqual([]);
      });

      test('blocks page — cards not overflowing on mobile', async ({ page }) => {
        await page.goto('/blocks');
        const cards = page.locator('a[href^="/blocks/"]');
        const count = await cards.count();
        expect(count).toBeGreaterThan(0);
        for (let i = 0; i < count; i++) {
          const box = await cards.nth(i).boundingBox();
          if (box) {
            expect(box.width).toBeLessThanOrEqual(vp.width + 1);
          }
        }
      });
    }
  });
}
