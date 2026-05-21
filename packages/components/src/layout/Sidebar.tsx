'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { clampSpan, cx } from 'newspaperui-utils';
import { useSection } from './Section';

export interface SidebarProps {
  span?: number;
  position?: 'left' | 'right';
  divider?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Sidebar — 侧边栏内容区（天气、股票、快讯摘要等）
 *
 * @example
 * <Section columns={24}>
 *   <Article span={18}>...</Article>
 *   <Sidebar span={6} position="right" divider>...</Sidebar>
 * </Section>
 */
export const Sidebar: React.FC<SidebarProps> = ({
  span, position = 'right', divider = false, className, style, children,
}) => {
  const section = useSection();
  const cols = span ? clampSpan(span, section.columns) : 6;
  const borderStyle: CSSProperties = divider
    ? position === 'left'
      ? { borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: 'var(--nui-space-4)' }
      : { borderLeft: '1px solid var(--nui-rule-hairline)', paddingLeft: 'var(--nui-space-4)' }
    : {};

  return (
    <aside
      className={cx('nui-sidebar', className)}
      style={{
        gridColumn: `span ${cols}`,
        ...borderStyle,
        ...style,
      }}
    >
      {children}
    </aside>
  );
};
