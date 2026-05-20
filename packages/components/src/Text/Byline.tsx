'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { cx } from '@newspaperui/utils';

export interface BylineProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;          // e.g. "BY ALICE SMITH"
}

/**
 * Byline — 署名（Inter small-caps）
 *
 * - Inter 字体 + OpenType small-caps 特性
 * - 用于文章作者署名，通常置于标题下方
 * - 字号、字重、间距由 visualWeights 数据驱动
 *
 * @example
 * <Byline>BY ALICE SMITH</Byline>
 */
export const Byline: React.FC<BylineProps> = ({ className, style, children }) => {
  const config = visualWeights.Byline.Standard!;
  return (
    <div
      className={cx('nui-byline nui-small-caps', className)}
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
