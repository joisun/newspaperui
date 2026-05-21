'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from 'newspaperui-theme';
import { clampSpan, cx } from 'newspaperui-utils';
import { useSection } from '../layout/Section';

export interface PullQuoteProps {
  weight?: 'High' | 'Medium';
  span?: number;
  spanAllColumns?: boolean;     // 在多栏 BodyText 内跨所有栏
  author?: string;
  align?: 'left' | 'center';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * PullQuote — 拉引（上下双 hairline + Display 字体）
 *
 * - 上下 hairline 边框包裹，Display 字体突出引文
 * - 支持 spanAllColumns 跨越多栏 BodyText 的所有列
 * - 可附带 author 署名（small-caps 样式）
 *
 * @example
 * <PullQuote weight="High" author="Jane Doe" align="center">
 *   "Design is not just what it looks like — design is how it works."
 * </PullQuote>
 */
export const PullQuote: React.FC<PullQuoteProps> = ({
  weight = 'High', span, spanAllColumns = false, author, align = 'left',
  className, style, children,
}) => {
  const section = useSection();
  const config = visualWeights.PullQuote[weight]!;
  const cols = span ? clampSpan(span, section.columns) : undefined;
  return (
    <aside
      className={cx(
        'nui-pullquote nui-avoid-break nui-tnum',
        spanAllColumns && 'nui-span-all-columns',
        className,
      )}
      style={{
        margin: config.margin,
        padding: 'var(--nui-space-4) 0',
        borderTop: '1px solid var(--nui-rule-hairline)',
        borderBottom: '1px solid var(--nui-rule-hairline)',
        textAlign: align,
        gridColumn: cols ? `span ${cols}` : undefined,
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: `var(${config.fontFamily})`,
          fontSize: resolveFontSize(config.fontSize),
          fontWeight: config.fontWeight,
          lineHeight: config.lineHeight,
          letterSpacing: config.letterSpacing,
          color: `var(${config.color})`,
          margin: 0,
          textWrap: 'balance' as CSSProperties['textWrap'],
        }}
      >
        {children}
      </p>
      {author && (
        <footer
          className="nui-small-caps"
          style={{
            marginTop: 'var(--nui-space-2)',
            fontSize: '11px',
            color: 'var(--nui-text-muted)',
            letterSpacing: '0.08em',
          }}
        >
          — {author}
        </footer>
      )}
    </aside>
  );
};
