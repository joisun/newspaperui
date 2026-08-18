import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ComponentDemo } from './Demo';

describe('ComponentDemo', () => {
  const source = `const paper = 'Daily Chronicle';\nrender(<Masthead title={paper} />);`;

  test('shows the rendered preview before a compact source preview', () => {
    const { container } = render(
      <ComponentDemo title="Classic masthead" code={source}>
        <div>Rendered newspaper masthead</div>
      </ComponentDemo>,
    );

    expect(screen.getByRole('region', { name: 'Classic masthead demo' })).toBeVisible();
    expect(screen.getByText('Rendered newspaper masthead')).toBeVisible();
    expect(screen.getByText(/const paper/)).toBeVisible();
    expect(screen.getByRole('button', { name: 'View source' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(container.querySelectorAll('[data-source-line]')).toHaveLength(2);
    expect(container.querySelectorAll('[aria-hidden="true"][data-line-number]')).toHaveLength(2);
  });

  test('expands source and announces a successful copy', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    render(
      <ComponentDemo title="Classic masthead" code={source}>
        <div>Rendered newspaper masthead</div>
      </ComponentDemo>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'View source' }));
    expect(screen.getByRole('button', { name: 'Hide source' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );

    fireEvent.click(screen.getByRole('button', { name: 'Copy source' }));
    await waitFor(() => expect(writeText).toHaveBeenCalledWith(source));
    expect(screen.getByRole('button', { name: 'Source copied' })).toBeVisible();
    expect(screen.getByRole('status')).toHaveTextContent('Source copied to clipboard.');
  });

  test('offers a recovery message when clipboard access fails', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error('denied')) },
    });

    render(
      <ComponentDemo title="Classic masthead" code={source}>
        <div>Rendered newspaper masthead</div>
      </ComponentDemo>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'View source' }));
    fireEvent.click(screen.getByRole('button', { name: 'Copy source' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Copy failed. Select the source and copy it manually.',
    );
  });
});
