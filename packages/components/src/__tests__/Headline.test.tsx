import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { Headline } from '../text/Headline';

describe('Headline', () => {
  it('renders h1 for weight="High" and h2 for weight="Medium"', () => {
    const { container, rerender } = render(
      <Layout>
        <Section columns={12}>
          <Headline weight="High">A</Headline>
        </Section>
      </Layout>,
    );
    expect(container.querySelector('h1')).not.toBeNull();

    rerender(
      <Layout>
        <Section columns={12}>
          <Headline weight="Medium">B</Headline>
        </Section>
      </Layout>,
    );
    expect(container.querySelector('h2')).not.toBeNull();
  });

  it('respects "as" prop overriding default tag', () => {
    const { container } = render(
      <Layout>
        <Section columns={12}>
          <Headline weight="High" as="h2">
            X
          </Headline>
        </Section>
      </Layout>,
    );
    expect(container.querySelector('h1')).toBeNull();
    expect(container.querySelector('h2')).not.toBeNull();
  });

  it('uses CSS variable references for fontFamily', () => {
    const { container } = render(
      <Layout>
        <Section columns={12}>
          <Headline weight="High">X</Headline>
        </Section>
      </Layout>,
    );
    const h1 = container.querySelector('h1') as HTMLElement;
    expect(h1.style.fontFamily).toContain('var(--font-family-');
  });
});
