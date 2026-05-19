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
