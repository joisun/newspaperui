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

/**
 * Video — 视频
 *
 * - 响应式视频播放器，支持 poster 封面图
 * - 可附带 caption 说明和 credit 来源
 * - 自动避免 print 分页断开
 *
 * @example
 * <Video
 *   src="/clip.mp4"
 *   poster="/poster.jpg"
 *   caption="Interview footage"
 *   credit="Video by Reuters"
 *   span={14}
 * />
 */
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
