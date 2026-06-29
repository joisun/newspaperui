import { test, expect } from '@playwright/test';

const ROUTES = [
  { path: '/', label: 'NewspaperUI' },
  { path: '/blocks', label: 'Newspaper Blocks' },
  { path: '/create', label: 'Create' },
  { path: '/examples/nyt-frontpage', label: 'The Daily Chronicle' },
  { path: '/examples/blackletter-frontpage', label: '' },
  { path: '/blocks/zh-frontpage', label: '' },
  { path: '/blocks/zh-feature', label: '' },
  { path: '/blocks/zh-editorial', label: '' },
  { path: '/blocks/en-feature', label: '' },
  { path: '/blocks/jp-horizontal', label: '' },
  { path: '/blocks/jp-vertical', label: '' },
  { path: '/docs/grid-system', label: '栅格系统' },
  { path: '/docs/components/article', label: 'Article' },
  { path: '/docs/components/data', label: '' },
  { path: '/docs/components/footer', label: 'Footer' },
  { path: '/docs/components/layout', label: 'Layout' },
  { path: '/docs/components/masthead', label: 'Masthead' },
  { path: '/docs/components/media', label: '' },
  { path: '/docs/components/rule', label: 'Rule' },
  { path: '/docs/text/index', label: '' },
  { path: '/docs/text/headline', label: 'Headline' },
  { path: '/docs/text/bodytext', label: 'BodyText' },
  { path: '/docs/text/kicker', label: 'Kicker' },
  { path: '/docs/text/quote', label: 'Quote' },
  { path: '/docs/text/byline', label: 'Byline' },
  { path: '/docs/theme', label: '' },
  { path: '/docs/examples/spanning', label: '' },
  { path: '/docs/examples/responsive', label: '' },
  { path: '/docs/examples/nyt-frontpage', label: 'NYT' },
  { path: '/docs/examples/blackletter', label: '' },
];

for (const route of ROUTES) {
  test(`${route.path} — renders without error`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    const response = await page.goto(route.path);
    expect(response?.status()).toBeLessThan(400);

    // No JS runtime errors
    expect(errors.filter((e) => !e.includes('favicon'))).toEqual([]);

    // Page has visible content
    await expect(page.locator('body')).not.toBeEmpty();

    // Check label text if provided
    if (route.label) {
      await expect(page.getByText(route.label, { exact: false }).first()).toBeVisible();
    }
  });
}

test('404 page renders', async ({ page }) => {
  await page.goto('/this-page-does-not-exist');
  // static export returns 200 with 404 content or actual 404
  await expect(page.locator('body')).not.toBeEmpty();
});
