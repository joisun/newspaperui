import { fireEvent, render, screen } from '@testing-library/react';
import LandingPage from './page';

describe('LandingPage', () => {
  test('exposes one primary landmark with one page title', () => {
    const { container } = render(<LandingPage />);

    expect(container.querySelectorAll('main')).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  test('makes the public installation command visible', () => {
    render(<LandingPage />);

    expect(screen.getByText('pnpm add newspaperui')).toBeVisible();
  });

  test('confirms when the installation command is copied', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });
    render(<LandingPage />);

    fireEvent.click(screen.getByRole('button', { name: 'Copy install command' }));

    expect(await screen.findByRole('status')).toHaveTextContent('Copied');
    expect(writeText).toHaveBeenCalledWith('pnpm add newspaperui');
  });
});
