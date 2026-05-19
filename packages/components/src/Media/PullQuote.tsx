import React from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { calculateSpanWidth } from '@newspaperui/utils';
import { useSection } from '../Section/Section';

export interface PullQuoteProps {
  weight?: 'High' | 'Medium';
  span?: number;
  author?: string;
  children: React.ReactNode;
}

export const PullQuote: React.FC<PullQuoteProps> = ({
  weight = 'High',
  span,
  author,
  children,
}) => {
  const section = useSection();
  const config = visualWeights.PullQuote[weight];

  if (!config) {
    throw new Error(`Invalid weight: ${weight} for PullQuote`);
  }

  const finalSpan = span || (Array.isArray(config.span) ? config.span[0] : config.span);
  const width = calculateSpanWidth(finalSpan, section.columns);

  return (
    <aside
      className="newspaper-pull-quote"
      style={{
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        color: config.color,
        margin: config.margin,
        width,
        padding: 'var(--nui-padding-lg, 1rem)',
        borderLeft: '4px solid var(--nui-color-accent-primary, currentColor)',
      }}
      data-weight={weight}
      data-span={finalSpan}
    >
      <blockquote style={{ margin: 0 }}>
        {children}
      </blockquote>
      {author && (
        <cite
          style={{
            display: 'block',
            marginTop: '0.5rem',
            fontSize: '0.875em',
            fontStyle: 'normal',
          }}
        >
          — {author}
        </cite>
      )}
    </aside>
  );
};
