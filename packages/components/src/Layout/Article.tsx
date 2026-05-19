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
