import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Layout } from '../layout/Layout';
import { Section } from '../layout/Section';
import { Caption } from '../text/Caption';

describe('Caption', () => {
  it('renders as figcaption', () => {
    const { container } = render(
      <Layout><Section columns={24}><Caption>text</Caption></Section></Layout>
    );
    expect(container.querySelector('figcaption')).toBeTruthy();
  });

  it('renders credit in small-caps', () => {
    const { container } = render(
      <Layout><Section columns={24}><Caption credit="Photo by X">text</Caption></Section></Layout>
    );
    const credit = container.querySelector('.nui-small-caps');
    expect(credit?.textContent).toBe('Photo by X');
  });
});
