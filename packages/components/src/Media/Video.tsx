import React from 'react';
import { calculateSpanWidth } from '@newspaperui/utils';
import { useSection } from '../Section/Section';
import { Caption } from '../Text/Caption';

export interface VideoProps {
  src: string;
  poster?: string;
  span?: number;
  caption?: string;
}

export const Video: React.FC<VideoProps> = ({
  src,
  poster,
  span = 1,
  caption,
}) => {
  const section = useSection();
  const width = calculateSpanWidth(span, section.columns);

  return (
    <div
      className="newspaper-video"
      style={{ width }}
      data-span={span}
    >
      <video
        src={src}
        poster={poster}
        controls
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
