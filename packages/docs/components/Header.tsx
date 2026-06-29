'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Docs', href: '/docs/grid-system' },
  { label: 'Components', href: '/docs/components/article' },
  { label: 'Themes', href: '/docs/theme' },
  { label: 'Blocks', href: '/blocks' },
  { label: 'Create', href: '/create' },
];

const STORAGE_KEY = 'nui-theme';

export function Header() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sync state from DOM (set by inline script in layout) on mount
  useEffect(() => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    setDark(isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : '';
    localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
  }

  const linkStyle = (active: boolean) => ({
    fontFamily: 'var(--font-family-meta)',
    fontSize: '14px',
    fontWeight: 500,
    color: active ? 'var(--nui-accent-primary)' : 'var(--nui-text-secondary)',
    textDecoration: 'none',
    display: 'block',
    padding: '0.25rem 0',
  });

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--nui-bg-page)',
      borderBottom: '1px solid var(--nui-rule-hairline)',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-family-masthead)',
          fontSize: '24px', fontWeight: 700,
          color: 'var(--nui-text-primary)', textDecoration: 'none',
          letterSpacing: '0.02em', flexShrink: 0,
        }}>
          NewspaperUI
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'nowrap' }}
          className="nui-desktop-nav">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href} style={linkStyle(active)}>
                {item.label}
              </Link>
            );
          })}
          <a href="https://github.com/joisun/newspaperui" target="_blank" rel="noreferrer"
            style={{ ...linkStyle(false), color: 'var(--nui-text-muted)' }}>
            GitHub
          </a>
          <button onClick={toggleTheme} aria-label={dark ? 'Light Mode' : 'Dark Mode'} style={{
            fontFamily: 'var(--font-family-meta)', fontSize: '12px',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            padding: '0.4rem 0.75rem',
            background: 'transparent',
            border: '1px solid var(--nui-rule-decorative)',
            color: 'var(--nui-text-primary)', cursor: 'pointer',
            flexShrink: 0,
          }}>
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="nui-hamburger"
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: '0.5rem',
            color: 'var(--nui-text-primary)', fontSize: '20px',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nui-mobile-menu" style={{
          borderTop: '1px solid var(--nui-rule-hairline)',
          background: 'var(--nui-bg-page)',
          padding: '1rem 2rem 1.5rem',
        }}>
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ ...linkStyle(active), padding: '0.5rem 0', fontSize: '16px' }}>
                {item.label}
              </Link>
            );
          })}
          <a href="https://github.com/joisun/newspaperui" target="_blank" rel="noreferrer"
            style={{ ...linkStyle(false), color: 'var(--nui-text-muted)', padding: '0.5rem 0', fontSize: '16px' }}>
            GitHub
          </a>
          <button onClick={toggleTheme} style={{
            marginTop: '0.75rem',
            fontFamily: 'var(--font-family-meta)', fontSize: '13px',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            padding: '0.5rem 1rem',
            background: 'transparent',
            border: '1px solid var(--nui-rule-decorative)',
            color: 'var(--nui-text-primary)', cursor: 'pointer',
          }}>
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nui-desktop-nav { display: none !important; }
          .nui-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
