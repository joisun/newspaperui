'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { cx } from '@newspaperui/utils';

export interface CaptionProps {
  credit?: string;              // e.g. "Photograph by Jane Doe"
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Caption — 图片说明（italic + credit small-caps）
 *
 * - 主体文字为 italic 衬线，描述图片内容
 * - credit 部分以 small-caps 显示摄影师/来源信息
 * - 渲染为 figcaption，语义化配合 Figure 使用
 *
 * @example
 * <Caption credit="Photograph by Jane Doe">
 *   A view of the city skyline at sunset.
 * </Caption>
 */
export const Caption: React.FC<CaptionProps> = ({ credit, className, style, children }) => {
  const config = visualWeights.Caption.Standard!;
  return (
    <figcaption
      className={cx('nui-caption nui-osf', className)}
      style={{
        fontFamily: `var(${config.fontFamily})`,
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        fontStyle: config.fontStyle,
        lineHeight: config.lineHeight,
        color: `var(${config.color})`,
        margin: config.margin,
        ...style,
      }}
    >
      {children}
      {credit && (
        <span
          className="nui-small-caps"
          style={{
            display: 'inline-block',
            marginLeft: 'var(--nui-space-2)',
            fontSize: '11px',
            color: 'var(--nui-text-muted)',
            fontStyle: 'normal',
            letterSpacing: '0.06em',
          }}
        >
          {credit}
        </span>
      )}
    </figcaption>
  );
};
