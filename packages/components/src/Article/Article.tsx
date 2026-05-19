import React from 'react';
import { useSection } from '../Section/Section';
export interface ArticleProps {
  span: number;
  priority?: 'High' | 'Medium' | 'Low';
  breakable?: boolean;
  children: React.ReactNode;
}

export const Article: React.FC<ArticleProps> = ({
  span,
  priority = 'Medium',
  breakable = true,
  children,
}) => {
  const section = useSection();

  const effectiveSpan = Math.min(Math.max(1, span), section.columns);
  if (span !== effectiveSpan) {
    console.warn(`[Article] span=${span} exceeds section.columns=${section.columns}, clamped to ${effectiveSpan}`);
  }

  return (
    <article
      className={`newspaper-article priority-${priority.toLowerCase()}`}
      style={{
        gridColumn: `span ${effectiveSpan}`,
        breakInside: breakable ? 'auto' : 'avoid',
      }}
      data-span={span}
    >
      {children}
    </article>
  );
};
