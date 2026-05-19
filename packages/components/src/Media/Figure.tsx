import React from 'react';
import { calculateSpanWidth } from '@newspaperui/utils';
import { useSection } from '../Section/Section';
import { Caption } from '../Text/Caption';

export interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  span?: number;
  children?: React.ReactNode;
}

export const Figure: React.FC<FigureProps> = ({
  src,
  alt,
  caption,
  span = 1,
  children,
}) => {
  const section = useSection();
  const width = calculateSpanWidth(span, section.columns);

  return (
    <figure
      className="newspaper-figure"
      style={{ width, margin: 0 }}
      data-span={span}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
      {caption && <Caption>{caption}</Caption>}
      {children}
    </figure>
  );
};
