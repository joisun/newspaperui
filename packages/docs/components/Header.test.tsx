import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './Header';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header', () => {
  test('opens the mobile links inside a named navigation region', () => {
    render(<Header />);

    fireEvent.click(screen.getByLabelText('Open menu'));

    expect(screen.getByLabelText('Close menu')).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  });
});
