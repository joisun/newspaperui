import { render, screen } from '@testing-library/react';
import CreatePage from './page';

describe('CreatePage', () => {
  test('associates every visible field label with its control', () => {
    render(<CreatePage />);

    for (const label of [
      'Page Background',
      'Primary Text',
      'Body Text',
      'Accent Color',
      'Hairline Rule',
      'Gutter',
      'Masthead Font',
      'Body Font',
    ]) {
      expect(screen.getByLabelText(label)).toBeVisible();
    }
  });

  test('offers explicit editor and preview views for narrow screens', () => {
    render(<CreatePage />);

    expect(screen.getByRole('tab', { name: 'Editor' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Preview' })).toHaveAttribute('aria-selected', 'false');
  });
});
