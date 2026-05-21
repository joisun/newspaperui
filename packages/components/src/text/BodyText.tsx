'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from 'newspaperui-theme';
import { clampSpan, cx } from 'newspaperui-utils';
import { useSection } from '../layout/Section';

export interface BodyTextProps {
  weight?: 'High' | 'Medium' | 'Low';
  span?: number;
  columns?: 1 | 2 | 3 | 4;     // 多栏文字流
  columnWidth?: string;         // 可选：显式指定每栏目标宽度（与 columnCount 配合）
  columnFill?: 'auto' | 'balance';  // 默认 balance（平均分布到各栏）
  dropCap?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * BodyText — 正文（核心：columns 多栏文字流 + dropCap 首字下沉）
 *
 * - CSS Multi-column 实现真实报纸多栏排版（1-4 栏）
 * - dropCap 启用 ::first-letter 首字下沉效果
 * - 自动应用 old-style figures、hanging punctuation、column-rule hairline
 * - columnFill 默认 'balance'，浏览器自动均分内容到各栏（无需指定 height）
 *
 * @example
 * <BodyText columns={3} dropCap>
 *   <p>The story begins with a dramatic opening paragraph...</p>
 * </BodyText>
 */
export const BodyText: React.FC<BodyTextProps> = ({
  weight = 'Medium', span, columns = 1, columnWidth,
  columnFill = 'balance', dropCap = false,
  className, style, children,
}) => {
  const section = useSection();
  const config = visualWeights.BodyText[weight]!;
  const cols = span ? clampSpan(span, section.columns) : undefined;
  const useColumns = columns >= 2;

  return (
    <div
      className={cx(
        'nui-bodytext',
        'nui-paragraph-flow',
        'nui-osf',
        'nui-hanging-punctuation',
        useColumns && 'nui-column-rule',
        dropCap && 'nui-drop-cap',
        className,
      )}
      style={{
        fontFamily: `var(${config.fontFamily})`,
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        color: `var(${config.color})`,
        margin: config.margin,
        gridColumn: cols ? `span ${cols}` : undefined,
        columnCount: useColumns ? columns : undefined,
        columnWidth: useColumns ? columnWidth : undefined,
        columnGap: useColumns ? 'var(--nui-gutter)' : undefined,
        columnFill: useColumns ? columnFill : undefined,
        ...style,
      }}
      data-weight={weight}
      data-columns={columns}
    >
      {children}
    </div>
  );
};
