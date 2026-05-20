'use client';
import React, { CSSProperties } from 'react';
import { cx } from '@newspaperui/utils';

export interface RuleProps {
  variant?: 'hairline' | 'double' | 'thick';
  orientation?: 'horizontal' | 'vertical';
  span?: number;          // 横向时占多少列 (1 / -1 全跨)
  className?: string;
  style?: CSSProperties;
}

/**
 * Rule — 分隔线（hairline/double/thick）
 *
 * - 支持水平和垂直方向
 * - hairline: 1px 细线；double: 双线装饰；thick: 3px 粗线
 * - 水平模式下可通过 span 控制跨栏宽度
 *
 * @example
 * <Rule variant="double" orientation="horizontal" />
 */
export const Rule: React.FC<RuleProps> = ({
  variant = 'hairline', orientation = 'horizontal', span, className, style,
}) => {
  const isHorizontal = orientation === 'horizontal';
  const baseStyle: CSSProperties = isHorizontal
    ? { width: '100%', border: 0, margin: 0 }
    : { height: '100%', width: '1px', border: 0, margin: 0 };

  const variantStyle: CSSProperties = (() => {
    if (variant === 'hairline')
      return isHorizontal
        ? { borderTop: '1px solid var(--nui-rule-hairline)' }
        : { background: 'var(--nui-rule-hairline)' };
    if (variant === 'thick')
      return isHorizontal
        ? { borderTop: '3px solid var(--nui-rule-decorative)' }
        : { width: '3px', background: 'var(--nui-rule-decorative)' };
    // double
    return isHorizontal
      ? {
          height: '6px',
          background:
            'linear-gradient(to bottom, var(--nui-rule-decorative) 0 1px, transparent 1px 4px, var(--nui-rule-decorative) 4px 6px)',
        }
      : {
          width: '6px',
          background:
            'linear-gradient(to right, var(--nui-rule-decorative) 0 1px, transparent 1px 4px, var(--nui-rule-decorative) 4px 6px)',
        };
  })();

  return (
    <hr
      className={cx('nui-rule', `nui-rule--${variant}`, className)}
      style={{
        ...baseStyle,
        ...variantStyle,
        gridColumn: isHorizontal && span ? `span ${span}` : isHorizontal ? '1 / -1' : undefined,
        ...style,
      }}
      aria-orientation={orientation}
    />
  );
};
