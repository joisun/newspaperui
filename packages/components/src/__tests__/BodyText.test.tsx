import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { BodyText } from '../text/BodyText';

describe('BodyText', () => {
  it('enables multi-column flow when columns >= 2', () => {
    const { container } = render(
      <Layout>
        <Section columns={12}>
          <BodyText columns={3}>
            <p>p1</p>
          </BodyText>
        </Section>
      </Layout>,
    );
    const root = container.querySelector('.nui-bodytext') as HTMLElement;
    expect(root.style.columnCount).toBe('3');
    expect(root.style.columnGap).toBe('var(--nui-gutter)');
    expect(root.classList.contains('nui-column-rule')).toBe(true);
    expect(root.getAttribute('data-columns')).toBe('3');
  });

  it('applies the nui-drop-cap class when dropCap is true', () => {
    const { container } = render(
      <Layout>
        <Section columns={12}>
          <BodyText dropCap>
            <p>p</p>
          </BodyText>
        </Section>
      </Layout>,
    );
    const root = container.querySelector('.nui-bodytext') as HTMLElement;
    expect(root.classList.contains('nui-drop-cap')).toBe(true);
  });

  it('does not enable multi-column flow when columns is 1 (default)', () => {
    const { container } = render(
      <Layout>
        <Section columns={12}>
          <BodyText>
            <p>p</p>
          </BodyText>
        </Section>
      </Layout>,
    );
    const root = container.querySelector('.nui-bodytext') as HTMLElement;
    expect(root.style.columnCount).toBe('');
    expect(root.classList.contains('nui-column-rule')).toBe(false);
  });
});
