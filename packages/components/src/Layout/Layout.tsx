import React, { createContext, useContext } from 'react';

export interface LayoutProps {
  maxWidth?: string;
  padding?: string;
  gutter?: number;
  theme?: 'light' | 'dark';
  columns?: number;
  children: React.ReactNode;
}

interface LayoutContextValue {
  columns: number;
  gutter: number;
}

const LayoutContext = createContext<LayoutContextValue>({
  columns: 24,
  gutter: 16,
});

export const useLayout = () => useContext(LayoutContext);

export const Layout: React.FC<LayoutProps> = ({
  maxWidth = '1440px',
  padding = '1rem',
  gutter = 16,
  theme = 'light',
  columns = 24,
  children,
}) => {
  return (
    <LayoutContext.Provider value={{ columns, gutter }}>
      <div
        className={`newspaper-layout ${theme === 'dark' ? 'dark' : ''}`}
        style={{
          maxWidth,
          padding,
          margin: '0 auto',
          '--gutter': `${gutter}px`,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </LayoutContext.Provider>
  );
};
