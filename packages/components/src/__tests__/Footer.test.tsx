import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { Footer } from '../layout/Footer';

describe('Footer', () => {
  const wrap = (ui: React.ReactElement) => render(
    <Layout><Section columns={24}>{ui}</Section></Layout>
  );

  it('renders copyright text', () => {
    const { getByText } = wrap(<Footer copyright="© 2026" />);
    expect(getByText('© 2026')).toBeTruthy();
  });

  it('renders links', () => {
    const { getByText } = wrap(
      <Footer links={[{ label: 'About', href: '/about' }]} />
    );
    const link = getByText('About');
    expect(link.getAttribute('href')).toBe('/about');
  });
});
