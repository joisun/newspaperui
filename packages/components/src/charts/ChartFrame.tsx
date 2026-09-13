'use client';

import React, { CSSProperties, ReactNode, useId } from 'react';
import { clampSpan, cx } from 'newspaperui-utils';
import { useSection } from '../layout/Section';

export interface ChartFrameProps {
  title: string;
  description?: string;
  source?: ReactNode;
  sourceLabel?: string;
  note?: ReactNode;
  number?: string;
  as?: 'h2' | 'h3' | 'h4';
  span?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** Editorial title, plot and attribution in one semantic figure. */
export const ChartFrame: React.FC<ChartFrameProps> = ({
  title, description, source, sourceLabel = 'Source', note, number,
  as: Heading = 'h3', span, className, style, children,
}) => {
  const id = useId();
  const section = useSection();
  return (
    <figure className={cx('nui-chart-frame nui-avoid-break', className)} aria-labelledby={id}
      style={{ gridColumn: span ? `span ${clampSpan(span, section.columns)}` : undefined, ...style }}>
      <header className="nui-chart-header">
        {number && <span className="nui-chart-number">{number}</span>}
        <Heading id={id} className="nui-chart-title">{title}</Heading>
        {description && <p className="nui-chart-description">{description}</p>}
      </header>
      {children}
      {(source || note) && <figcaption className="nui-chart-caption">
        {source && <div>{sourceLabel}: {source}</div>}
        {note && <div>{note}</div>}
      </figcaption>}
    </figure>
  );
};
