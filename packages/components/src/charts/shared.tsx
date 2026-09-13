'use client';

import React, { CSSProperties, useEffect, useRef, useState } from 'react';

export interface ChartDatum {
  label: string;
  value: number;
  highlight?: boolean;
}

export interface ChartReferenceLine {
  value: number;
  label: string;
}

export interface ChartProps {
  /** Accessible name describing the chart. */
  label: string;
  unit?: string;
  /** Number formatting locale; Chinese locales also translate built-in text. */
  locale?: string;
  formatValue?: (value: number) => string;
  className?: string;
  style?: CSSProperties;
}

export const ink = 'var(--nui-text-primary)';
export const secondaryInk = 'var(--nui-text-secondary)';
export const accent = 'var(--nui-accent-primary)';
export const paper = 'var(--nui-bg-page)';
export const rule = 'var(--nui-rule-hairline)';
export const dashes = ['', '7 4', '2 4', '9 3 2 3'];

export function chartText(locale = 'en') {
  return locale.toLowerCase().startsWith('zh')
    ? { data: '查看数据', category: '类别', value: '数值', share: '占比', empty: '暂无数据', invalid: '数据无效，请检查数值。', missing: '缺失', zero: '总量为零，无法计算占比。' }
    : { data: 'View data', category: 'Category', value: 'Value', share: 'Share', empty: 'No data available', invalid: 'Invalid data. Check the supplied values.', missing: 'Missing', zero: 'The total is zero; shares cannot be calculated.' };
}

export function valueFormatter(locale = 'en', formatValue?: (value: number) => string) {
  return formatValue ?? new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format;
}

/** Measure the container, not the viewport: a sidebar needs the same care as mobile. */
export function useChartWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(640);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const measure = () => {
      const next = element.getBoundingClientRect().width;
      if (next > 0) setWidth(Math.max(240, Math.round(next)));
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return { ref, width };
}

export function domain(values: number[]): [number, number] {
  let min = 0;
  let max = 0;
  for (const value of values) {
    min = Math.min(min, value);
    max = Math.max(max, value);
  }
  if (min === max) return [0, 1];
  const step = tickStep(min, max, 4);
  if (!step) return [min, max];
  const lower = Math.floor(min / step) * step;
  const upper = Math.ceil(max / step) * step;
  return [Number.isFinite(lower) ? lower : min, Number.isFinite(upper) ? upper : max];
}

export function scale(value: number, min: number, max: number, start: number, end: number) {
  // Normalizing first also keeps mixed-sign, very large finite values drawable.
  const magnitude = Math.max(Math.abs(min), Math.abs(max)) || 1;
  return start + ((value / magnitude - min / magnitude) / (max / magnitude - min / magnitude)) * (end - start);
}

function tickStep(min: number, max: number, count: number) {
  const rough = max / count - min / count;
  if (!Number.isFinite(rough) || rough <= 0) return 0;
  const power = 10 ** Math.floor(Math.log10(rough));
  const fraction = rough / power;
  return (fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 2.5 ? 2.5 : fraction <= 5 ? 5 : 10) * power;
}

export function ticks(min: number, max: number, count = 4) {
  const step = tickStep(min, max, count);
  if (!step || !Number.isFinite(step)) return [min, 0, max].filter((v, i, all) => all.indexOf(v) === i);
  const first = Math.ceil(min / step);
  const last = Math.floor(max / step);
  return Array.from({ length: last - first + 1 }, (_, i) => {
    const value = (first + i) * step;
    return Math.abs(value) < step / 1e6 ? 0 : Number(value.toPrecision(12));
  });
}

export function shortLabel(label: string, width: number) {
  const chars = Array.from(label);
  let used = 0;
  for (let i = 0; i < chars.length; i++) {
    used += /[^\u0000-\u00ff]/.test(chars[i]) ? 12 : 7;
    if (used > width - 12) return `${chars.slice(0, i).join('')}…`;
  }
  return label;
}

export function ChartMessage({ children }: { children: React.ReactNode }) {
  return <p className="nui-chart-message" role="status">{children}</p>;
}

export function DataTable({ label, locale, headers, rows }: {
  label: string;
  locale?: string;
  headers: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <details className="nui-chart-data">
      <summary>{chartText(locale).data}</summary>
      <div className="nui-chart-table-scroll" tabIndex={0} role="region" aria-label={label}>
        <table>
          <caption>{label}</caption>
          <thead><tr>{headers.map((header, i) => <th key={i} scope="col">{header}</th>)}</tr></thead>
          <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0
            ? <th key={j} scope="row">{cell}</th>
            : <td key={j}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </details>
  );
}
