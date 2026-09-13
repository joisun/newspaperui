'use client';

import Link from 'next/link';
import { BarChart, ChartFrame, LineChart, PieChart } from 'newspaperui';
import { useLocale } from './LocaleContext';
import styles from './ChartShowcase.module.css';

/** A compact edition for the homepage carousel, with no nested main landmark. */
export function ChartShowcase() {
  const { locale, localizeHref } = useLocale();
  const zh = locale === 'zh';
  const lang = zh ? 'zh-CN' : 'en';
  const copy = zh ? {
    title: '城市的变化，都在数字里',
    deck: '一条曲线，几组对比，一百次出行。用数据读懂城市的日常。',
    label: '城市观察 · 数据专版', edition: '数据与生活',
    trend: '轨道交通，持续向前', trendDescription: '年度出行量 · 2019—2024',
    ranking: '中心城区，更依赖公交', rankingDescription: '公共交通通勤占比 · 2024',
    mix: '一百次出行的构成', mixDescription: '各类出行方式占比 · 2024',
    rail: '轨道交通', car: '私人汽车', bus: '公交', walk: '步行与骑行',
    districts: ['中心区', '滨江区', '大学城', '西部新区'], unit: '百万人次',
    source: '来源：NewspaperUI 虚构样本 · 仅作版式演示',
    read: '阅读完整专版', docs: '图表组件文档',
  } : {
    title: 'A city, by the numbers.',
    deck: 'A rising line. A shared journey. The quiet patterns behind the everyday commute.',
    label: 'The City Observer · Data Edition', edition: 'DATA & EVERYDAY LIFE',
    trend: 'Rail finds its momentum', trendDescription: 'Annual journeys · 2019–2024',
    ranking: 'The centre travels together', rankingDescription: 'Public transport commute share · 2024',
    mix: 'One hundred journeys', mixDescription: 'Share of journeys by mode · 2024',
    rail: 'Rail', car: 'Private car', bus: 'Bus', walk: 'Walking & cycling',
    districts: ['City centre', 'Riverside', 'University', 'West district'], unit: 'Million journeys',
    source: 'Source: NewspaperUI fictional sample · Layout demonstration',
    read: 'Read the full edition', docs: 'Chart documentation',
  };

  return (
    <section className={styles.edition} lang={lang} aria-label={copy.label}>
      <div className={styles.folio}><span>{copy.edition}</span><span>THE CITY OBSERVER <span className={styles.issue}>/ 01</span></span></div>
      <header className={styles.header}>
        <h2>{copy.title}</h2>
        <p>{copy.deck}</p>
      </header>
      <div className={styles.charts}>
        <ChartFrame title={copy.trend} description={copy.trendDescription} number="01 / TREND" className={styles.trend}>
          <LineChart label={copy.trend} locale={lang} unit={copy.unit}
            labels={['2019', '2020', '2021', '2022', '2023', '2024']}
            series={[{ label: copy.rail, values: [32, 28, 36, 44, 50, 58], highlight: true }, { label: copy.car, values: [52, 55, 50, 45, 40, 34] }]} />
        </ChartFrame>
        <ChartFrame title={copy.ranking} description={copy.rankingDescription} number="02 / COMPARISON">
          <BarChart label={copy.ranking} locale={lang} unit="%"
            data={[72, 64, 58, 49].map((value, i) => ({ label: copy.districts[i], value, highlight: i === 0 }))} />
        </ChartFrame>
        <ChartFrame title={copy.mix} description={copy.mixDescription} number="03 / COMPOSITION">
          <PieChart label={copy.mix} locale={lang} variant="donut"
            data={[{ label: copy.rail, value: 42 }, { label: copy.bus, value: 26 }, { label: copy.walk, value: 18 }, { label: copy.car, value: 14 }]} />
        </ChartFrame>
      </div>
      <footer className={styles.footer}>
        <p>{copy.source}</p>
        <div><Link href={localizeHref('/blocks/data-journalism')}>{copy.read} ↗</Link><Link href={localizeHref('/docs/components/charts')}>{copy.docs} ↗</Link></div>
      </footer>
    </section>
  );
}
