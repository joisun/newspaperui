'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { cx } from '@newspaperui/utils';

export interface KickerProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export const Kicker: React.FC<KickerProps> = ({ className, style, children }) => {
  const config = visualWeights.Kicker.Standard!;
  return (
    <div
      className={cx('nui-kicker nui-small-caps', className)}
      style={{
        fontFamily: `var(${config.fontFamily})`,
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        letterSpacing: config.letterSpacing,
        color: `var(${config.color})`,
        margin: config.margin,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
