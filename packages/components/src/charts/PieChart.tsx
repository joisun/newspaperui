'use client';

import React, { useId } from 'react';
import { cx } from 'newspaperui-utils';
import { accent, ChartDatum, ChartMessage, ChartProps, chartText, DataTable, ink, paper, valueFormatter } from './shared';

export interface PieChartProps extends ChartProps {
  data: ChartDatum[];
  variant?: 'pie' | 'donut';
}

export const PieChart: React.FC<PieChartProps> = ({
  data, label, unit, locale, formatValue, variant = 'pie', className, style,
}) => {
  const id = `nui-pie-${useId().replace(/:/g, '')}`;
  const text = chartText(locale);
  const format = valueFormatter(locale, formatValue);
  const percent = new Intl.NumberFormat(locale ?? 'en', { style: 'percent', maximumFractionDigits: 1 });
  const invalid = data.some(d => !Number.isFinite(d.value) || d.value < 0);
  const max = data.reduce((result, d) => Math.max(result, d.value), 0);
  const normalized = invalid || max === 0 ? [] : data.map(d => d.value / max);
  const total = normalized.reduce((sum, value) => sum + value, 0);
  const shares = normalized.map(value => value / total);
  let angle = -Math.PI / 2;
  const point = (a: number) => `${120 + 104 * Math.cos(a)},${120 + 104 * Math.sin(a)}`;

  return (
    <div className={cx('nui-chart nui-pie-chart', className)} style={style}>
      {unit && <div className="nui-chart-unit">{unit}</div>}
      {invalid ? <ChartMessage>{text.invalid}</ChartMessage> : !data.length ? <ChartMessage>{text.empty}</ChartMessage> : max === 0 ? <ChartMessage>{text.zero}</ChartMessage> : <div className="nui-pie-layout">
        <svg className="nui-pie-svg" viewBox="0 0 240 240" role="img" aria-label={label}>
          <title>{label}</title>
          <defs>{data.map((d, i) => <pattern key={i} id={`${id}-${i}`} width={7 + i % 3} height={7 + i % 3}
            patternUnits="userSpaceOnUse" patternTransform={`rotate(${i % 2 ? 45 : -45})`}>
            <rect width="12" height="12" fill={i % 4 === 0 ? (d.highlight ? accent : ink) : paper} />
            {i % 4 === 1 && <line x1="0" x2="0" y1="0" y2="12" stroke={d.highlight ? accent : ink} strokeWidth="0.9" />}
            {i % 4 === 2 && <circle cx="3.5" cy="3.5" r="0.85" fill={d.highlight ? accent : ink} />}
            {i % 4 === 3 && <path d="M0,0 V12 M0,0 H12" fill="none" stroke={d.highlight ? accent : ink} strokeWidth="0.55" />}
          </pattern>)}</defs>
          {data.map((d, i) => {
            const start = angle;
            angle += shares[i] * Math.PI * 2;
            if (shares[i] === 0) return null;
            const fill = `url(#${id}-${i})`;
            const title = `${d.label}: ${format(d.value)} (${percent.format(shares[i])})`;
            return shares[i] >= 1 ? <circle key={i} cx="120" cy="120" r="104" fill={fill} stroke={ink}><title>{title}</title></circle>
              : <path key={i} d={`M120,120 L${point(start)} A104,104 0 ${shares[i] > 0.5 ? 1 : 0},1 ${point(angle)} Z`}
                fill={fill} stroke={paper} strokeWidth="1.5"><title>{title}</title></path>;
          })}
          <circle cx="120" cy="120" r="104" fill="none" stroke={ink} strokeWidth="0.65" />
          {variant === 'donut' && <>
            <circle cx="120" cy="120" r="72" fill={paper} stroke={ink} strokeWidth="0.65" />
            <text x="120" y="120" textAnchor="middle" className="nui-pie-total">{percent.format(1)}</text>
            <text x="120" y="141" textAnchor="middle" className="nui-pie-total-label">{locale?.toLowerCase().startsWith('zh') ? '合计' : 'TOTAL'}</text>
          </>}
        </svg>
        <ul className="nui-pie-labels">{data.map((d, i) => <li key={i}>
          <svg width="12" height="12" aria-hidden="true"><rect x="1" y="1" width="10" height="10" fill={`url(#${id}-${i})`} stroke={ink} strokeWidth="0.65" /></svg>
          <span>{d.label}</span><strong>{percent.format(shares[i])}</strong>
        </li>)}</ul>
      </div>}
      {!invalid && data.length > 0 && <DataTable label={label} locale={locale}
        headers={[text.category, unit || text.value, text.share]}
        rows={data.map((d, i) => [d.label, format(d.value), max === 0 ? '—' : percent.format(shares[i])])} />}
    </div>
  );
};
