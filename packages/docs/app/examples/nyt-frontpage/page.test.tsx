import { render, screen } from '@testing-library/react';
import Layout from './layout';
import FrontPage from './page';

describe('NYT front page example', () => {
  test('uses one main landmark and one page heading', () => {
    render(
      <Layout>
        <FrontPage />
      </Layout>,
    );

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
