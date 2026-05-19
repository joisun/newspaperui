import React from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { calculateSpanWidth } from '@newspaperui/utils';
import { useSection } from '../Section/Section';

const weightToTag: Record<'High' | 'Medium' | 'Low', 'h1' | 'h2' | 'h3'> = {
  High: 'h1',
  Medium: 'h2',
  Low: 'h3',
};

export interface HeadlineProps {
  weight?: 'High' | 'Medium' | 'Low';
  span?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
}

export const Headline: React.FC<HeadlineProps> = ({
  weight = 'High',
  span,
  as,
  children,
}) => {
  const section = useSection();
  const config = visualWeights.Headline[weight];

  if (!config) {
    throw new Error(`Invalid weight: ${weight} for Headline`);
  }

  const finalSpan = span || (Array.isArray(config.span) ? config.span[0] : config.span);
  const width = calculateSpanWidth(finalSpan, section.columns);
  const Tag = as ?? weightToTag[weight];

  return (
    <Tag
      className="newspaper-headline"
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
    </Tag>
  );
};
