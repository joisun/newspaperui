/**
 * Resolves a fontSize value to a single CSS string.
 * For range tuples [min, max], returns the lower bound (min).
 */
export function resolveFontSize(fontSize: string | [string, string]): string {
  return Array.isArray(fontSize) ? fontSize[0] : fontSize;
}


export type VisualWeight = 'High' | 'Medium' | 'Low' | 'Standard';

export type ComponentType =
  | 'Headline'
  | 'Subhead'
  | 'BodyText'
  | 'Quote'
  | 'PullQuote'
  | 'Byline'
  | 'Caption';

export interface VisualWeightConfig {
  fontSize: string | [string, string];
  fontWeight: number;
  lineHeight: number;
  color: string;
  span: number | [number, number];
  margin: string;
}

/**
 * Visual weight configuration mapping
 * Maps component types and their visual weights to specific styling configurations
 */
export const visualWeights: Record<
  ComponentType,
  Partial<Record<VisualWeight, VisualWeightConfig>>
> = {
  Headline: {
    High: {
      fontSize: ['36px', '48px'],
      fontWeight: 700,
      lineHeight: 1.1,
      color: '#111',
      span: [6, 8],
      margin: '0 0 1rem 0',
    },
    Medium: {
      fontSize: ['28px', '34px'],
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#111',
      span: [4, 6],
      margin: '0 0 0.75rem 0',
    },
    Low: {
      fontSize: ['22px', '26px'],
      fontWeight: 500,
      lineHeight: 1.3,
      color: '#222',
      span: [2, 4],
      margin: '0 0 0.5rem 0',
    },
  },
  Subhead: {
    High: {
      fontSize: ['20px', '24px'],
      fontWeight: 600,
      lineHeight: 1.25,
      color: '#222',
      span: [2, 3],
      margin: '0 0 0.5rem 0',
    },
    Medium: {
      fontSize: ['16px', '18px'],
      fontWeight: 500,
      lineHeight: 1.3,
      color: '#333',
      span: [1, 2],
      margin: '0 0 0.25rem 0',
    },
  },
  BodyText: {
    High: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#333',
      span: 1,
      margin: '0 0 1rem 0',
    },
    Medium: {
      fontSize: ['14px', '15px'],
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#444',
      span: 1,
      margin: '0 0 0.75rem 0',
    },
    Low: {
      fontSize: ['12px', '14px'],
      fontWeight: 400,
      lineHeight: 1.4,
      color: '#555',
      span: 1,
      margin: '0 0 0.5rem 0',
    },
  },
  Quote: {
    High: {
      fontSize: ['20px', '24px'],
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#222',
      span: 2,
      margin: '0 0 0.75rem 0',
    },
    Medium: {
      fontSize: ['16px', '18px'],
      fontWeight: 400,
      lineHeight: 1.4,
      color: '#333',
      span: 1,
      margin: '0 0 0.5rem 0',
    },
  },
  PullQuote: {
    High: {
      fontSize: ['24px', '28px'],
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#111',
      span: [2, 3],
      margin: '0 0 0.5rem 0',
    },
    Medium: {
      fontSize: ['18px', '20px'],
      fontWeight: 500,
      lineHeight: 1.25,
      color: '#222',
      span: [1, 2],
      margin: '0 0 0.25rem 0',
    },
  },
  Byline: {
    Standard: {
      fontSize: ['12px', '14px'],
      fontWeight: 400,
      lineHeight: 1.3,
      color: '#555',
      span: 1,
      margin: '0 0 0.25rem 0',
    },
  },
  Caption: {
    Standard: {
      fontSize: ['12px', '14px'],
      fontWeight: 400,
      lineHeight: 1.3,
      color: '#555',
      span: 1,
      margin: '0.25rem 0',
    },
  },
};
