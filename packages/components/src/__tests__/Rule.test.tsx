import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { Rule } from '../layout/Rule';

describe('Rule', () => {
  const wrap = (ui: React.ReactElement) => render(
    <Layout><Section columns={24}>{ui}</Section></Layout>
  );

  it('renders hairline by default', () => {
    const { container } = wrap(<Rule />);
    const hr = container.querySelector('hr');
    expect(hr).toBeTruthy();
    expect(hr?.style.borderTop).toContain('1px solid');
  });

  it('renders thick variant', () => {
    const { container } = wrap(<Rule variant="thick" />);
    const hr = container.querySelector('hr');
    expect(hr?.style.borderTop).toContain('3px solid');
  });

  it('renders double variant with gradient', () => {
    const { container } = wrap(<Rule variant="double" />);
    const hr = container.querySelector('hr');
    expect(hr?.style.height).toBe('6px');
  });
});
