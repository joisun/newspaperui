/**
 * Visual weight mapping for newspaper components.
 * Reference: design.md §5 + classic-style design audit revision.
 *
 * fontFamily / color use CSS variable NAMES (e.g. '--font-family-headline').
 * Components do `var(${config.fontFamily})` at usage site.
 */

export type VisualWeight = 'High' | 'Medium' | 'Low' | 'Standard';

export type ComponentType =
  | 'Masthead'
  | 'Headline'
  | 'Subhead'
  | 'Kicker'
  | 'BodyText'
  | 'Quote'
  | 'PullQuote'
  | 'Byline'
  | 'Dateline'
  | 'Caption';

export interface VisualWeightConfig {
  fontFamily: string;             // CSS variable name, e.g. '--font-family-headline'
  fontSize: string | [string, string];
  fontWeight: number;
  lineHeight: number;
  letterSpacing?: string;
  fontStyle?: 'normal' | 'italic';
  fontVariant?: string;           // 'small-caps' | 'oldstyle-nums proportional-nums' …
  color: string;                  // CSS variable name, e.g. '--nui-text-primary'
  span: number | [number, number];
  margin: string;
}

export const visualWeights: Record<ComponentType, Partial<Record<VisualWeight, VisualWeightConfig>>> = {
  Masthead: {
    Standard: {
      fontFamily: '--font-family-masthead',
      fontSize: ['56px', '96px'],
      fontWeight: 700,
      lineHeight: 1.0,
      letterSpacing: '0.02em',
      fontVariant: 'lining-nums',
      color: '--nui-text-primary',
      span: 24,
      margin: '0',
    },
  },
  Headline: {
    High: {
      fontFamily: '--font-family-display',
      fontSize: ['48px', '72px'],
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      fontVariant: 'lining-nums',
      color: '--nui-text-primary',
      span: [8, 16],
      margin: '0 0 1rem 0',
    },
    Medium: {
      fontFamily: '--font-family-headline',
      fontSize: ['32px', '40px'],
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.005em',
      fontVariant: 'lining-nums',
      color: '--nui-text-primary',
      span: [6, 10],
      margin: '0 0 0.75rem 0',
    },
    Low: {
      fontFamily: '--font-family-headline',
      fontSize: ['22px', '26px'],
      fontWeight: 500,
      lineHeight: 1.2,
      fontVariant: 'lining-nums',
      color: '--nui-text-body',
      span: [4, 6],
      margin: '0 0 0.5rem 0',
    },
  },
  Subhead: {
    High: {
      fontFamily: '--font-family-headline',
      fontSize: ['18px', '22px'],
      fontWeight: 500,
      fontStyle: 'italic',
      lineHeight: 1.3,
      fontVariant: 'oldstyle-nums',
      color: '--nui-text-secondary',
      span: [4, 8],
      margin: '0 0 0.75rem 0',
    },
    Medium: {
      fontFamily: '--font-family-headline',
      fontSize: ['16px', '18px'],
      fontWeight: 400,
      fontStyle: 'italic',
      lineHeight: 1.35,
      fontVariant: 'oldstyle-nums',
      color: '--nui-text-secondary',
      span: [2, 4],
      margin: '0 0 0.5rem 0',
    },
  },
  Kicker: {
    Standard: {
      fontFamily: '--font-family-meta',
      fontSize: ['12px', '13px'],
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0.08em',
      fontVariant: 'small-caps',
      color: '--nui-accent-primary',
      span: [1, 4],
      margin: '0 0 0.25rem 0',
    },
  },
  BodyText: {
    High: {
      fontFamily: '--font-family-body',
      fontSize: ['16px', '17px'],
      fontWeight: 400,
      lineHeight: 1.6,
      fontVariant: 'oldstyle-nums',
      color: '--nui-text-body',
      span: 1,
      margin: '0 0 0.75rem 0',
    },
    Medium: {
      fontFamily: '--font-family-body',
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: 1.55,
      fontVariant: 'oldstyle-nums',
      color: '--nui-text-body',
      span: 1,
      margin: '0 0 0.5rem 0',
    },
    Low: {
      fontFamily: '--font-family-body',
      fontSize: ['13px', '14px'],
      fontWeight: 400,
      lineHeight: 1.5,
      fontVariant: 'oldstyle-nums',
      color: '--nui-text-secondary',
      span: 1,
      margin: '0 0 0.5rem 0',
    },
  },
  Quote: {
    High: {
      fontFamily: '--font-family-body',
      fontSize: ['17px', '19px'],
      fontWeight: 400,
      lineHeight: 1.55,
      fontVariant: 'oldstyle-nums',
      color: '--nui-text-quote',
      span: 2,
      margin: '1rem 0 1rem 1.5em',
    },
    Medium: {
      fontFamily: '--font-family-body',
      fontSize: ['15px', '17px'],
      fontWeight: 400,
      lineHeight: 1.5,
      fontVariant: 'oldstyle-nums',
      color: '--nui-text-quote',
      span: 1,
      margin: '0.75rem 0',
    },
  },
  PullQuote: {
    High: {
      fontFamily: '--font-family-display',
      fontSize: ['26px', '32px'],
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.005em',
      fontVariant: 'lining-nums',
      color: '--nui-text-primary',
      span: [2, 3],
      margin: '1.5rem 0',
    },
    Medium: {
      fontFamily: '--font-family-display',
      fontSize: ['20px', '24px'],
      fontWeight: 500,
      lineHeight: 1.25,
      fontVariant: 'lining-nums',
      color: '--nui-text-body',
      span: [1, 2],
      margin: '1rem 0',
    },
  },
  Byline: {
    Standard: {
      fontFamily: '--font-family-meta',
      fontSize: ['12px', '13px'],
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '0.06em',
      fontVariant: 'small-caps',
      color: '--nui-text-secondary',
      span: 1,
      margin: '0 0 0.25rem 0',
    },
  },
  Dateline: {
    Standard: {
      fontFamily: '--font-family-meta',
      fontSize: ['12px', '13px'],
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '0.08em',
      fontVariant: 'small-caps',
      color: '--nui-text-primary',
      span: 1,
      margin: '0',
    },
  },
  Caption: {
    Standard: {
      fontFamily: '--font-family-body',
      fontSize: '13px',
      fontWeight: 400,
      fontStyle: 'italic',
      lineHeight: 1.4,
      fontVariant: 'oldstyle-nums',
      color: '--nui-text-secondary',
      span: 1,
      margin: '0.5rem 0 0 0',
    },
  },
};

/** Resolve fontSize: tuple → clamp(min, preferred, max) for responsive sizing. */
export function resolveFontSize(value: string | [string, string]): string {
  if (Array.isArray(value)) {
    const min = value[0];
    const max = value[1];
    const minNum = parseFloat(min);
    const maxNum = parseFloat(max);
    const vw = ((minNum + maxNum) / 2 / 16 * 1.5).toFixed(2);
    return `clamp(${min}, ${vw}vw, ${max})`;
  }
  return value;
}

/** Resolve span: tuple → first value (lower bound). */
export function resolveSpan(value: number | [number, number]): number {
  return Array.isArray(value) ? value[0] : value;
}
