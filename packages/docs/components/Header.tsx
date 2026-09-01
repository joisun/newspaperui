'use client';

import { List, X } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLocale } from './LocaleContext';
import styles from './Header.module.css';

const navItems = [
  { label: 'components', href: '/docs/components/article' },
  { label: 'blocks', href: '/blocks' },
  { label: 'create', href: '/create' },
] as const;

const STORAGE_KEY = 'nui-theme';

export function Header() {
  const pathname = usePathname();
  const { localizeHref, messages, switchLocale } = useLocale();
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

  const navigationLinks = (closeAfterNavigation = false) => navItems.map((item) => {
    const href = localizeHref(item.href);

    return (
      <Link
        key={item.href}
        href={href}
        className={isActive(href) ? styles.activeLink : styles.navLink}
        aria-current={isActive(href) ? 'page' : undefined}
        onClick={closeAfterNavigation ? () => setMenuOpen(false) : undefined}
      >
        {messages.nav[item.label]}
      </Link>
    );
  });

  function changeLocale() {
    setMenuOpen(false);
    switchLocale();
  }

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href={localizeHref('/')} prefetch={false} className={styles.brand} aria-label={messages.nav.home}>NewspaperUI</Link>

        <nav className={styles.desktopNav} aria-label={messages.nav.primary}>
          {navigationLinks()}
          <a className={styles.navLink} href="https://github.com/joisun/newspaperui" target="_blank" rel="noreferrer">GitHub</a>
          <button type="button" onClick={toggleTheme} className={styles.themeButton} aria-label={dark ? messages.nav.light : messages.nav.dark}>
            <span className={styles.themeDot} data-theme={dark ? 'dark' : 'light'} aria-hidden="true" />
          </button>
          <button type="button" onClick={changeLocale} className={styles.localeButton} aria-label={messages.switchLocale}>
            {messages.localeShort}
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? messages.nav.closeMenu : messages.nav.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className={styles.menuButton}
        >
          {menuOpen ? <X size={22} weight="bold" aria-hidden="true" /> : <List size={22} weight="bold" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className={styles.mobileNav} aria-label={messages.nav.mobile}>
          {navigationLinks(true)}
          <a className={styles.navLink} href="https://github.com/joisun/newspaperui" target="_blank" rel="noreferrer">GitHub</a>
          <button type="button" onClick={toggleTheme} className={styles.mobileThemeButton} aria-label={dark ? messages.nav.light : messages.nav.dark}>
            <span className={styles.themeDot} data-theme={dark ? 'dark' : 'light'} aria-hidden="true" />
          </button>
          <button type="button" onClick={changeLocale} className={styles.mobileLocaleButton} aria-label={messages.switchLocale}>
            {messages.localeShort}
          </button>
        </nav>
      )}
    </header>
  );
}
