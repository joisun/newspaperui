import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, test } from 'vitest';
import { rootProviderTheme } from './theme';

describe('documentation theme contract', () => {
  test('disables the competing Fumadocs theme state', () => {
    expect(rootProviderTheme).toEqual({ enabled: false });

    const layoutSource = readFileSync(resolve(process.cwd(), 'app/layout.tsx'), 'utf8');
    expect(layoutSource).toContain('theme={rootProviderTheme}');
  });

  test('loads NewspaperUI overrides after the Fumadocs stylesheet', () => {
    const layoutSource = readFileSync(resolve(process.cwd(), 'app/layout.tsx'), 'utf8');
    const fumadocsImport = layoutSource.indexOf("import 'fumadocs-ui/style.css'");
    const globalsImport = layoutSource.indexOf("import './globals.css'");

    expect(fumadocsImport).toBeGreaterThanOrEqual(0);
    expect(globalsImport).toBeGreaterThan(fumadocsImport);
  });

  test('disables the unused Fumadocs search provider', () => {
    const layoutSource = readFileSync(resolve(process.cwd(), 'app/layout.tsx'), 'utf8');

    expect(layoutSource).toContain('search={{ enabled: false }}');
  });
});
