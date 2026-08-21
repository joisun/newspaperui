'use client';

import { createContext, useContext } from 'react';
import { messages, type Locale, type Messages } from '../lib/i18n';

export interface LocaleContextValue {
  locale: Locale;
  messages: Messages;
  localizeHref: (href: string) => string;
  switchLocale: () => void;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  messages: messages.en,
  localizeHref: (href) => href,
  switchLocale: () => undefined,
});

export function useLocale() {
  return useContext(LocaleContext);
}
