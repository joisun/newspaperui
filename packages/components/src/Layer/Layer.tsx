import React from 'react';

export interface LayerProps {
  position: 'absolute' | 'fixed' | 'sticky';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
  children: React.ReactNode;
}

export const Layer: React.FC<LayerProps> = ({
  position,
  top,
  left,
  right,
  bottom,
  zIndex = 10,
  children,
}) => {
  return (
    <div
      className="newspaper-layer"
      style={{
        position,
        top,
        left,
        right,
        bottom,
        zIndex,
      }}
    >
      {children}
    </div>
  );
};
