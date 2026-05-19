import React, { createContext, useContext } from 'react';
import { useLayout } from '../Layout/Layout';

export interface SectionProps {
  columns: number;
  breakable?: boolean;
  padding?: string;
  margin?: string;
  priority?: 'High' | 'Medium' | 'Low';
  children: React.ReactNode;
}

interface SectionContextValue {
  columns: number;
}

const SectionContext = createContext<SectionContextValue>({ columns: 24 });

export const useSection = () => useContext(SectionContext);

export const Section: React.FC<SectionProps> = ({
  columns,
  breakable = true,
  padding,
  margin,
  priority = 'Medium',
  children,
}) => {
  const layout = useLayout();

  const effectiveColumns = Math.min(Math.max(1, columns), layout.columns);
  if (columns !== effectiveColumns) {
    console.warn(`[Section] columns=${columns} exceeds layout.columns=${layout.columns}, clamped to ${effectiveColumns}`);
  }

  return (
    <SectionContext.Provider value={{ columns: effectiveColumns }}>
      <section
        className={`newspaper-section priority-${priority.toLowerCase()}`}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${effectiveColumns}, 1fr)`,
          gap: 'var(--nui-gutter, 1rem)',
          padding,
          margin,
          breakInside: breakable ? 'auto' : 'avoid',
        }}
        data-columns={columns}
      >
        {children}
      </section>
    </SectionContext.Provider>
  );
};
