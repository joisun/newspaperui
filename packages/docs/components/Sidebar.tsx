'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function cx(...args: (string | false | null | undefined)[]): string {
  return args.filter(Boolean).join(' ');
}

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const nav: NavItem[] = [
  { label: '概览', href: '/' },
  { label: '栅格系统', href: '/grid-system' },
  {
    label: '布局组件',
    href: '/components/article',
    children: [
      { label: 'Layout', href: '/components/article' },
      { label: 'Section', href: '/components/article' },
      { label: 'Article', href: '/components/article' },
      { label: 'Layer', href: '/components/article' },
      { label: 'Masthead', href: '/components/masthead' },
      { label: 'Rule', href: '/components/rule' },
      { label: 'Footer', href: '/components/rule' },
      { label: 'Sidebar', href: '/components/rule' },
      { label: 'BreakingNewsBanner', href: '/components/rule' },
      { label: 'Folio', href: '/components/rule' },
      { label: 'IndexBox', href: '/components/rule' },
      { label: 'Factbox', href: '/components/rule' },
    ],
  },
  {
    label: '文本组件',
    href: '/text',
    children: [
      { label: 'Headline', href: '/text' },
      { label: 'Subhead', href: '/text' },
      { label: 'Kicker', href: '/text' },
      { label: 'BodyText', href: '/text' },
      { label: 'Quote', href: '/text' },
      { label: 'Byline', href: '/text' },
      { label: 'Dateline', href: '/text' },
      { label: 'Caption', href: '/text' },
      { label: 'AuthorCard', href: '/text' },
      { label: 'JumpLine', href: '/text' },
    ],
  },
  {
    label: '媒体组件',
    href: '/components/media',
    children: [
      { label: 'Image', href: '/components/media' },
      { label: 'Figure', href: '/components/media' },
      { label: 'Video', href: '/components/media' },
      { label: 'PullQuote', href: '/components/media' },
      { label: 'RelatedArticles', href: '/components/media' },
    ],
  },
  { label: '主题与颜色', href: '/theme' },
  { label: 'Create 主题', href: '/create' },
  { label: 'Blocks', href: '/blocks' },
  {
    label: '示例',
    href: '/examples/spanning',
    children: [
      { label: '跨栏布局', href: '/examples/spanning' },
      { label: '响应式', href: '/examples/responsive' },
      { label: 'NYT 头版', href: '/examples/nyt-frontpage' },
      { label: 'Blackletter', href: '/examples/blackletter-frontpage' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside
      style={{
        width: '240px',
        flexShrink: 0,
        padding: '2rem 1rem',
        borderRight: '1px solid var(--nui-rule-hairline)',
        background: 'var(--nui-bg-surface)',
        fontFamily: 'var(--font-family-meta)',
        fontSize: '14px',
        position: 'sticky',
        top: 65,
        alignSelf: 'flex-start',
        maxHeight: 'calc(100vh - 65px)',
        overflowY: 'auto',
      }}
    >
      <Link
        href="/"
        style={{
          display: 'block',
          fontFamily: 'var(--font-family-masthead)',
          fontSize: '22px',
          fontWeight: 700,
          color: 'var(--nui-text-primary)',
          textDecoration: 'none',
          marginBottom: '0.25rem',
          letterSpacing: '0.02em',
        }}
      >
        NewspaperUI
      </Link>
      <div
        className="nui-small-caps"
        style={{
          fontSize: '11px',
          color: 'var(--nui-text-muted)',
          marginBottom: '2rem',
          letterSpacing: '0.08em',
        }}
      >
        Production Newspaper Components
      </div>

      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {nav.map((item) => (
            <li key={item.href} style={{ marginBottom: '0.75rem' }}>
              <Link
                href={item.href}
                className={cx(pathname === item.href && 'active')}
                style={{
                  display: 'block',
                  padding: '0.25rem 0',
                  color:
                    pathname === item.href
                      ? 'var(--nui-accent-primary)'
                      : 'var(--nui-text-secondary)',
                  textDecoration: 'none',
                  fontWeight: pathname === item.href ? 600 : 400,
                }}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul style={{ listStyle: 'none', padding: '0 0 0 1rem', margin: '0.25rem 0 0' }}>
                  {item.children.map((child) => (
                    <li key={child.href} style={{ marginBottom: '0.25rem' }}>
                      <Link
                        href={child.href}
                        style={{
                          display: 'block',
                          padding: '0.15rem 0',
                          fontSize: '13px',
                          color:
                            pathname === child.href
                              ? 'var(--nui-accent-primary)'
                              : 'var(--nui-text-muted)',
                          textDecoration: 'none',
                          fontWeight: pathname === child.href ? 600 : 400,
                        }}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
