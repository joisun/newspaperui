'use client';
import React, { CSSProperties } from 'react';
import { cx } from 'newspaperui-utils';

export interface JumpLineProps {
  direction: 'to' | 'from';    // 'to' = "续转第X版", 'from' = "接第X版"
  page: string;                 // e.g. "A6"
  className?: string;
  style?: CSSProperties;
}

/**
 * JumpLine — 跨版续转标注
 *
 * 报纸文章从一个版面跳转到另一个版面时的标注。
 *
 * @example
 * <JumpLine direction="to" page="A6" />
 * <JumpLine direction="from" page="A1" />
 */
export const JumpLine: React.FC<JumpLineProps> = ({
  direction, page, className, style,
}) => (
  <div
    className={cx('nui-jump-line nui-small-caps', className)}
    style={{
      fontFamily: 'var(--font-family-meta)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: 'var(--nui-text-muted)',
      textAlign: direction === 'to' ? 'right' : 'left',
      marginTop: direction === 'to' ? 'var(--nui-space-3)' : '0',
      marginBottom: direction === 'from' ? 'var(--nui-space-3)' : '0',
      fontStyle: 'italic',
      ...style,
    }}
  >
    {direction === 'to' ? `Continued on ${page} →` : `← Continued from ${page}`}
  </div>
);
