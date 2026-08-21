'use client';

import { I18nProvider } from 'fumadocs-ui/i18n';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import {
  getLocaleFromPathname,
  localizeHref,
  localizePath,
  messages,
  type Locale,
} from '../lib/i18n';
import { LocaleContext, type LocaleContextValue } from './LocaleContext';

const STORAGE_KEY = 'nui-locale';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = messages[locale];

  useEffect(() => {
    const storedLocale = localStorage.getItem(STORAGE_KEY);
    if (pathname === '/' && storedLocale === 'en') {
      router.replace('/en');
      return;
    }

    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, pathname, router]);

  const value = useMemo<LocaleContextValue>(() => ({
    locale,
    messages: dictionary,
    localizeHref: (href) => localizeHref(href, locale),
    switchLocale: () => {
      const nextLocale: Locale = locale === 'zh' ? 'en' : 'zh';
      localStorage.setItem(STORAGE_KEY, nextLocale);
      router.push(localizePath(pathname, nextLocale));
    },
  }), [dictionary, locale, pathname, router]);

  return (
    <LocaleContext.Provider value={value}>
      <I18nProvider
        locale={locale}
        locales={[
          { locale: 'zh', name: '中文' },
          { locale: 'en', name: 'English' },
        ]}
        translations={dictionary.fumadocs}
        onChange={(nextLocale) => router.push(localizePath(pathname, nextLocale as Locale))}
      >
        {children}
      </I18nProvider>
    </LocaleContext.Provider>
  );
}
