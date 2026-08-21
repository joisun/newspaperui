import {
  getLocaleFromPathname,
  localizeHref,
  localizePath,
} from './i18n';

describe('i18n routing', () => {
  test('uses Chinese for unprefixed routes and English for /en routes', () => {
    expect(getLocaleFromPathname('/')).toBe('zh');
    expect(getLocaleFromPathname('/docs/grid-system')).toBe('zh');
    expect(getLocaleFromPathname('/en')).toBe('en');
    expect(getLocaleFromPathname('/en/docs/grid-system')).toBe('en');
  });

  test('switches locale prefixes without changing the content path', () => {
    expect(localizePath('/docs/grid-system', 'en')).toBe('/en/docs/grid-system');
    expect(localizePath('/en/docs/grid-system', 'zh')).toBe('/docs/grid-system');
    expect(localizePath('/', 'en')).toBe('/en');
    expect(localizePath('/en', 'zh')).toBe('/');
  });

  test('keeps query strings and hashes while localizing internal links', () => {
    expect(localizeHref('/docs/grid-system?view=compact#article', 'en'))
      .toBe('/en/docs/grid-system?view=compact#article');
    expect(localizeHref('https://github.com/joisun/newspaperui', 'zh'))
      .toBe('https://github.com/joisun/newspaperui');
  });
});
