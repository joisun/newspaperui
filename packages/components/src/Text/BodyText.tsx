import React from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { calculateSpanWidth } from '@newspaperui/utils';
import { useSection } from '../Section/Section';

export interface BodyTextProps {
  weight?: 'High' | 'Medium' | 'Low';
  span?: number;
  children: React.ReactNode;
}

export const BodyText: React.FC<BodyTextProps> = ({
  weight = 'Medium',
  span,
  children,
}) => {
  const section = useSection();
  const config = visualWeights.BodyText[weight];

  if (!config) {
    throw new Error(`Invalid weight: ${weight} for BodyText`);
  }

  const finalSpan = span || (Array.isArray(config.span) ? config.span[0] : config.span);
  const width = calculateSpanWidth(finalSpan, section.columns);

  return (
    <p
      className="newspaper-body-text"
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
    </p>
  );
};
