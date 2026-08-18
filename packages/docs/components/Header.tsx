'use client';

import { List, Moon, Sun, X } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const navItems = [
  { label: 'Docs', href: '/docs/grid-system' },
  { label: 'Components', href: '/docs/components/article' },
  { label: 'Blocks', href: '/blocks' },
  { label: 'Create', href: '/create' },
];

const STORAGE_KEY = 'nui-theme';

export function Header() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : '';
    localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href);
  }

  const navigationLinks = (closeAfterNavigation = false) => navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={isActive(item.href) ? styles.activeLink : styles.navLink}
      aria-current={isActive(item.href) ? 'page' : undefined}
      onClick={closeAfterNavigation ? () => setMenuOpen(false) : undefined}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" prefetch={false} className={styles.brand} aria-label="NewspaperUI home">NewspaperUI</Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigationLinks()}
          <a className={styles.navLink} href="https://github.com/joisun/newspaperui" target="_blank" rel="noreferrer">GitHub</a>
          <button type="button" onClick={toggleTheme} className={styles.themeButton}>
            {dark ? <Sun size={18} weight="bold" aria-hidden="true" /> : <Moon size={18} weight="bold" aria-hidden="true" />}
            <span>{dark ? 'Light' : 'Dark'}</span>
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className={styles.menuButton}
        >
          {menuOpen ? <X size={22} weight="bold" aria-hidden="true" /> : <List size={22} weight="bold" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className={styles.mobileNav} aria-label="Mobile navigation">
          {navigationLinks(true)}
          <a className={styles.navLink} href="https://github.com/joisun/newspaperui" target="_blank" rel="noreferrer">GitHub</a>
          <button type="button" onClick={toggleTheme} className={styles.mobileThemeButton}>
            {dark ? <Sun size={18} weight="bold" aria-hidden="true" /> : <Moon size={18} weight="bold" aria-hidden="true" />}
            <span>{dark ? 'Light' : 'Dark'}</span>
          </button>
        </nav>
      )}
    </header>
  );
}
