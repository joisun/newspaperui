import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { Kicker } from '../text/Kicker';

describe('Kicker', () => {
  it('renders with small-caps class', () => {
    const { container } = render(
      <Layout><Section columns={24}><Kicker>BREAKING</Kicker></Section></Layout>
    );
    const el = container.querySelector('.nui-kicker');
    expect(el).toBeTruthy();
    expect(el?.classList.contains('nui-small-caps')).toBe(true);
  });

  it('renders children text', () => {
    const { getByText } = render(
      <Layout><Section columns={24}><Kicker>Politics</Kicker></Section></Layout>
    );
    expect(getByText('Politics')).toBeTruthy();
  });
});
