'use client';
import React, { createContext, useContext, ReactNode, CSSProperties } from 'react';
import { clampSpan, cx } from '@newspaperui/utils';
import { useLayout } from './Layout';

export interface SectionProps {
  columns: number;          // section 内部的栅格列数 (≤ layout.columns)
  gap?: string;             // 默认 'var(--nui-gutter)'
  breakable?: boolean;      // 是否允许 print 分页断开，默认 true
  divider?: 'none' | 'top' | 'bottom' | 'both'; // hairline 分隔
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

interface SectionContextValue { columns: number; }
const SectionContext = createContext<SectionContextValue>({ columns: 24 });
export const useSection = () => useContext(SectionContext);

/**
 * Section — CSS Grid 栅格区域
 *
 * - 内部创建独立的 grid 容器，列数受父 Layout 约束
 * - 支持 hairline divider 分隔线（top/bottom/both）
 * - 通过 SectionContext 向子 Article 广播当前列数
 *
 * @example
 * <Section columns={24} gap="var(--nui-gutter)" divider="bottom">
 *   <Article span={14}>...</Article>
 *   <Article span={10}>...</Article>
 * </Section>
 */
export const Section: React.FC<SectionProps> = ({
  columns, gap = 'var(--nui-gutter)', breakable = true, divider = 'none',
  className, style, children,
}) => {
  const layout = useLayout();
  const cols = clampSpan(columns, layout.columns);

  const dividerStyle: CSSProperties = {};
  if (divider === 'top' || divider === 'both')
    dividerStyle.borderTop = '1px solid var(--nui-rule-hairline)';
  if (divider === 'bottom' || divider === 'both')
    dividerStyle.borderBottom = '1px solid var(--nui-rule-hairline)';

  return (
    <SectionContext.Provider value={{ columns: cols }}>
      <section
        className={cx('nui-section', className)}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap,
          breakInside: breakable ? 'auto' : 'avoid',
          ...dividerStyle,
          paddingTop: divider === 'top' || divider === 'both' ? 'var(--nui-space-4)' : undefined,
          paddingBottom: divider === 'bottom' || divider === 'both' ? 'var(--nui-space-4)' : undefined,
          ...style,
        }}
        data-columns={cols}
      >
        {children}
      </section>
    </SectionContext.Provider>
  );
};
