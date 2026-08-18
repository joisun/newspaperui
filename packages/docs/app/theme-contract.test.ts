import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, test } from 'vitest';

describe('Fumadocs color mapping', () => {
  const stylesheet = readFileSync(resolve(process.cwd(), 'app/globals.css'), 'utf8');

  test('uses the neutral NewspaperUI palette for the light docs canvas', () => {
    expect(stylesheet).toMatch(
      /:root\s*{[\s\S]*--fd-background:\s*140 5% 93%;[\s\S]*--fd-card:\s*120 11% 97%;/,
    );
  });

  test('maps readable Fumadocs colors in the dark data theme', () => {
    expect(stylesheet).toMatch(
      /\[data-theme=['"]dark['"]\]\s*{[\s\S]*--fd-background:\s*140 9% 7%;[\s\S]*--fd-foreground:\s*140 9% 93%;/,
    );
  });

  test('keeps API tables readable inside their mobile scroll container', () => {
    expect(stylesheet).toMatch(/\.prose table\s*\{[\s\S]*min-width:\s*42rem;/);
    expect(stylesheet).toMatch(
      /\.prose table :is\(th, td\):last-child\s*\{[\s\S]*min-width:\s*14rem;/,
    );
  });
});
