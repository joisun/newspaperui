'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { clampSpan, cx } from '@newspaperui/utils';
import { useSection } from './Section';

export interface ArticleProps {
  span?: number;
  breakable?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Article — 文章块，grid-column span 跨栏
 *
 * - 通过 span 属性控制在 Section 栅格中占据的列数
 * - 自动 clamp 到父 Section 的最大列数
 * - 支持 print 分页控制（breakable）
 *
 * @example
 * <Article span={14} breakable={false}>
 *   <Headline weight="High">Breaking News</Headline>
 *   <BodyText columns={2}>...</BodyText>
 * </Article>
 */
export const Article: React.FC<ArticleProps> = ({
  span, breakable = true, className, style, children,
}) => {
  const section = useSection();
  const cols = span ? clampSpan(span, section.columns) : section.columns;
  return (
    <article
      className={cx('nui-article', className)}
      style={{
        gridColumn: `span ${cols}`,
        breakInside: breakable ? 'auto' : 'avoid',
        ...style,
      }}
      data-span={cols}
    >
      {children}
    </article>
  );
};
