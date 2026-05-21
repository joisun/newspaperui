import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { Byline } from '../text/Byline';

describe('Byline', () => {
  it('renders with small-caps class', () => {
    const { container } = render(
      <Layout><Section columns={24}><Byline>By Alice</Byline></Section></Layout>
    );
    const el = container.querySelector('.nui-byline');
    expect(el?.classList.contains('nui-small-caps')).toBe(true);
  });

  it('renders children', () => {
    const { getByText } = render(
      <Layout><Section columns={24}><Byline>By Alice Smith</Byline></Section></Layout>
    );
    expect(getByText('By Alice Smith')).toBeTruthy();
  });
});
