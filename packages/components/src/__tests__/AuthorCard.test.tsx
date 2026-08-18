import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AuthorCard } from '../text/AuthorCard';

describe('AuthorCard', () => {
  it('gives the optional email link a 44px minimum hit area', () => {
    render(<AuthorCard name="Eleanor Whitcombe" email="eleanor@example.com" />);

    expect(screen.getByRole('link', { name: 'eleanor@example.com' })).toHaveStyle({
      minHeight: '44px',
      display: 'inline-flex',
      alignItems: 'center',
    });
  });
});
