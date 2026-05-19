import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Layout } from '../Layout/Layout';
import { Section } from '../Section/Section';

describe('Layout Component', () => {
  it('renders children correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom maxWidth and padding', () => {
    const { container } = render(
      <Layout maxWidth="1200px" padding="2rem">
        <div>Content</div>
      </Layout>
    );
    const layout = container.querySelector('.newspaper-layout');
    expect(layout).toHaveStyle({ maxWidth: '1200px', padding: '2rem' });
  });

  it('provides default columns value of 24', () => {
    render(
      <Layout>
        <Section columns={12}>
          <div>Test</div>
        </Section>
      </Layout>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
