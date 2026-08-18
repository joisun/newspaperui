import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const layoutSource = readFileSync(
  resolve(process.cwd(), 'app/docs/layout.tsx'),
  'utf8',
);
const globalStyles = readFileSync(
  resolve(process.cwd(), 'app/globals.css'),
  'utf8',
);

describe('docs layout theme controls', () => {
  it('disables the Fumadocs theme switch because the site header owns theme state', () => {
    expect(layoutSource).toContain('disableThemeSwitch');
  });

  it('disables the duplicate Fumadocs navbar to avoid hidden focus targets', () => {
    expect(layoutSource).toMatch(/nav=\{\{\s*enabled:\s*false\s*\}\}/);
  });

  it('removes docs search from the sidebar', () => {
    expect(layoutSource).toMatch(/sidebar=\{\{\s*hideSearch:\s*true/);
  });

  it('uses a plain, non-collapsible directory column', () => {
    expect(layoutSource).toMatch(/collapsible:\s*false/);
  });

  it('lets the sidebar follow its content without internal scrolling', () => {
    expect(globalStyles).toMatch(
      /--nui-header-height:\s*68px;[\s\S]*\.nui-docs-sidebar\s*\{[\s\S]*top:\s*var\(--nui-header-height\) !important;[\s\S]*height:\s*auto !important;[\s\S]*overflow-y:\s*visible;/,
    );
    expect(globalStyles).not.toMatch(/\.nui-docs-sidebar\s*\{[^}]*max-height:/);
    expect(globalStyles).toMatch(
      /@media \(max-width:\s*48rem\)\s*\{[\s\S]*--nui-header-height:\s*64px;[\s\S]*bottom:\s*auto !important;/,
    );
  });

  it('separates adjacent sidebar items', () => {
    expect(globalStyles).toMatch(
      /#nd-sidebar a\[data-active\] \+ a\[data-active\]\s*\{[\s\S]*margin-top:\s*0\.25rem;/,
    );
  });

  it('keeps both On this page controls sticky below the site header', () => {
    expect(globalStyles).toMatch(
      /#nd-toc,\s*#nd-tocnav\s*\{[\s\S]*position:\s*sticky !important;[\s\S]*top:\s*var\(--nui-header-height\) !important;/,
    );
    expect(globalStyles).toMatch(
      /#nd-toc\s*\{[\s\S]*height:\s*calc\(100dvh - var\(--nui-header-height\)\) !important;/,
    );
  });
});
