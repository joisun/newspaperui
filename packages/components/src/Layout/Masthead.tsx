'use client';
import React from 'react';
import { cx } from '@newspaperui/utils';

export interface MastheadProps {
  title: string;
  kicker?: string;
  edition?: string;
  date?: string;
  price?: string;
  variant?: 'classic' | 'blackletter' | 'modern';
  className?: string;
}

export const Masthead: React.FC<MastheadProps> = ({
  title, kicker, edition, date, price, variant = 'classic', className,
}) => {
  const fontFamily =
    variant === 'blackletter'
      ? 'var(--font-family-blackletter)'
      : 'var(--font-family-masthead)';
  const align = variant === 'modern' ? 'left' : 'center';

  return (
    <header
      className={cx('nui-masthead', `nui-masthead--${variant}`, className)}
      style={{
        gridColumn: '1 / -1',
        textAlign: align,
        color: 'var(--nui-text-primary)',
      }}
    >
      <div className="nui-masthead-rule-top" />
      {kicker && (
        <div
          className="nui-small-caps"
          style={{
            fontSize: '12px',
            color: 'var(--nui-accent-primary)',
            margin: 'var(--nui-space-2) 0',
            letterSpacing: '0.1em',
          }}
        >
          {kicker}
        </div>
      )}
      <h1
        style={{
          fontFamily,
          fontWeight: 700,
          fontSize: variant === 'modern' ? 'clamp(40px, 6vw, 72px)' : 'clamp(48px, 8vw, 96px)',
          lineHeight: 1.0,
          letterSpacing: variant === 'blackletter' ? '0' : '0.02em',
          margin: 'var(--nui-space-2) 0 var(--nui-space-3) 0',
        }}
      >
        {title}
      </h1>
      {(edition || date || price) && (
        <div
          className="nui-small-caps"
          style={{
            display: 'flex',
            justifyContent: align === 'left' ? 'flex-start' : 'space-between',
            gap: 'var(--nui-space-6)',
            fontSize: '11px',
            color: 'var(--nui-text-muted)',
            padding: 'var(--nui-space-2) 0',
            margin: 0,
            letterSpacing: '0.08em',
          }}
        >
          {edition && <span>{edition}</span>}
          {date && <span>{date}</span>}
          {price && <span>{price}</span>}
        </div>
      )}
      <div className="nui-masthead-rule-bottom" />
    </header>
  );
};
