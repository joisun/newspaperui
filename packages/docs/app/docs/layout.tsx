import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      disableThemeSwitch
      nav={{ enabled: false }}
      sidebar={{
        hideSearch: true,
        collapsible: false,
        className: 'nui-docs-sidebar',
      }}
    >
      {children}
    </DocsLayout>
  );
}
