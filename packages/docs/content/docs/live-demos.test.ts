import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function readDoc(relativePath: string) {
  return readFileSync(resolve(process.cwd(), 'content/docs', relativePath), 'utf8');
}

function countDemos(source: string) {
  return source.match(/<ComponentDemo\b/g)?.length ?? 0;
}

function extractDemoBodies(source: string) {
  return source
    .split('<ComponentDemo')
    .slice(1)
    .map((chunk) => {
      const closingTagIndex = chunk.indexOf('</ComponentDemo>');
      if (closingTagIndex === -1) return '';

      const block = chunk.slice(0, closingTagIndex);
      const openingTagBoundary = block.lastIndexOf('\n>\n');
      if (openingTagBoundary === -1) return '';

      return block.slice(openingTagBoundary + 3).trim();
    });
}

function expectNoMdxParagraphInsideTextComponents(source: string) {
  expect(source).not.toMatch(/<(?:Headline|Subhead)\b[^>]*>\s*\n\s*[A-Za-z]/);
  expect(source).not.toMatch(/<p>\s*\n\s*[A-Za-z]/);
}

describe('live documentation examples', () => {
  const requiredDemoCounts = {
    'grid-system.mdx': 3,
    'components/layout.mdx': 2,
    'components/article.mdx': 2,
    'components/masthead.mdx': 3,
    'components/rule.mdx': 2,
    'components/media.mdx': 5,
    'components/footer.mdx': 3,
    'components/data.mdx': 4,
    'text/index.mdx': 8,
    'text/headline.mdx': 1,
    'text/bodytext.mdx': 2,
    'text/kicker.mdx': 1,
    'text/quote.mdx': 2,
    'text/byline.mdx': 2,
    'examples/spanning.mdx': 5,
    'examples/responsive.mdx': 1,
  } as const;

  test.each(Object.entries(requiredDemoCounts))(
    '%s renders every documented example before source',
    (relativePath, expectedCount) => {
      const source = readDoc(relativePath);
      const demoBodies = extractDemoBodies(source);

      expect(countDemos(source)).toBe(expectedCount);
      expect(source).not.toContain('```tsx');
      expect(demoBodies).toHaveLength(expectedCount);
      for (const body of demoBodies) {
        expect(body).toMatch(/<[A-Z][A-Za-z0-9]*\b/);
      }
      expectNoMdxParagraphInsideTextComponents(source);
    },
  );

  test('renders all three Masthead variants before their source', () => {
    const source = readDoc('components/masthead.mdx');

    expect(countDemos(source)).toBe(3);
    expect(source.match(/^\s*<Masthead\b/gm)).toHaveLength(3);
    expect(source.match(/^\s*as="h3"$/gm)).toHaveLength(3);
    expect(source).not.toContain('```tsx');
  });

  test('renders every named Text example before its source', () => {
    const source = readDoc('text/index.mdx');

    expect(countDemos(source)).toBe(8);
    expect(source).not.toContain('```tsx');
    expectNoMdxParagraphInsideTextComponents(source);
  });

  test('shows one composition at desktop tablet and mobile widths', () => {
    const source = readDoc('examples/responsive.mdx');

    expect(countDemos(source)).toBe(1);
    expect(source).toContain('data-demo-viewport="desktop"');
    expect(source).toContain('data-demo-viewport="tablet"');
    expect(source).toContain('data-demo-viewport="mobile"');
    expectNoMdxParagraphInsideTextComponents(source);
  });

  test('uses visible media in the byline attribution example', () => {
    const source = readDoc('text/byline.mdx');

    expect(source).toContain('<img');
    expect(source).toContain('alt="Delegates gathering in the chamber before the final session"');
    expect(source).not.toContain('aria-hidden="true"');
  });
});
