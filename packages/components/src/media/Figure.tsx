'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { clampSpan, cx } from 'newspaperui-utils';
import { useSection } from '../layout/Section';
import { Caption } from '../text/Caption';

export interface FigureProps {
  src?: string;
  alt?: string;
  caption?: string;
  credit?: string;
  span?: number;
  loading?: 'lazy' | 'eager';
  aspectRatio?: string;
  sizes?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Figure — 图文组合（img + Caption）
 *
 * - 将图片与 Caption 组合为语义化 figure 元素
 * - 支持 caption 文字说明和 credit 来源标注
 * - 自动避免 print 分页断开（break-inside: avoid）
 * - 支持 children 自定义内容替代 img
 *
 * @example
 * <Figure
 *   src="/photo.jpg"
 *   alt="City skyline"
 *   caption="Downtown at dusk"
 *   credit="Photo by John"
 *   span={10}
 *   aspectRatio="16/9"
 * />
 */
export const Figure: React.FC<FigureProps> = ({
  src, alt, caption, credit, span, loading, aspectRatio, sizes,
  className, style, children,
}) => {
  const section = useSection();
  const cols = span ? clampSpan(span, section.columns) : undefined;
  return (
    <figure
      className={cx('nui-figure nui-avoid-break', className)}
      style={{
        margin: 0,
        gridColumn: cols ? `span ${cols}` : undefined,
        ...style,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? ''}
          loading={loading ?? 'lazy'}
          sizes={sizes}
          style={{ display: 'block', width: '100%', height: 'auto', aspectRatio }}
        />
      ) : children}
      {(caption || credit) && <Caption credit={credit}>{caption}</Caption>}
    </figure>
  );
};
