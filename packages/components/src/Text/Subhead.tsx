'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { clampSpan, cx } from '@newspaperui/utils';
import { useSection } from '../layout/Section';

export interface SubheadProps {
  weight?: 'High' | 'Medium';
  span?: number;
  as?: 'h2' | 'h3' | 'h4' | 'p';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export const Subhead: React.FC<SubheadProps> = ({
  weight = 'Medium', span, as = 'p', className, style, children,
}) => {
  const section = useSection();
  const config = visualWeights.Subhead[weight]!;
  const Tag = as as keyof JSX.IntrinsicElements;
  const cols = span ? clampSpan(span, section.columns) : undefined;
  return (
    <Tag
      className={cx('nui-subhead nui-osf', className)}
      style={{
        fontFamily: `var(${config.fontFamily})`,
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        fontStyle: config.fontStyle,
        lineHeight: config.lineHeight,
        color: `var(${config.color})`,
        margin: config.margin,
        gridColumn: cols ? `span ${cols}` : undefined,
        ...style,
      }}
      data-weight={weight}
    >
      {children}
    </Tag>
  );
};
