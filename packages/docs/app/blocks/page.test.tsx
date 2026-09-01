import { render, screen } from '@testing-library/react';
import BlocksIndex from './page';

describe('BlocksIndex', () => {
  test('uses one main landmark and sequential page headings', () => {
    const { container } = render(<BlocksIndex />);

    expect(container.querySelectorAll('main')).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(10);
  });
});
