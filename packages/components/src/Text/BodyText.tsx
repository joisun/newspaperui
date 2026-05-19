'use client';
import React, { ReactNode, CSSProperties } from 'react';
import { visualWeights, resolveFontSize } from '@newspaperui/theme';
import { clampSpan, cx } from '@newspaperui/utils';
import { useSection } from '../layout/Section';

export interface BodyTextProps {
  weight?: 'High' | 'Medium' | 'Low';
  span?: number;
  columns?: 1 | 2 | 3 | 4;     // 多栏文字流
  columnWidth?: string;         // 默认 '18em'
  columnFill?: 'auto' | 'balance';
  dropCap?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export const BodyText: React.FC<BodyTextProps> = ({
  weight = 'Medium', span, columns = 1, columnWidth = '18em',
  columnFill = 'auto', dropCap = false,
  className, style, children,
}) => {
  const section = useSection();
  const config = visualWeights.BodyText[weight]!;
  const cols = span ? clampSpan(span, section.columns) : undefined;
  const useColumns = columns >= 2;

  return (
    <div
      className={cx(
        'nui-bodytext',
        'nui-paragraph-flow',
        'nui-osf',
        'nui-hanging-punctuation',
        useColumns && 'nui-column-rule',
        dropCap && 'nui-drop-cap',
        className,
      )}
      style={{
        fontFamily: `var(${config.fontFamily})`,
        fontSize: resolveFontSize(config.fontSize),
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        color: `var(${config.color})`,
        margin: config.margin,
        gridColumn: cols ? `span ${cols}` : undefined,
        columnCount: useColumns ? columns : undefined,
        columnWidth: useColumns ? columnWidth : undefined,
        columnGap: useColumns ? 'var(--nui-gutter)' : undefined,
        columnFill: useColumns ? columnFill : undefined,
        ...style,
      }}
      data-weight={weight}
      data-columns={columns}
    >
      {children}
    </div>
  );
};
