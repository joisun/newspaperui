'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { cx } from '@newspaperui/utils';

export interface DatelineProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;          // e.g. "LONDON —"
}

/**
 * Dateline — 发稿地（Inter small-caps）
 *
 * - Inter 字体 + OpenType small-caps，标注新闻发稿地
 * - 通常置于正文首段开头，如 "LONDON —"
 * - 渲染为 inline span，可嵌入 BodyText 内
 *
 * @example
 * <BodyText>
 *   <Dateline>WASHINGTON —</Dateline> The president announced...
 * </BodyText>
 */
export const Dateline: React.FC<DatelineProps> = ({ className, style, children }) => {
  const config = visualWeights.Dateline.Standard!;
  return (
    <span
      className={cx('nui-dateline nui-small-caps', className)}
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
    </span>
  );
};
