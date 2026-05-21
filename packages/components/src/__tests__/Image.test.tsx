import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { Image } from '../media/Image';

describe('Image', () => {
  const wrap = (ui: React.ReactElement) => render(
    <Layout><Section columns={24}>{ui}</Section></Layout>
  );

  it('renders img with src and alt', () => {
    const { container } = wrap(<Image src="/test.jpg" alt="test" />);
    const img = container.querySelector('img');
    expect(img?.getAttribute('src')).toBe('/test.jpg');
    expect(img?.getAttribute('alt')).toBe('test');
  });

  it('defaults to lazy loading', () => {
    const { container } = wrap(<Image src="/test.jpg" alt="test" />);
    const img = container.querySelector('img');
    expect(img?.getAttribute('loading')).toBe('lazy');
  });

  it('applies aspectRatio', () => {
    const { container } = wrap(<Image src="/test.jpg" alt="test" aspectRatio="16/9" />);
    const img = container.querySelector('img') as HTMLElement;
    expect(img.style.aspectRatio).toBe('16/9');
  });
});
