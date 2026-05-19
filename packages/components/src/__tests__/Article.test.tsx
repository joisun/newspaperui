import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { Article } from '../layout/Article';

describe('Article', () => {
  it('applies grid-column span N when span is provided', () => {
    const { container } = render(
      <Layout>
        <Section columns={12}>
          <Article span={6}>x</Article>
        </Section>
      </Layout>,
    );
    const article = container.querySelector('article') as HTMLElement;
    expect(article.style.gridColumn).toBe('span 6');
    expect(article.getAttribute('data-span')).toBe('6');
  });

  it('defaults to filling section.columns when span is omitted', () => {
    const { container } = render(
      <Layout>
        <Section columns={8}>
          <Article>x</Article>
        </Section>
      </Layout>,
    );
    const article = container.querySelector('article') as HTMLElement;
    expect(article.style.gridColumn).toBe('span 8');
    expect(article.getAttribute('data-span')).toBe('8');
  });

  it('clamps span when exceeding section.columns', () => {
    const { container } = render(
      <Layout>
        <Section columns={6}>
          <Article span={20}>x</Article>
        </Section>
      </Layout>,
    );
    const article = container.querySelector('article') as HTMLElement;
    expect(article.style.gridColumn).toBe('span 6');
    expect(article.getAttribute('data-span')).toBe('6');
  });
});
