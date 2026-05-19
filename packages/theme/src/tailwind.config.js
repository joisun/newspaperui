/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        masthead: ['var(--font-family-masthead)'],
        blackletter: ['var(--font-family-blackletter)'],
        display: ['var(--font-family-display)'],
        headline: ['var(--font-family-headline)'],
        body: ['var(--font-family-body)'],
        meta: ['var(--font-family-meta)'],
      },
      colors: {
        page: 'var(--nui-bg-page)',
        surface: 'var(--nui-bg-surface)',
        primary: 'var(--nui-text-primary)',
        body: 'var(--nui-text-body)',
        secondary: 'var(--nui-text-secondary)',
        muted: 'var(--nui-text-muted)',
        quote: 'var(--nui-text-quote)',
        hairline: 'var(--nui-rule-hairline)',
        decorative: 'var(--nui-rule-decorative)',
        accent: {
          primary: 'var(--nui-accent-primary)',
          'ink-blue': 'var(--nui-accent-ink-blue)',
        },
        highlight: 'var(--nui-highlight)',
      },
    },
  },
};
