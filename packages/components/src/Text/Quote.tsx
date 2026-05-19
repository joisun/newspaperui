'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { clampSpan, cx } from '@newspaperui/utils';
import { useSection } from '../layout/Section';

export interface QuoteProps {
  variant?: 'block' | 'inline';
  weight?: 'High' | 'Medium';
  span?: number;
  cite?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export const Quote: React.FC<QuoteProps> = ({
  variant = 'block', weight = 'Medium', span, cite, className, style, children,
}) => {
  const section = useSection();
  const config = visualWeights.Quote[weight]!;
  const cols = span ? clampSpan(span, section.columns) : undefined;

  if (variant === 'inline') {
    return (
      <em className={cx('nui-quote nui-quote--inline', className)} style={style}>
        {children}
      </em>
    );
  }

  return (
    <blockquote
      cite={cite}
      className={cx('nui-quote nui-quote--block nui-osf', className)}
      style={{
        fontFamily: `var(${config.fontFamily})`,
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        color: `var(${config.color})`,
        margin: config.margin,
        gridColumn: cols ? `span ${cols}` : undefined,
        borderLeft: 'none',
        ...style,
      }}
      data-weight={weight}
    >
      {children}
    </blockquote>
  );
};
