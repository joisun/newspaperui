'use client';

import Link from 'next/link';
import { Article, BarChart, ChartFrame, Layout, LineChart, PieChart, Section } from 'newspaperui';
import { useLocale } from '../../../components/LocaleContext';
import styles from './data-journalism.module.css';

export default function DataJournalism() {
  const { locale, localizeHref } = useLocale();
  const zh = locale === 'zh';
  const lang = zh ? 'zh-CN' : 'en';
  const copy = zh ? {
    masthead: '城市观察', edition: '数据专版 · 第 01 期', date: '2024 年度观察',
    kicker: '流动的城市 / MOBILITY', headline: '城市出行，正在改变',
    deck: '从一条上升的曲线，到每一段日常通勤。用三种图表，读懂一座城市的出行变化。',
    demo: '版式演示 · 本页全部数值均为虚构数据，不代表实际调查结果。',
    source: 'NewspaperUI 虚构示例数据', sourceLabel: '来源',
    trend: '轨道客流增长，驾车出行回落', trendDescription: '年度出行量，2019—2024 年；各年份等距显示。',
    rail: '轨道交通', car: '私人汽车', unit: '百万人次', event: '新线路投入运营（虚构事件）',
    statLabel: '2024 年轨道出行量', stat: '58', statUnit: '百万人次',
    statText: '比 2019 年增加 26 百万人次。曲线描述变化，标注提供背景；两者并不能单独证明因果。',
    ranking: '公共交通，在中心城区更普及', rankingDescription: '各片区公共交通通勤占比，2024 年。',
    districts: ['中心区', '滨江区', '大学城', '西部新区', '近郊片区'], average: '全市平均',
    mix: '每一百次出行，如何分配？', mixDescription: '2024 年全部出行方式构成。',
    modes: ['轨道交通', '公交', '步行与骑行', '私人汽车'],
    change: '变化，也有不同方向', changeDescription: '2024 年相对 2019 年的占比变化。', deltaUnit: '百分点',
    deltaModes: ['汽车', '公交', '步行骑行', '轨道'],
    readingTitle: '读图之前，先看统计口径',
    reading: '客流总量、通勤占比与出行结构回答的是不同问题。左侧的柱形向零线两侧展开，保留增长与下降的方向；每张图都注明单位，并提供完整数据供核对。',
    note: '占比以本图所有类别的数值之和为分母；四舍五入可能产生尾差。',
    footer: '城市观察 · 数据与生活', docs: '查看图表组件文档', back: '全部版式',
  } : {
    masthead: 'The City Observer', edition: 'DATA EDITION · NO. 01', date: 'The 2024 review',
    kicker: 'THE CHANGING CITY / MOBILITY', headline: 'A city on the move',
    deck: 'From a rising line to the everyday commute. Three chart types tell the story of a city changing how it travels.',
    demo: 'Layout demonstration · All figures are fictional and do not represent survey findings.',
    source: 'NewspaperUI fictional sample data', sourceLabel: 'Source',
    trend: 'Rail journeys rise as car travel recedes', trendDescription: 'Annual journeys, 2019–2024; years are equally spaced.',
    rail: 'Rail', car: 'Private car', unit: 'Million journeys', event: 'New rail line opens (fictional event)',
    statLabel: 'RAIL JOURNEYS IN 2024', stat: '58', statUnit: 'million journeys',
    statText: '26 million more journeys than in 2019. The line shows change and the annotation offers context; neither establishes causation on its own.',
    ranking: 'Public transport leads in the city centre', rankingDescription: 'Share of commutes by public transport, by district, 2024.',
    districts: ['City centre', 'Riverside', 'University', 'West district', 'Outer suburbs'], average: 'City average',
    mix: 'How do a hundred journeys add up?', mixDescription: 'Share of all journeys by mode, 2024.',
    modes: ['Rail', 'Bus', 'Walking & cycling', 'Private car'],
    change: 'Change travels in both directions', changeDescription: 'Change in share between 2019 and 2024.', deltaUnit: 'Percentage points',
    deltaModes: ['Car', 'Bus', 'Walk/cycle', 'Rail'],
    readingTitle: 'Start with what is being counted',
    reading: 'Journey totals, commute shares and transport mix answer different questions. The columns extend to either side of zero to preserve the direction of change. Every chart includes its unit and a full data table for closer reading.',
    note: 'Shares use the sum of all supplied categories. Rounded percentages may not add up to exactly 100%.',
    footer: 'The City Observer · Data & everyday life', docs: 'Read the chart documentation', back: 'All blocks',
  };

  return (
    <main className={styles.page} lang={lang}>
      <Layout columns={24} maxWidth="1200px" padding="2rem clamp(1rem, 4vw, 3rem)">
        <header className={styles.masthead}>
          <div className={styles.edition}><span>{copy.edition}</span><span>{copy.date}</span></div>
          <p>{copy.masthead}</p>
          <div className={styles.edition}><span>NEWSPAPERUI</span><Link href={localizeHref('/blocks')}>{copy.back} ↗</Link></div>
        </header>
        <div className={styles.lead}>
          <p className={styles.kicker}>{copy.kicker}</p>
          <h1>{copy.headline}</h1>
          <p className={styles.deck}>{copy.deck}</p>
          <p className={styles.demo}>{copy.demo}</p>
        </div>
        <Section columns={24} gap="2rem" className={styles.row}>
          <Article span={17}>
            <ChartFrame as="h2" number="FIG. 01 / TREND" title={copy.trend} description={copy.trendDescription} source={copy.source} sourceLabel={copy.sourceLabel}>
              <LineChart label={copy.trend} locale={lang} unit={copy.unit}
                labels={['2019', '2020', '2021', '2022', '2023', '2024']}
                series={[{ label: copy.rail, values: [32, 28, 36, 44, 50, 58], highlight: true }, { label: copy.car, values: [52, 55, 50, 45, 40, 34] }]}
                annotations={[{ index: 3, label: copy.event }]} />
            </ChartFrame>
          </Article>
          <Article span={7} className={styles.stat}>
            <h2>{copy.statLabel}</h2><strong>{copy.stat}</strong><span>{copy.statUnit}</span>
            <p>{copy.statText}</p>
          </Article>
        </Section>
        <Section columns={24} gap="2.5rem" className={styles.row}>
          <Article span={14}>
            <ChartFrame as="h2" number="FIG. 02 / COMPARISON" title={copy.ranking} description={copy.rankingDescription} source={copy.source} sourceLabel={copy.sourceLabel}>
              <BarChart label={copy.ranking} locale={lang} unit="%"
                data={[72, 64, 58, 49, 41].map((value, i) => ({ label: copy.districts[i], value, highlight: i === 0 }))}
                referenceLine={{ value: 58, label: copy.average }} />
            </ChartFrame>
          </Article>
          <Article span={10}>
            <ChartFrame as="h2" number="FIG. 03 / COMPOSITION" title={copy.mix} description={copy.mixDescription} source={copy.source} sourceLabel={copy.sourceLabel} note={copy.note}>
              <PieChart label={copy.mix} locale={lang} variant="donut"
                data={[42, 26, 18, 14].map((value, i) => ({ label: copy.modes[i], value }))} />
            </ChartFrame>
          </Article>
        </Section>
        <Section columns={24} gap="2.5rem" className={styles.row}>
          <Article span={12}>
            <ChartFrame as="h2" number="FIG. 04 / CHANGE" title={copy.change} description={copy.changeDescription} source={copy.source} sourceLabel={copy.sourceLabel}>
              <BarChart label={copy.change} locale={lang} orientation="vertical" unit={copy.deltaUnit}
                data={[-8, -3, 4, 7].map((value, i) => ({ label: copy.deltaModes[i], value, highlight: i === 3 }))} />
            </ChartFrame>
          </Article>
          <Article span={12} className={styles.reading}>
            <span className={styles.kicker}>READING THE NUMBERS</span>
            <h2>{copy.readingTitle}</h2><p>{copy.reading}</p>
            <Link href={localizeHref('/docs/components/charts')}>{copy.docs} ↗</Link>
          </Article>
        </Section>
        <footer className={styles.footer}><span>{copy.footer}</span><span>01 — 04</span></footer>
      </Layout>
    </main>
  );
}
