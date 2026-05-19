'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { clampSpan, cx } from '@newspaperui/utils';
import { useSection } from '../layout/Section';

const weightToTag: Record<'High' | 'Medium' | 'Low', 'h1' | 'h2' | 'h3'> = {
  High: 'h1', Medium: 'h2', Low: 'h3',
};

export interface HeadlineProps {
  weight?: 'High' | 'Medium' | 'Low';
  span?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export const Headline: React.FC<HeadlineProps> = ({
  weight = 'High', span, as, align, className, style, children,
}) => {
  const section = useSection();
  const config = visualWeights.Headline[weight]!;
  const Tag = (as ?? weightToTag[weight]) as keyof JSX.IntrinsicElements;
  const cols = span ? clampSpan(span, section.columns) : undefined;
  const variantClass = config.fontVariant?.includes('lining') ? 'nui-tnum' : 'nui-osf';

  return (
    <Tag
      className={cx('nui-headline', variantClass, className)}
      style={{
        fontFamily: `var(${config.fontFamily})`,
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        letterSpacing: config.letterSpacing,
        color: `var(${config.color})`,
        margin: config.margin,
        textAlign: align,
        textWrap: 'balance' as CSSProperties['textWrap'],
        gridColumn: cols ? `span ${cols}` : undefined,
        ...style,
      }}
      data-weight={weight}
    >
      {children}
    </Tag>
  );
};
