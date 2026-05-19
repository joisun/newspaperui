'use client';
import React, { CSSProperties } from 'react';
import { clampSpan, cx } from '@newspaperui/utils';
import { useSection } from '../layout/Section';
import { Caption } from '../text/Caption';

export interface VideoProps {
  src: string;
  poster?: string;
  caption?: string;
  credit?: string;
  span?: number;
  controls?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const Video: React.FC<VideoProps> = ({
  src, poster, caption, credit, span, controls = true, className, style,
}) => {
  const section = useSection();
  const cols = span ? clampSpan(span, section.columns) : undefined;
  return (
    <figure
      className={cx('nui-video nui-avoid-break', className)}
      style={{ margin: 0, gridColumn: cols ? `span ${cols}` : undefined, ...style }}
    >
      <video src={src} poster={poster} controls={controls} style={{ width: '100%', height: 'auto' }} />
      {(caption || credit) && <Caption credit={credit}>{caption}</Caption>}
    </figure>
  );
};
