import React from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { calculateSpanWidth } from '@newspaperui/utils';
import { useSection } from '../Section/Section';

export interface QuoteProps {
  weight?: 'High' | 'Medium';
  span?: number;
  children: React.ReactNode;
}

export const Quote: React.FC<QuoteProps> = ({
  weight = 'Medium',
  span,
  children,
}) => {
  const section = useSection();
  const config = visualWeights.Quote[weight];

  if (!config) {
    throw new Error(`Invalid weight: ${weight} for Quote`);
  }

  const finalSpan = span || (Array.isArray(config.span) ? config.span[0] : config.span);
  const width = calculateSpanWidth(finalSpan, section.columns);

  return (
    <blockquote
      className="newspaper-quote"
      style={{
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        color: config.color,
        margin: config.margin,
        width,
      }}
      data-weight={weight}
      data-span={finalSpan}
    >
      {children}
    </blockquote>
  );
};
