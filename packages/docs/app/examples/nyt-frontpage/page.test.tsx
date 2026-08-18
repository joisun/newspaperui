import { render, screen } from '@testing-library/react';
import FrontPage from './page';

describe('NYT front page example', () => {
  test('uses one main landmark and one page heading', () => {
    render(<FrontPage />);

    expect(screen.getAllByRole('main')).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Historic Accord Reshapes Continental Trade/,
      }),
    ).toBeVisible();
  });
});
