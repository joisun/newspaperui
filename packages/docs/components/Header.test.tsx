import { fireEvent, render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
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
    expect(screen.queryByRole('link', { name: 'Themes' })).not.toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Dark' })).toHaveLength(2);
  });

  test('does not prefetch the static-export home route', () => {
    const source = readFileSync(
      resolve(process.cwd(), 'components/Header.tsx'),
      'utf8',
    );

    expect(source).toMatch(/<Link\s+href="\/"\s+prefetch={false}/);
  });
});
