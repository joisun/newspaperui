'use client';
import React, { CSSProperties } from 'react';
import { cx } from 'newspaperui-utils';

export interface IndexItem {
  page: string;       // "A2"
  title: string;      // "经济" / "National"
  headline?: string;  // optional headline preview
}

export interface IndexBoxProps {
  title?: string;
  items: IndexItem[];
  className?: string;
  style?: CSSProperties;
}

/**
 * IndexBox — 头版内容索引框
 *
 * 告诉读者今天各版有什么内容。通常放在头版右上角或底部。
 *
 * @example
 * <IndexBox title="Inside" items={[
 *   { page: 'A2', title: 'Economy', headline: 'Markets rally...' },
 *   { page: 'B1', title: 'Sports', headline: 'Championship final...' },
 * ]} />
 */
export const IndexBox: React.FC<IndexBoxProps> = ({
  title = 'Inside', items, className, style,
}) => (
  <div
    className={cx('nui-index-box', className)}
    style={{
      border: '1px solid var(--nui-rule-hairline)',
      borderTop: '3px solid var(--nui-rule-decorative)',
      padding: 'var(--nui-space-3)',
      background: 'var(--nui-bg-surface)',
      ...style,
    }}
  >
    <h4 style={{
      fontFamily: 'var(--font-family-meta)',
      fontSize: '11px',
      fontWeight: 700,
      fontVariantCaps: 'small-caps',
      letterSpacing: '0.08em',
      color: 'var(--nui-accent-primary)',
      margin: '0 0 var(--nui-space-2) 0',
      paddingBottom: 'var(--nui-space-2)',
      borderBottom: '1px solid var(--nui-rule-hairline)',
    }}>{title}</h4>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{
          display: 'flex',
          gap: 'var(--nui-space-2)',
          padding: 'var(--nui-space-1) 0',
          borderBottom: i < items.length - 1 ? '1px solid var(--nui-rule-hairline)' : 'none',
          alignItems: 'baseline',
        }}>
          <span style={{
            fontFamily: 'var(--font-family-meta)',
            fontSize: '10px',
            fontWeight: 700,
            color: 'var(--nui-text-secondary)',
            flexShrink: 0,
            width: '24px',
          }}>{item.page}</span>
          <span style={{
            fontFamily: 'var(--font-family-meta)',
            fontSize: '10px',
            fontVariantCaps: 'small-caps',
            letterSpacing: '0.06em',
            color: 'var(--nui-text-muted)',
            flexShrink: 0,
            width: '48px',
          }}>{item.title}</span>
          {item.headline && (
            <span style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: '12px',
              color: 'var(--nui-text-body)',
              lineHeight: 1.3,
              flex: 1,
            }}>{item.headline}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);
