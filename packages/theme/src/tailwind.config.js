/**
 * Tailwind CSS Configuration for NewspaperUI
 * Extends Tailwind with newspaper-specific utilities and 24-column grid
 */

const config = {
  theme: {
    extend: {
      colors: {
        nui: {
          text: {
            primary: 'var(--nui-color-text-primary)',
            secondary: 'var(--nui-color-text-secondary)',
            tertiary: 'var(--nui-color-text-tertiary)',
            quaternary: 'var(--nui-color-text-quaternary)',
            muted: 'var(--nui-color-text-muted)',
          },
          gray: {
            50: 'var(--nui-color-gray-50)',
            100: 'var(--nui-color-gray-100)',
            200: 'var(--nui-color-gray-200)',
            300: 'var(--nui-color-gray-300)',
            400: 'var(--nui-color-gray-400)',
            500: 'var(--nui-color-gray-500)',
            600: 'var(--nui-color-gray-600)',
            700: 'var(--nui-color-gray-700)',
            800: 'var(--nui-color-gray-800)',
            900: 'var(--nui-color-gray-900)',
          },
          accent: {
            primary: 'var(--nui-color-accent-primary)',
            secondary: 'var(--nui-color-accent-secondary)',
            tertiary: 'var(--nui-color-accent-tertiary)',
          },
        },
      },
      spacing: {
        'nui-gutter': 'var(--nui-gutter)',
        'nui-gutter-sm': 'var(--nui-gutter-sm)',
        'nui-gutter-lg': 'var(--nui-gutter-lg)',
      },
      fontFamily: {
        'nui-serif': 'var(--nui-font-serif)',
        'nui-serif-display': 'var(--nui-font-serif-display)',
        'nui-sans': 'var(--nui-font-sans)',
        'nui-sans-condensed': 'var(--nui-font-sans-condensed)',
        'nui-mono': 'var(--nui-font-mono)',
      },
      fontSize: {
        'nui-xs': 'var(--nui-font-size-xs)',
        'nui-sm': 'var(--nui-font-size-sm)',
        'nui-base': 'var(--nui-font-size-base)',
        'nui-lg': 'var(--nui-font-size-lg)',
        'nui-xl': 'var(--nui-font-size-xl)',
        'nui-2xl': 'var(--nui-font-size-2xl)',
        'nui-3xl': 'var(--nui-font-size-3xl)',
        'nui-4xl': 'var(--nui-font-size-4xl)',
        'nui-5xl': 'var(--nui-font-size-5xl)',
        'nui-6xl': 'var(--nui-font-size-6xl)',
      },
      fontWeight: {
        'nui-normal': 'var(--nui-font-weight-normal)',
        'nui-medium': 'var(--nui-font-weight-medium)',
        'nui-semibold': 'var(--nui-font-weight-semibold)',
        'nui-bold': 'var(--nui-font-weight-bold)',
      },
      lineHeight: {
        'nui-tight': 'var(--nui-line-height-tight)',
        'nui-snug': 'var(--nui-line-height-snug)',
        'nui-normal': 'var(--nui-line-height-normal)',
        'nui-relaxed': 'var(--nui-line-height-relaxed)',
        'nui-loose': 'var(--nui-line-height-loose)',
        'nui-body': 'var(--nui-line-height-body)',
      },
      maxWidth: {
        'nui-grid': 'var(--nui-grid-max-width)',
      },
      // 24-column grid utilities
      gridTemplateColumns: {
        'nui-24': 'repeat(24, minmax(0, 1fr))',
        'nui-16': 'repeat(16, minmax(0, 1fr))',
        'nui-12': 'repeat(12, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
    },
  },
  plugins: [],
};

export default config;
