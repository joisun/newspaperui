'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from 'newspaperui-theme';
import { clampSpan, cx } from 'newspaperui-utils';
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

/**
 * Headline — 标题（High/Medium/Low 三档，自动映射 h1/h2/h3）
 *
 * - 根据 weight 自动选择语义标签（h1/h2/h3），也可通过 as 覆盖
 * - 字号、行高、字重由 visualWeights 数据驱动
 * - 支持 text-wrap: balance 自动平衡换行
 *
 * @example
 * <Headline weight="High" span={14}>
 *   Breaking: Major Event Unfolds
 * </Headline>
 */
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
