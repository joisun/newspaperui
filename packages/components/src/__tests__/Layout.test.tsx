import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Layout, useLayout } from '../layout/Layout';

const ColumnsProbe = () => {
  const { columns } = useLayout();
  return <span data-testid="cols">{columns}</span>;
};

describe('Layout', () => {
  it('renders children', () => {
    render(
      <Layout>
        <p>hello</p>
      </Layout>,
    );
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('provides default columns context of 24', () => {
    render(
      <Layout>
        <ColumnsProbe />
      </Layout>,
    );
    expect(screen.getByTestId('cols').textContent).toBe('24');
  });

  it('applies maxWidth and padding', () => {
    const { container } = render(
      <Layout maxWidth="900px" padding="16px">
        <p>x</p>
      </Layout>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.style.maxWidth).toBe('900px');
    expect(root.style.padding).toBe('16px');
  });
});
