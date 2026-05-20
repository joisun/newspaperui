'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { cx } from '@newspaperui/utils';

export interface KickerProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Kicker — 小帽体标签（朱红 accent）
 *
 * - Inter small-caps 字体，朱红色 accent 色
 * - 用于标题上方的栏目标签或分类标识
 * - 字号和间距由 visualWeights 数据驱动
 *
 * @example
 * <Kicker>EXCLUSIVE</Kicker>
 * <Headline weight="High">Major Discovery</Headline>
 */
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
