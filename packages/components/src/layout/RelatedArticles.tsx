'use client';
import React, { CSSProperties } from 'react';
import { cx } from 'newspaperui-utils';

export interface RelatedArticle {
  title: string;
  href: string;
  category?: string;
}

export interface RelatedArticlesProps {
  title?: string;
  articles: RelatedArticle[];
  className?: string;
  style?: CSSProperties;
}

/**
 * RelatedArticles — "See Also" / "相关报道" 列表
 *
 * @example
 * <RelatedArticles title="Related" articles={[
 *   { title: 'Climate bill passes', href: '/article/1', category: 'Politics' }
 * ]} />
 */
export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  title = 'Related', articles, className, style,
}) => (
  <aside
    className={cx('nui-related', className)}
    style={{
      borderTop: '2px solid var(--nui-rule-decorative)',
      paddingTop: 'var(--nui-space-4)',
      marginTop: 'var(--nui-space-6)',
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
      margin: '0 0 var(--nui-space-3) 0',
    }}>{title}</h4>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {articles.map((article, i) => (
        <li key={i} style={{
          borderBottom: '1px solid var(--nui-rule-hairline)',
          padding: 'var(--nui-space-2) 0',
        }}>
          {article.category && (
            <span style={{
              fontFamily: 'var(--font-family-meta)',
              fontSize: '10px',
              fontVariantCaps: 'small-caps',
              letterSpacing: '0.06em',
              color: 'var(--nui-text-muted)',
              marginRight: 'var(--nui-space-2)',
            }}>{article.category}</span>
          )}
          <a href={article.href} style={{
            fontFamily: 'var(--font-family-headline)',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.3,
            color: 'var(--nui-text-primary)',
            textDecoration: 'none',
          }}>{article.title}</a>
        </li>
      ))}
    </ul>
  </aside>
);
