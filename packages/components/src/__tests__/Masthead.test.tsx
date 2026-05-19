import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Masthead } from '../layout/Masthead';

describe('Masthead', () => {
  it('renders title as an h1', () => {
    render(<Masthead title="The Daily Times" />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('The Daily Times');
  });

  it('uses the blackletter font family when variant="blackletter"', () => {
    render(<Masthead title="Gazette" variant="blackletter" />);
    const h1 = screen.getByRole('heading', { level: 1 }) as HTMLElement;
    expect(h1.style.fontFamily).toContain('--font-family-blackletter');
  });

  it('renders edition, date, and price when provided', () => {
    render(
      <Masthead
        title="The Daily Times"
        edition="Late Edition"
        date="May 19, 2026"
        price="$3.00"
      />,
    );
    expect(screen.getByText('Late Edition')).toBeInTheDocument();
    expect(screen.getByText('May 19, 2026')).toBeInTheDocument();
    expect(screen.getByText('$3.00')).toBeInTheDocument();
  });
});
