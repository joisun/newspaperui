import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { Quote } from '../text/Quote';

describe('Quote', () => {
  const wrap = (ui: React.ReactElement) => render(
    <Layout><Section columns={24}>{ui}</Section></Layout>
  );

  it('renders block variant as blockquote', () => {
    const { container } = wrap(<Quote variant="block">text</Quote>);
    expect(container.querySelector('blockquote')).toBeTruthy();
  });

  it('renders inline variant as em', () => {
    const { container } = wrap(<Quote variant="inline">text</Quote>);
    expect(container.querySelector('em')).toBeTruthy();
  });

  it('block variant does not apply visible border-left', () => {
    const { container } = wrap(<Quote variant="block">text</Quote>);
    const bq = container.querySelector('blockquote') as HTMLElement;
    // borderLeft: 'none' is set in component; jsdom normalizes it to empty sub-properties
    expect(bq.style.borderLeftStyle).toBeFalsy();
  });
});
