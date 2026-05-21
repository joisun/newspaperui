'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { cx } from 'newspaperui-utils';

export interface FooterProps {
  copyright?: string;
  edition?: string;
  links?: Array<{ label: string; href: string }>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Footer — 报纸页脚/版权信息区
 *
 * @example
 * <Footer copyright="© 2026 The Daily Chronicle" edition="Vol. CXLIX" />
 */
export const Footer: React.FC<FooterProps> = ({
  copyright, edition, links, className, style, children,
}) => (
  <footer
    className={cx('nui-footer nui-small-caps', className)}
    style={{
      gridColumn: '1 / -1',
      borderTop: '2px solid var(--nui-rule-decorative)',
      paddingTop: 'var(--nui-space-4)',
      marginTop: 'var(--nui-space-8)',
      fontFamily: 'var(--font-family-meta)',
      fontSize: '11px',
      letterSpacing: '0.06em',
      color: 'var(--nui-text-muted)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--nui-space-4)',
      ...style,
    }}
  >
    <div>
      {copyright && <span>{copyright}</span>}
      {edition && <span style={{ marginLeft: 'var(--nui-space-4)' }}>{edition}</span>}
    </div>
    {links && (
      <nav style={{ display: 'flex', gap: 'var(--nui-space-4)' }}>
        {links.map(link => (
          <a key={link.href} href={link.href} style={{ color: 'var(--nui-text-muted)', textDecoration: 'none' }}>
            {link.label}
          </a>
        ))}
      </nav>
    )}
    {children}
  </footer>
);
