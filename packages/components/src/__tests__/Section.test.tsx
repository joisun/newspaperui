import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section, useSection } from '../layout/Section';

const ColsProbe = () => {
  const { columns } = useSection();
  return <span data-testid="section-cols">{columns}</span>;
};

describe('Section', () => {
  it('applies grid-template-columns repeat', () => {
    const { container } = render(
      <Layout columns={24}>
        <Section columns={12}>
          <p>x</p>
        </Section>
      </Layout>,
    );
    const section = container.querySelector('section') as HTMLElement;
    expect(section.style.display).toBe('grid');
    expect(section.style.gridTemplateColumns).toBe('repeat(12, 1fr)');
    expect(section.getAttribute('data-columns')).toBe('12');
  });

  it('clamps columns when exceeding layout.columns', () => {
    render(
      <Layout columns={12}>
        <Section columns={24}>
          <ColsProbe />
        </Section>
      </Layout>,
    );
    expect(screen.getByTestId('section-cols').textContent).toBe('12');
  });

  it('applies top and bottom borders when divider="both"', () => {
    const { container } = render(
      <Layout>
        <Section columns={12} divider="both">
          <p>x</p>
        </Section>
      </Layout>,
    );
    const section = container.querySelector('section') as HTMLElement;
    expect(section.style.borderTop).toContain('1px');
    expect(section.style.borderBottom).toContain('1px');
  });
});
