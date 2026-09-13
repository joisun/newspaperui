'use client';

import React from 'react';
import { cx } from 'newspaperui-utils';
import { accent, ChartDatum, ChartMessage, ChartProps, ChartReferenceLine, chartText, DataTable, domain, ink, rule, scale, secondaryInk, shortLabel, ticks, useChartWidth, valueFormatter } from './shared';

export interface BarChartProps extends ChartProps {
  data: ChartDatum[];
  orientation?: 'horizontal' | 'vertical';
  referenceLine?: ChartReferenceLine;
}

export const BarChart: React.FC<BarChartProps> = ({
  data, label, unit, locale, formatValue, orientation = 'horizontal', referenceLine, className, style,
}) => {
  const { ref, width } = useChartWidth();
  const text = chartText(locale);
  const format = valueFormatter(locale, formatValue);
  const invalid = data.some(d => !Number.isFinite(d.value)) || (referenceLine && !Number.isFinite(referenceLine.value));
  const [min, max] = domain(invalid ? [] : [...data.map(d => d.value), ...(referenceLine ? [referenceLine.value] : [])]);
  const horizontal = orientation === 'horizontal';
  const left = horizontal ? 8 : 64;
  const right = width - 16;
  const bottom = horizontal ? data.length * 54 + 8 : 224;
  const height = horizontal ? bottom + 32 : 292;
  const position = (value: number) => scale(value, min, max, horizontal ? left : bottom, horizontal ? right : 30);
  const baseline = position(0);
  const step = (right - left) / Math.max(1, data.length);
  const columnWidth = Math.min(48, step * 0.5);
  const hasHighlight = data.some(d => d.highlight);

  return (
    <div ref={ref} className={cx('nui-chart nui-bar-chart', className)} style={style}>
      {unit && <div className="nui-chart-unit">{unit}</div>}
      {invalid ? <ChartMessage>{text.invalid}</ChartMessage> : !data.length ? <ChartMessage>{text.empty}</ChartMessage> : <>
        <svg className="nui-chart-svg" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label}>
          <title>{label}</title>
          {ticks(min, max, width < 400 ? 2 : 4).map((tick, i, all) => <g key={i}>
            {!horizontal && <line x1={left} x2={right} y1={position(tick)} y2={position(tick)} stroke={rule} strokeWidth={0.6} />}
            <text x={horizontal ? position(tick) : left - 8} y={horizontal ? bottom + 22 : position(tick) + 4}
              textAnchor={horizontal ? (i === 0 ? 'start' : i === all.length - 1 ? 'end' : 'middle') : 'end'}
              className="nui-chart-tick">{shortLabel(format(tick), horizontal ? width / all.length : 60)}<title>{format(tick)}</title></text>
          </g>)}
          {data.map((datum, i) => {
            const value = position(datum.value);
            const x = horizontal ? Math.min(baseline, value) : left + step * (i + 0.5) - columnWidth / 2;
            const y = horizontal ? i * 54 + 30 : Math.min(value, baseline);
            return <g key={i}>
              {horizontal && <line x1={left} x2={right} y1={y + 5} y2={y + 5} stroke={rule} strokeWidth={0.6} />}
              <rect x={x} y={y} width={horizontal ? Math.abs(value - baseline) : columnWidth}
                height={horizontal ? 10 : Math.abs(value - baseline)} fill={datum.highlight ? accent : hasHighlight ? secondaryInk : ink}>
                <title>{`${datum.label}: ${format(datum.value)}${unit ? ` ${unit}` : ''}`}</title>
              </rect>
              <text x={horizontal ? left : left + step * (i + 0.5)} y={horizontal ? i * 54 + 17 : bottom + 24}
                textAnchor={horizontal ? 'start' : 'middle'}>
                {shortLabel(datum.label, horizontal ? width - 112 : step - 6)}<title>{datum.label}</title>
              </text>
              <text x={horizontal ? right : left + step * (i + 0.5)}
                y={horizontal ? i * 54 + 17 : 16}
                textAnchor={horizontal ? 'end' : 'middle'} className="nui-chart-value">
                {shortLabel(format(datum.value), horizontal ? 100 : step - 4)}<title>{format(datum.value)}</title>
              </text>
            </g>;
          })}
          {horizontal ? data.map((_, i) => <line key={i} x1={baseline} x2={baseline} y1={i * 54 + 28} y2={i * 54 + 42} stroke={ink} strokeWidth={0.6} />)
            : <line x1={left} x2={right} y1={baseline} y2={baseline} stroke={ink} strokeWidth={0.8} />}
          {referenceLine && <line className="nui-chart-reference"
            x1={horizontal ? position(referenceLine.value) : left} x2={horizontal ? position(referenceLine.value) : right}
            y1={horizontal ? 24 : position(referenceLine.value)} y2={horizontal ? bottom - 8 : position(referenceLine.value)}
            stroke={secondaryInk} strokeWidth={0.8} strokeDasharray="2 4" />}
        </svg>
        {referenceLine && <p className="nui-chart-reference-label">{referenceLine.label}: {format(referenceLine.value)}{unit ? ` ${unit}` : ''}</p>}
      </>}
      {!invalid && data.length > 0 && <DataTable label={label} locale={locale}
        headers={[text.category, unit || text.value]} rows={data.map(d => [d.label, format(d.value)])} />}
    </div>
  );
};
