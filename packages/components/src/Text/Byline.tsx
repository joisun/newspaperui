import React from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';

export interface BylineProps {
  children: React.ReactNode;
}

export const Byline: React.FC<BylineProps> = ({ children }) => {
  const config = visualWeights.Byline.Standard;

  if (!config) {
    throw new Error('Byline configuration not found');
  }

  return (
    <div
      className="newspaper-byline"
      style={{
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        color: config.color,
        margin: config.margin,
      }}
    >
      {children}
    </div>
  );
};
