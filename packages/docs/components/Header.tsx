'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Docs', href: '/grid-system' },
  { label: 'Components', href: '/components/article' },
  { label: 'Themes', href: '/theme' },
  { label: 'Blocks', href: '/blocks' },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--nui-bg-page)',
        borderBottom: '1px solid var(--nui-rule-hairline)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-family-masthead)',
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--nui-text-primary)',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          NewspaperUI
        </Link>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-family-meta)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: active
                    ? 'var(--nui-accent-primary)'
                    : 'var(--nui-text-secondary)',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: 'var(--font-family-meta)',
              fontSize: '14px',
              color: 'var(--nui-text-muted)',
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
