'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { cx } from 'newspaperui-utils';

export interface BreakingNewsBannerProps {
  label?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * BreakingNewsBanner — 突发新闻横幅
 *
 * @example
 * <BreakingNewsBanner label="BREAKING">
 *   Major earthquake strikes coastal region
 * </BreakingNewsBanner>
 */
export const BreakingNewsBanner: React.FC<BreakingNewsBannerProps> = ({
  label = 'BREAKING', className, style, children,
}) => (
  <div
    className={cx('nui-breaking', className)}
    role="alert"
    style={{
      gridColumn: '1 / -1',
      background: 'var(--nui-accent-primary)',
      color: 'var(--nui-bg-page)',
      padding: 'var(--nui-space-3) var(--nui-space-6)',
      fontFamily: 'var(--font-family-meta)',
      fontSize: '13px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--nui-space-4)',
      ...style,
    }}
  >
    <span style={{
      fontVariantCaps: 'small-caps',
      letterSpacing: '0.1em',
      fontWeight: 700,
      flexShrink: 0,
    }}>{label}</span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);
