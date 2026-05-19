import React from 'react';
import { calculateSpanWidth } from '@newspaperui/utils';
import { useSection } from '../Section/Section';
import { Caption } from '../Text/Caption';

export interface ImageProps {
  src: string;
  alt: string;
  span?: number;
  caption?: string;
  priority?: 'High' | 'Medium' | 'Low';
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  span = 1,
  caption,
  priority = 'Medium',
}) => {
  const section = useSection();
  const width = calculateSpanWidth(span, section.columns);

  return (
    <div
      className={`newspaper-image priority-${priority.toLowerCase()}`}
      style={{ width }}
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
    </div>
  );
};
