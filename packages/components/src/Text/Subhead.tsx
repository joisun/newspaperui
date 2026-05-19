import React from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { calculateSpanWidth } from '@newspaperui/utils';
import { useSection } from '../Section/Section';

export interface SubheadProps {
  weight?: 'High' | 'Medium';
  span?: number;
  children: React.ReactNode;
}

export const Subhead: React.FC<SubheadProps> = ({
  weight = 'Medium',
  span,
  children,
}) => {
  const section = useSection();
  const config = visualWeights.Subhead[weight];

  if (!config) {
    throw new Error(`Invalid weight: ${weight} for Subhead`);
  }

  const finalSpan = span || (Array.isArray(config.span) ? config.span[0] : config.span);
  const width = calculateSpanWidth(finalSpan, section.columns);

  return (
    <h2
      className="newspaper-subhead"
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
    </h2>
  );
};
