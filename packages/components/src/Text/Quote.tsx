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

/**
 * Quote — 引用（block 左缩进 / inline italic）
 *
 * - block 模式：渲染为 blockquote，支持 cite 属性和 span 跨栏
 * - inline 模式：渲染为 em 标签，适合行内引用
 * - 字号和样式由 visualWeights 数据驱动
 *
 * @example
 * <Quote variant="block" weight="High" cite="https://source.com">
 *   "The truth is rarely pure and never simple."
 * </Quote>
 */
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
