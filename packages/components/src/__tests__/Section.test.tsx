import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../Layout/Layout';
import { Section } from '../Section/Section';

describe('Section Component', () => {
  it('renders children correctly', () => {
    const { container } = render(
      <Layout>
        <Section columns={12}>
          <div>Section Content</div>
        </Section>
      </Layout>
    );
    expect(container.textContent).toContain('Section Content');
  });

  it('clamps columns exceeding layout columns and warns', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(
      <Layout columns={24}>
        <Section columns={30}>
          <div>Clamped</div>
        </Section>
      </Layout>
    );
    expect(warnSpy).toHaveBeenCalledWith(
      '[Section] columns=30 exceeds layout.columns=24, clamped to 24'
    );
    const section = container.querySelector('.newspaper-section');
    expect(section).toHaveStyle({ gridTemplateColumns: 'repeat(24, 1fr)' });
    warnSpy.mockRestore();
  });

  it('applies custom padding and margin', () => {
    const { container } = render(
      <Layout>
        <Section columns={12} padding="1rem" margin="2rem">
          <div>Content</div>
        </Section>
      </Layout>
    );
    const section = container.querySelector('.newspaper-section');
    expect(section).toHaveStyle({ padding: '1rem', margin: '2rem' });
  });
});
