import React from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';

export interface CaptionProps {
  children: React.ReactNode;
}

export const Caption: React.FC<CaptionProps> = ({ children }) => {
  const config = visualWeights.Caption.Standard;

  if (!config) {
    throw new Error('Caption configuration not found');
  }

  return (
    <figcaption
      className="newspaper-caption"
      style={{
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        color: config.color,
        margin: config.margin,
      }}
    >
      {children}
    </figcaption>
  );
};
