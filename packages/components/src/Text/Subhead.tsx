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

/**
 * Subhead — 副标题（italic 衬线）
 *
 * - 默认 italic 衬线风格，视觉层级低于 Headline
 * - 支持 High/Medium 两档 weight
 * - 可通过 as 指定渲染标签（h2/h3/h4/p）
 *
 * @example
 * <Subhead weight="Medium" span={14}>
 *   A deeper look into the story behind the headlines
 * </Subhead>
 */
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
