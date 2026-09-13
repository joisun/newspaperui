'use client';

import React from 'react';
import { cx } from 'newspaperui-utils';
import { accent, ChartMessage, ChartProps, ChartReferenceLine, chartText, dashes, DataTable, domain, ink, paper, rule, scale, secondaryInk, shortLabel, ticks, useChartWidth, valueFormatter } from './shared';

export interface LineSeries {
  label: string;
  values: (number | null)[];
  highlight?: boolean;
}

export interface ChartAnnotation {
  /** Zero-based index in labels. */
  index: number;
  label: string;
}

export interface LineChartProps extends ChartProps {
  /** Equally spaced categories; dates are displayed as labels, not parsed. */
  labels: string[];
  series: LineSeries[];
  annotations?: ChartAnnotation[];
  referenceLine?: ChartReferenceLine;
}

export const LineChart: React.FC<LineChartProps> = ({
  labels, series, label, unit, locale, formatValue, annotations = [], referenceLine, className, style,
}) => {
  const { ref, width } = useChartWidth();
  const text = chartText(locale);
  const format = valueFormatter(locale, formatValue);
  const invalid = series.some(s => s.values.length !== labels.length || s.values.some(v => v !== null && !Number.isFinite(v)))
    || (referenceLine && !Number.isFinite(referenceLine.value))
    || annotations.some(a => !Number.isInteger(a.index) || a.index < 0 || a.index >= labels.length);
  const values = series.flatMap(s => s.values.filter((v): v is number => v !== null));
  const empty = !labels.length || !series.length || !values.length;
  const [min, max] = domain(invalid ? [] : [...values, ...(referenceLine ? [referenceLine.value] : [])]);
  const left = 64;
  const showEndLabels = width >= 480 && series.length <= 4 && series.every(s => s.values[s.values.length - 1] !== null);
  const right = width - (showEndLabels ? 116 : 16);
  const top = 30;
  const bottom = 234;
  const x = (i: number) => labels.length === 1 ? (left + right) / 2 : left + i * (right - left) / (labels.length - 1);
  const y = (v: number) => scale(v, min, max, bottom, top);
  const labelEvery = Math.max(1, Math.ceil(labels.length / Math.max(2, Math.floor((right - left) / 76))));
  const tickIndexes = labels.map((_, i) => i).filter(i => i === 0 || i === labels.length - 1 || (i % labelEvery === 0 && i < labels.length - 1 - labelEvery / 2));
  const endpoints = invalid ? [] : series.flatMap((s, index) => {
    const last = s.values.reduce<number>((found, v, i) => v === null ? found : i, -1);
    return last < 0 ? [] : [{ index, last, pointY: y(s.values[last]!), labelY: y(s.values[last]!) }];
  }).sort((a, b) => a.pointY - b.pointY);
  endpoints.forEach((p, i) => { p.labelY = Math.max(p.pointY, i ? endpoints[i - 1].labelY + 34 : top); });
  for (let i = endpoints.length - 1; i >= 0; i--) {
    endpoints[i].labelY = Math.min(endpoints[i].labelY, i === endpoints.length - 1 ? bottom - 14 : endpoints[i + 1].labelY - 34);
  }

  return (
    <div ref={ref} className={cx('nui-chart nui-line-chart', className)} style={style}>
      {unit && <div className="nui-chart-unit">{unit}</div>}
      {invalid ? <ChartMessage>{text.invalid}</ChartMessage> : empty ? <ChartMessage>{text.empty}</ChartMessage> : <>
        <svg className="nui-chart-svg" viewBox={`0 0 ${width} 276`} role="img" aria-label={label}>
          <title>{label}</title>
          {ticks(min, max).map((tick, i) => <g key={i}>
            <line x1={left} x2={right} y1={y(tick)} y2={y(tick)} stroke={tick === 0 ? ink : rule} strokeWidth={tick === 0 ? 0.8 : 0.6} />
            <text x={left - 8} y={y(tick) + 4} textAnchor="end" className="nui-chart-tick">{shortLabel(format(tick), 60)}<title>{format(tick)}</title></text>
          </g>)}
          {tickIndexes.map(i => <text key={i} x={x(i)} y={bottom + 24}
            textAnchor={i === 0 ? 'start' : i === labels.length - 1 ? 'end' : 'middle'} className="nui-chart-tick">
            {shortLabel(labels[i], Math.min(76, (right - left) / Math.max(1, tickIndexes.length - 1)))}<title>{labels[i]}</title>
          </text>)}
          {annotations.map((annotation, i) => <g key={i}>
            <line x1={x(annotation.index)} x2={x(annotation.index)} y1={top} y2={bottom} stroke={rule} strokeDasharray="2 4" />
            <text x={x(annotation.index)} y={top - 12} textAnchor="middle" className="nui-chart-marker">{String(i + 1).padStart(2, '0')}</text>
          </g>)}
          {referenceLine && <line className="nui-chart-reference" x1={left} x2={right} y1={y(referenceLine.value)} y2={y(referenceLine.value)} stroke={secondaryInk} strokeWidth={0.8} strokeDasharray="2 4" />}
          {series.map((s, index) => {
            let connected = false;
            const path = s.values.map((v, i) => {
              if (v === null) { connected = false; return ''; }
              const command = connected ? 'L' : 'M';
              connected = true;
              return `${command}${x(i)},${y(v)}`;
            }).join(' ');
            const color = s.highlight ? accent : secondaryInk;
            return <g key={index}>
              <path className="nui-chart-line" d={path} fill="none" stroke={color} strokeWidth={s.highlight ? 1.8 : 1.4} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dashes[index % dashes.length]} />
              {s.values.map((v, i) => v === null ? null : <circle key={i} cx={x(i)} cy={y(v)} r={i === labels.length - 1 ? 3 : 2.3} fill={i === labels.length - 1 ? color : paper} stroke={color} strokeWidth={1.2}>
                <title>{`${s.label} · ${labels[i]}: ${format(v)}`}</title>
              </circle>)}
            </g>;
          })}
          {showEndLabels && endpoints.map(point => <g key={point.index}>
            <path d={`M${x(point.last) + 5},${point.pointY} L${right + 8},${point.labelY} H${right + 14}`} fill="none" stroke={rule} strokeWidth={0.6} />
            <text x={right + 18} y={point.labelY - 3} className="nui-chart-end-label">{shortLabel(series[point.index].label, 90)}<title>{series[point.index].label}</title></text>
            <text x={right + 18} y={point.labelY + 15} className="nui-chart-end-value">{shortLabel(format(series[point.index].values[point.last]!), 64)}<title>{format(series[point.index].values[point.last]!)}</title></text>
          </g>)}
        </svg>
        {!showEndLabels && <ul className="nui-chart-legend">{series.map((s, i) => <li key={i}>
          <svg width="28" height="12" aria-hidden="true"><line x1="0" x2="28" y1="6" y2="6" stroke={s.highlight ? accent : secondaryInk} strokeWidth="1.5" strokeDasharray={dashes[i % dashes.length]} /></svg>
          <span>{s.label}</span>
        </li>)}</ul>}
        {referenceLine && <p className="nui-chart-reference-label">{referenceLine.label}: {format(referenceLine.value)}{unit ? ` ${unit}` : ''}</p>}
        {annotations.length > 0 && <ol className="nui-chart-annotations">{annotations.map((a, i) => <li key={i}>{labels[a.index]} — {a.label}</li>)}</ol>}
      </>}
      {!invalid && labels.length > 0 && series.length > 0 && <DataTable label={label} locale={locale}
        headers={[text.category, ...series.map(s => unit ? `${s.label} (${unit})` : s.label)]}
        rows={labels.map((category, i) => [category, ...series.map(s => s.values[i] === null ? text.missing : format(s.values[i]!))])} />}
    </div>
  );
};
