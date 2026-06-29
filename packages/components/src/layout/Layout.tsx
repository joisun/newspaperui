'use client';
import React, { createContext, useContext, ReactNode, CSSProperties } from 'react';

export interface LayoutProps {
  columns?: number;        // 默认 24
  maxWidth?: string;       // 默认 '1280px'
  padding?: string;        // 默认 'var(--nui-space-6)'
  theme?: 'light' | 'dark';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

interface LayoutContextValue { columns: number; }
const LayoutContext = createContext<LayoutContextValue>({ columns: 24 });
export const useLayout = () => useContext(LayoutContext);

/**
 * Layout — 顶层容器，提供 24 列栅格 Context
 *
 * - 通过 LayoutContext 向子组件广播 columns 数量
 * - 支持 light/dark 主题切换（data-theme 属性）
 * - 居中布局，可配置 maxWidth 和 padding
 *
 * @example
 * <Layout columns={24} theme="light" maxWidth="1280px">
 *   <Section columns={24}>...</Section>
 * </Layout>
 */
export const Layout: React.FC<LayoutProps> = ({
  columns = 24, maxWidth = '1280px', padding = 'var(--nui-space-6)',
  theme, className, style, children,
}) => (
  <LayoutContext.Provider value={{ columns }}>
    <div
      data-theme={theme}
      className={className}
      style={{
        maxWidth,
        margin: '0 auto',
        padding,
        overflowX: 'hidden',
        background: 'var(--nui-bg-page)',
        color: 'var(--nui-text-body)',
        fontFamily: 'var(--font-family-body)',
        ...style,
      }}
    >
      {children}
    </div>
  </LayoutContext.Provider>
);
