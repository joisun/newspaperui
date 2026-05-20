'use client';
import React, { CSSProperties } from 'react';
import { clampSpan, cx } from '@newspaperui/utils';
import { useSection } from '../layout/Section';

export interface ImageProps {
  src: string;
  alt: string;
  span?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Image — 图片
 *
 * - 响应式全宽图片，自动适配栅格列宽
 * - 通过 span 控制在 Section 中占据的列数
 * - 必须提供 alt 属性以确保无障碍访问
 *
 * @example
 * <Image src="/photo.jpg" alt="City skyline" span={12} />
 */
export const Image: React.FC<ImageProps> = ({ src, alt, span, className, style }) => {
  const section = useSection();
  const cols = span ? clampSpan(span, section.columns) : undefined;
  return (
    <img
      src={src}
      alt={alt}
      className={cx('nui-image', className)}
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        gridColumn: cols ? `span ${cols}` : undefined,
        ...style,
      }}
    />
  );
};
