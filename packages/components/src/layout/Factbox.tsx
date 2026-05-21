'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { clampSpan, cx } from 'newspaperui-utils';
import { useSection } from './Section';

export interface FactboxProps {
  title?: string;
  span?: number;
  variant?: 'default' | 'highlight' | 'timeline';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Factbox — 嵌入正文的信息框
 *
 * 用于放关键数据、时间线、人物简介等结构化信息。
 * InDesign 中称为 "Anchored Object"。
 *
 * @example
 * <Factbox title="Key Facts" variant="highlight">
 *   <ul><li>GDP growth: 3.2%</li></ul>
 * </Factbox>
 */
export const Factbox: React.FC<FactboxProps> = ({
  title, span, variant = 'default', className, style, children,
}) => {
  const section = useSection();
  const cols = span ? clampSpan(span, section.columns) : undefined;

  const variantStyles: Record<string, CSSProperties> = {
    default: {
      border: '1px solid var(--nui-rule-hairline)',
      borderTop: '3px solid var(--nui-rule-decorative)',
      background: 'var(--nui-bg-surface)',
    },
    highlight: {
      border: '1px solid var(--nui-rule-hairline)',
      borderLeft: '4px solid var(--nui-accent-primary)',
      background: 'var(--nui-bg-surface)',
    },
    timeline: {
      border: '1px solid var(--nui-rule-hairline)',
      borderTop: '3px solid var(--nui-accent-ink-blue)',
      background: 'var(--nui-bg-surface)',
    },
  };

  return (
    <aside
      className={cx('nui-factbox nui-avoid-break', className)}
      style={{
        ...variantStyles[variant],
        padding: 'var(--nui-space-4)',
        gridColumn: cols ? `span ${cols}` : undefined,
        ...style,
      }}
    >
      {title && (
        <h4 style={{
          fontFamily: 'var(--font-family-meta)',
          fontSize: '11px',
          fontWeight: 700,
          fontVariantCaps: 'small-caps',
          letterSpacing: '0.08em',
          color: variant === 'highlight' ? 'var(--nui-accent-primary)' : 'var(--nui-text-primary)',
          margin: '0 0 var(--nui-space-3) 0',
          paddingBottom: 'var(--nui-space-2)',
          borderBottom: '1px solid var(--nui-rule-hairline)',
        }}>{title}</h4>
      )}
      <div style={{
        fontFamily: 'var(--font-family-body)',
        fontSize: '13px',
        lineHeight: 1.5,
        color: 'var(--nui-text-body)',
      }}>
        {children}
      </div>
    </aside>
  );
};
