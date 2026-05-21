import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layer } from '../layout/Layer';

describe('Layer', () => {
  it('renders with absolute position by default', () => {
    const { container } = render(<Layer>content</Layer>);
    const div = container.firstElementChild as HTMLElement;
    expect(div.style.position).toBe('absolute');
  });

  it('applies top/left/zIndex', () => {
    const { container } = render(<Layer position="fixed" top="10px" left="20px" zIndex={99}>x</Layer>);
    const div = container.firstElementChild as HTMLElement;
    expect(div.style.position).toBe('fixed');
    expect(div.style.top).toBe('10px');
    expect(div.style.left).toBe('20px');
    expect(div.style.zIndex).toBe('99');
  });
});
