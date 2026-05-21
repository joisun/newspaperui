import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { PullQuote } from '../media/PullQuote';

describe('PullQuote', () => {
  const wrap = (ui: React.ReactElement) => render(
    <Layout><Section columns={24}>{ui}</Section></Layout>
  );

  it('renders as aside with border-top and border-bottom', () => {
    const { container } = wrap(<PullQuote>quote text</PullQuote>);
    const aside = container.querySelector('aside') as HTMLElement;
    expect(aside).toBeTruthy();
    expect(aside.style.borderTop).toContain('1px solid');
    expect(aside.style.borderBottom).toContain('1px solid');
  });

  it('renders author in footer', () => {
    const { getByText } = wrap(<PullQuote author="John">quote</PullQuote>);
    expect(getByText('— John')).toBeTruthy();
  });

  it('applies spanAllColumns class', () => {
    const { container } = wrap(<PullQuote spanAllColumns>quote</PullQuote>);
    const aside = container.querySelector('aside');
    expect(aside?.classList.contains('nui-span-all-columns')).toBe(true);
  });
});
