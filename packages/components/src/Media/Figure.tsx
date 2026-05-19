'use client';
import React, { CSSProperties } from 'react';
import { clampSpan, cx } from '@newspaperui/utils';
import { useSection } from '../layout/Section';
import { Caption } from '../text/Caption';

export interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  span?: number;
  className?: string;
  style?: CSSProperties;
}

export const Figure: React.FC<FigureProps> = ({
  src, alt, caption, credit, span, className, style,
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
      <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: 'auto' }} />
      {(caption || credit) && <Caption credit={credit}>{caption}</Caption>}
    </figure>
  );
};
