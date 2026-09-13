import { fireEvent, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { BarChart } from '../charts/BarChart';
import { LineChart } from '../charts/LineChart';
import { PieChart } from '../charts/PieChart';
import { ChartFrame } from '../charts/ChartFrame';
import { Section } from '../layout/Section';

describe('editorial charts', () => {
  it('keeps signed bar lengths proportional to their distance from zero', () => {
    const { container } = render(<BarChart label="Change" data={[
      { label: 'Decline', value: -10 }, { label: 'Zero', value: 0 }, { label: 'Growth', value: 20 },
    ]} />);
    const bars = [...container.querySelectorAll('svg rect')];
    expect(Number(bars[0].getAttribute('width')) * 2).toBeCloseTo(Number(bars[2].getAttribute('width')));
    expect(Number(bars[1].getAttribute('width'))).toBe(0);
    expect(Number(bars[0].getAttribute('x')) + Number(bars[0].getAttribute('width')))
      .toBeCloseTo(Number(bars[2].getAttribute('x')));
    expect(screen.getByRole('img', { name: 'Change' })).toBeInTheDocument();
  });

  it('preserves signed geometry for vertical bars and includes an outlying reference', () => {
    const { container } = render(<BarChart label="Change" orientation="vertical" data={[
      { label: 'Loss', value: -10 }, { label: 'Gain', value: 20 },
    ]} referenceLine={{ value: 40, label: 'Target' }} />);
    const bars = [...container.querySelectorAll('svg rect')];
    expect(Number(bars[0].getAttribute('height')) * 2).toBeCloseTo(Number(bars[1].getAttribute('height')));
    expect(Number(bars[1].getAttribute('y')) + Number(bars[1].getAttribute('height')))
      .toBeCloseTo(Number(bars[0].getAttribute('y')));
    expect(Number(container.querySelector('.nui-chart-reference')?.getAttribute('y1'))).toBe(30);
  });

  it('breaks lines at nulls while preserving zero and isolated points', () => {
    const { container } = render(<LineChart label="Trend" labels={['A', 'B', 'C', 'D']}
      series={[{ label: 'Rail', values: [10, null, 0, 20] }]} />);
    const path = container.querySelector('.nui-chart-line')?.getAttribute('d');
    expect(path?.match(/M/g)).toHaveLength(2);
    expect(path?.match(/L/g)).toHaveLength(1);
    expect(container.querySelectorAll('circle')).toHaveLength(3);
    fireEvent.click(screen.getByText('View data'));
    expect(screen.getByText('Missing')).toBeInTheDocument();
    expect(container.querySelector('tbody')?.textContent).toContain('C0');
  });

  it('labels final observations directly but keeps the legend when the last value is missing', () => {
    const { container, rerender } = render(<LineChart label="Trend" labels={['2023', '2024']}
      series={[{ label: 'Rail', values: [10, 20] }]} />);
    expect(container.querySelector('.nui-chart-end-label')).toHaveTextContent('Rail');
    expect(container.querySelector('.nui-chart-end-value')).toHaveTextContent('20');
    expect(container.querySelector('.nui-chart-legend')).not.toBeInTheDocument();
    rerender(<LineChart label="Trend" labels={['2023', '2024']}
      series={[{ label: 'Rail', values: [10, null] }]} />);
    expect(container.querySelector('.nui-chart-end-value')).not.toBeInTheDocument();
    expect(container.querySelector('.nui-chart-legend')).toHaveTextContent('Rail');
    expect(container.querySelector('tbody')).toHaveTextContent('2024Missing');
  });

  it('renders a single observation and an all-zero series without invalid geometry', () => {
    const { container } = render(<>
      <LineChart label="Single" labels={['A']} series={[{ label: 'Rail', values: [0] }]} />
      <BarChart label="Zero" data={[{ label: 'A', value: 0 }]} />
    </>);
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(container.querySelector('circle')?.getAttribute('cy')).toBe('234');
    expect(container.innerHTML).not.toMatch(/NaN|Infinity/);
  });

  it.each([
    <BarChart label="Invalid" data={[{ label: 'A', value: NaN }]} />,
    <BarChart label="Invalid" data={[{ label: 'A', value: 2 }]} referenceLine={{ label: 'Bad', value: Infinity }} />,
    <LineChart label="Invalid" labels={['A']} series={[{ label: 'Rail', values: [1, 2] }]} />,
    <LineChart label="Invalid" labels={['A']} series={[{ label: 'Rail', values: [Infinity] }]} />,
    <LineChart label="Invalid" labels={['A']} series={[{ label: 'Rail', values: [1] }]} annotations={[{ index: 1, label: 'Bad' }]} />,
    <PieChart label="Invalid" data={[{ label: 'A', value: -1 }]} />,
  ])('shows an error instead of drawing invalid data (%#)', chart => {
    render(chart);
    expect(screen.getByRole('status')).toHaveTextContent('Invalid data');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('distinguishes empty, all-null and zero-total data', () => {
    render(<>
      <BarChart label="Empty" data={[]} locale="zh-CN" />
      <LineChart label="Missing" labels={['A']} series={[{ label: 'Rail', values: [null] }]} locale="zh-CN" />
      <PieChart label="Zero total" data={[{ label: 'A', value: 0 }]} locale="zh-CN" />
    </>);
    expect(screen.getAllByText('暂无数据')).toHaveLength(2);
    expect(screen.getByText('总量为零，无法计算占比。')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('computes shares from the supplied total and keeps zero categories', () => {
    const { container } = render(<PieChart label="Mix" data={[
      { label: 'Rail', value: 20 }, { label: 'Car', value: 30 }, { label: 'Bus', value: 0 },
    ]} />);
    expect(container.querySelector('.nui-pie-labels')?.textContent).toBe('Rail40%Car60%Bus0%');
    expect(container.querySelectorAll('.nui-pie-svg > path')).toHaveLength(2);
    expect(container.querySelectorAll('tbody tr')).toHaveLength(3);
  });

  it('renders a complete circle for a single positive slice and isolates pattern IDs', () => {
    const { container } = render(<>
      <PieChart label="First" data={[{ label: 'Rail', value: 20 }]} />
      <PieChart label="Second" variant="donut" data={[{ label: 'Rail', value: 20 }]} />
    </>);
    const ids = [...container.querySelectorAll('pattern')].map(p => p.id);
    expect(new Set(ids).size).toBe(2);
    expect(container.querySelectorAll('.nui-pie-svg > path')).toHaveLength(0);
    expect(container.querySelectorAll('circle[fill^="url"]')).toHaveLength(2);
    expect(container.querySelector('.nui-pie-total')).toHaveTextContent('100%');
  });

  it('keeps finite extreme values drawable without overflowing totals or ranges', () => {
    const { container } = render(<>
      <BarChart label="Extremes" data={[{ label: 'A', value: -1e308 }, { label: 'B', value: 1e308 }]} />
      <PieChart label="Large total" data={[{ label: 'A', value: 1e308 }, { label: 'B', value: 1e308 }]} />
    </>);
    expect(container.innerHTML).not.toMatch(/NaN|Infinity/);
    expect(container.querySelector('.nui-pie-labels')?.textContent).toBe('A50%B50%');
  });

  it('keeps original labels and custom numeric formatting in the data table', () => {
    const { container } = render(<BarChart label="Districts" locale="zh-CN" unit="人次"
      formatValue={v => `${v.toFixed(1)}k`}
      data={[{ label: 'A very long district name that needs the full data table', value: 12 }]} />);
    expect(screen.getByText('查看数据')).toBeInTheDocument();
    expect(container.querySelector('tbody th')).toHaveTextContent('A very long district name that needs the full data table');
    expect(container.querySelector('tbody td')).toHaveTextContent('12.0k');
  });

  it('labels the frame, keeps attribution and clamps its grid span', () => {
    render(<Section columns={12}><ChartFrame title="Transport" as="h2" span={20}
      source={<a href="https://example.com/data">Dataset</a>} note="Sample only">
      <BarChart label="Commutes" data={[{ label: 'Rail', value: 10 }]} />
    </ChartFrame></Section>);
    expect(screen.getByRole('figure', { name: 'Transport' })).toHaveStyle({ gridColumn: 'span 12' });
    expect(screen.getByRole('heading', { level: 2, name: 'Transport' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Dataset' })).toHaveAttribute('href', 'https://example.com/data');
    expect(screen.getByText('Sample only')).toBeInTheDocument();
  });

  it('renders charts on the server without ResizeObserver or window measurement', () => {
    const error = vi.spyOn(console, 'error');
    try {
      const html = renderToString(<ChartFrame title="Server chart"><LineChart label="Trend" labels={['A', 'B']}
        series={[{ label: 'Rail', values: [1, 2] }]} /></ChartFrame>);
      expect(html).toContain('<svg');
      expect(html).toContain('<table');
      expect(html).not.toMatch(/NaN|Infinity/);
      expect(error).not.toHaveBeenCalled();
    } finally {
      error.mockRestore();
    }
  });

  it('remeasures a narrow container and disconnects its observer on unmount', () => {
    const disconnect = vi.fn();
    const observe = vi.fn();
    vi.stubGlobal('ResizeObserver', class { observe = observe; disconnect = disconnect; });
    const bounds = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ width: 280 } as DOMRect);
    try {
      const { container, unmount } = render(<LineChart label="Narrow" labels={['A', 'B']} series={[{ label: 'Rail', values: [1, 2] }]} />);
      expect(container.querySelector('svg')).toHaveAttribute('viewBox', '0 0 280 276');
      expect(observe).toHaveBeenCalled();
      unmount();
      expect(disconnect).toHaveBeenCalled();
    } finally {
      bounds.mockRestore();
      vi.unstubAllGlobals();
    }
  });
});
