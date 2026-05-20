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

/**
 * Layer — 浮动层（absolute/fixed/sticky）
 *
 * - 支持 absolute、fixed、sticky 三种定位模式
 * - 可精确控制 top/left/right/bottom/zIndex
 * - 用于叠加装饰元素、浮动导航或 sticky 侧栏
 *
 * @example
 * <Layer position="sticky" top={0} zIndex={100}>
 *   <nav>Sticky Navigation</nav>
 * </Layer>
 */
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
