'use client';
import React, { ReactNode, CSSProperties } from 'react';

export interface LayerProps {
  position?: 'absolute' | 'fixed' | 'sticky';
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  zIndex?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export const Layer: React.FC<LayerProps> = ({
  position = 'absolute', top, left, right, bottom, zIndex,
  className, style, children,
}) => (
  <div
    className={className}
    style={{ position, top, left, right, bottom, zIndex, ...style }}
  >
    {children}
  </div>
);
