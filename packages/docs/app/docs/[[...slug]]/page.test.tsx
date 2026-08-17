import { render, screen } from '@testing-library/react';
import Page from './page';

vi.mock('@/lib/source', () => ({
  source: {
    getPage: () => ({
      url: '/docs/grid-system',
      data: {
        title: '栅格系统',
        description: '24 列响应式栅格，CSS Grid 实现',
        toc: [],
        body: () => <h2>概念</h2>,
      },
    }),
    generateParams: () => [{ slug: ['grid-system'] }],
  },
}));

vi.mock('fumadocs-ui/page', () => ({
  DocsPage: ({ children }: { children: React.ReactNode }) => <section>{children}</section>,
  DocsBody: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('../../../mdx-components', () => ({
  useMDXComponents: () => ({}),
}));

describe('documentation page', () => {
  test('renders the frontmatter title as the single page H1', async () => {
    const element = await Page({
      params: Promise.resolve({ slug: ['grid-system'] }),
    });
    render(element);

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('栅格系统');
  });
});
