import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../Layout/Layout';
import { Section } from '../Section/Section';
import { Article } from '../Article/Article';

describe('Article Component', () => {
  it('renders children correctly', () => {
    const { container } = render(
      <Layout>
        <Section columns={12}>
          <Article span={6}>
            <div>Article Content</div>
          </Article>
        </Section>
      </Layout>
    );
    expect(container.textContent).toContain('Article Content');
  });

  it('clamps span exceeding section columns and warns', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <Layout>
        <Section columns={12}>
          <Article span={15}>
            <div>Clamped</div>
          </Article>
        </Section>
      </Layout>
    );
    expect(warnSpy).toHaveBeenCalledWith(
      '[Article] span=15 exceeds section.columns=12, clamped to 12'
    );
    warnSpy.mockRestore();
  });

  it('applies correct grid-column span based on span', () => {
    const { container } = render(
      <Layout>
        <Section columns={12}>
          <Article span={6}>
            <div>Half Width</div>
          </Article>
        </Section>
      </Layout>
    );
    const article = container.querySelector('.newspaper-article');
    expect(article).toHaveStyle({ gridColumn: 'span 6' });
  });
});
