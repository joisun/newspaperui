'use client';
import React, { CSSProperties } from 'react';
import { cx } from 'newspaperui-utils';

export interface FolioProps {
  page: string;           // e.g. "A2"
  section?: string;       // e.g. "要闻" / "National"
  date?: string;          // e.g. "2026年5月21日"
  publication?: string;   // e.g. "人民周报"
  align?: 'left' | 'center' | 'between';
  className?: string;
  style?: CSSProperties;
}

/**
 * Folio — 版面页眉（页码 + 版名 + 日期）
 *
 * 报纸每个内页顶部的标识条，告诉读者当前在哪个版面。
 *
 * @example
 * <Folio page="A2" section="要闻" date="2026年5月21日" publication="人民周报" />
 */
export const Folio: React.FC<FolioProps> = ({
  page, section, date, publication, align = 'between', className, style,
}) => (
  <div
    className={cx('nui-folio nui-small-caps', className)}
    style={{
      gridColumn: '1 / -1',
      display: 'flex',
      justifyContent: align === 'between' ? 'space-between' : align === 'center' ? 'center' : 'flex-start',
      alignItems: 'baseline',
      gap: 'var(--nui-space-4)',
      fontFamily: 'var(--font-family-meta)',
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: 'var(--nui-text-muted)',
      borderBottom: '1px solid var(--nui-rule-hairline)',
      paddingBottom: 'var(--nui-space-2)',
      marginBottom: 'var(--nui-space-4)',
      ...style,
    }}
  >
    <span style={{ fontWeight: 700, color: 'var(--nui-text-secondary)' }}>{page}</span>
    {section && <span>{section}</span>}
    {publication && <span>{publication}</span>}
    {date && <span>{date}</span>}
  </div>
);
