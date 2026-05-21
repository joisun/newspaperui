'use client';
import {
  Layout,
  Section,
  Article,
  Headline,
  Subhead,
  Kicker,
  BodyText,
  Quote,
  Byline,
  Dateline,
  Caption,
} from 'newspaperui';
import { visualWeights, resolveFontSize } from 'newspaperui-theme';
import { Demo } from '@/components/Demo';

const longText = `Whitehall officials confirmed late Tuesday that the long-anticipated review of national infrastructure funding will be tabled before the recess. The 248-page document, drafted across three departments, recommends a recalibration of regional priorities and a measured shift toward rail electrification. Critics inside the cabinet caution that the timing risks overshadowing the chancellor's autumn statement, while supporters describe the proposals as the most coherent strategic blueprint in a generation.`;

const longText2 = `Markets responded cautiously through the morning session. The pound traded sideways against the dollar, gilts firmed by three basis points, and the FTSE 100 closed marginally lower as defensive sectors absorbed the day's modest outflows. Analysts at three of the City's largest houses framed the move as a holding pattern, awaiting further detail on the spending envelope rather than a verdict on its substance.`;

const longText3 = `In Manchester, regional officials greeted the announcement with measured optimism. "We have lobbied for this kind of clarity for the better part of a decade," said one senior figure who requested anonymity to discuss internal deliberations. The mayor's office is expected to issue a formal response by week's end, focusing on commitments to the trans-Pennine corridor and the long-deferred upgrade of suburban tram capacity.`;

const longText4 = `Beyond the immediate fiscal arithmetic, the review's most consequential proposal may be its quietest: a standing technical commission, modeled on Australia's Infrastructure Australia, to depoliticize project sequencing. Whether that body acquires teeth — or settles into the advisory torpor that has consumed earlier attempts — will be determined by the legislation expected in the spring.`;

interface WeightRow {
  component: string;
  weight: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  color: string;
}

function buildWeightRows(): WeightRow[] {
  const rows: WeightRow[] = [];
  for (const [comp, weights] of Object.entries(visualWeights)) {
    for (const [w, cfg] of Object.entries(weights)) {
      if (!cfg) continue;
      rows.push({
        component: comp,
        weight: w,
        fontFamily: cfg.fontFamily,
        fontSize: resolveFontSize(cfg.fontSize),
        fontWeight: cfg.fontWeight,
        lineHeight: cfg.lineHeight,
        color: cfg.color,
      });
    }
  }
  return rows;
}

export default function TextPage() {
  const weightRows = buildWeightRows();

  return (
    <Layout columns={24} maxWidth="900px" padding="2rem">
      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Medium" as="h1">
            文本组件
          </Headline>
          <Subhead weight="Medium">
            从 Headline 到 Caption 的完整文本谱系。每个组件按视觉权重映射到字体、字号、字重、
            行高与颜色 token，避免硬编码样式。
          </Subhead>

          <Headline weight="Low" as="h2">
            Headline 三档
          </Headline>
          <Demo title="High / Medium / Low">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <Kicker>weight=&quot;High&quot;</Kicker>
                <Headline weight="High" as="h3">
                  A Quiet Revolution in the Treasury Forecast
                </Headline>
              </div>
              <div>
                <Kicker>weight=&quot;Medium&quot;</Kicker>
                <Headline weight="Medium" as="h3">
                  Whitehall Confirms Infrastructure Review
                </Headline>
              </div>
              <div>
                <Kicker>weight=&quot;Low&quot;</Kicker>
                <Headline weight="Low" as="h3">
                  Briefing: regional rail commitments
                </Headline>
              </div>
            </div>
          </Demo>

          <Headline weight="Low" as="h2">
            Subhead 两档
          </Headline>
          <Demo title="High / Medium">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Subhead weight="High">
                A measured recalibration of regional priorities is expected to define the
                chancellor&rsquo;s autumn agenda.
              </Subhead>
              <Subhead weight="Medium">
                Officials emphasized that the headline figures should be read as a planning
                envelope rather than a binding allocation.
              </Subhead>
            </div>
          </Demo>

          <Headline weight="Low" as="h2">
            Kicker
          </Headline>
          <Demo title="朱红 small-caps，挂在 Headline 上方">
            <div>
              <Kicker>POLITICS · WHITEHALL</Kicker>
              <Headline weight="Medium" as="h3">
                A Standing Technical Commission, Quietly Proposed
              </Headline>
            </div>
          </Demo>

          <Headline weight="Low" as="h2">
            BodyText 多栏文字流
          </Headline>

          <Demo title="单栏" description="默认形态，适合中等宽度的文章正文。">
            <BodyText>
              <p>{longText}</p>
              <p>{longText2}</p>
            </BodyText>
          </Demo>

          <Demo
            title="三栏 + 首字下沉"
            description="开启 columns={3} 与 dropCap，第一段首字母自动下沉占 2-3 行。"
            code={`<BodyText columns={3} dropCap>
  <p>...</p>
  <p>...</p>
</BodyText>`}
          >
            <BodyText columns={3} dropCap>
              <p>{longText}</p>
              <p>{longText2}</p>
              <p>{longText3}</p>
              <p>{longText4}</p>
            </BodyText>
          </Demo>

          <Demo
            title="两栏（无 dropCap）"
            description="columns={2}，栏间细线由 nui-column-rule 提供。"
          >
            <BodyText columns={2}>
              <p>{longText}</p>
              <p>{longText2}</p>
              <p>{longText3}</p>
            </BodyText>
          </Demo>

          <Headline weight="Low" as="h2">
            Quote 引用
          </Headline>
          <Demo title="block / inline 对照">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Quote variant="block">
                We have lobbied for this kind of clarity for the better part of a decade.
              </Quote>
              <BodyText>
                <p>
                  按一位资深内阁人士的说法，这份评估
                  <Quote variant="inline">
                    是一个时代以来最连贯的战略蓝图
                  </Quote>
                  ，但能否落地仍取决于春季立法。
                </p>
              </BodyText>
            </div>
          </Demo>

          <Headline weight="Low" as="h2">
            Byline / Dateline / Caption
          </Headline>
          <Demo title="元信息组件">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <Byline>BY ALICE SMITH</Byline>
                <Dateline>LONDON &mdash;</Dateline>
              </div>
              <figure style={{ margin: 0 }}>
                <div
                  style={{
                    height: '160px',
                    background: 'var(--nui-bg-surface)',
                    border: '1px solid var(--nui-rule-hairline)',
                  }}
                />
                <Caption credit="Photograph by Jane Doe">
                  A view of the Treasury terrace at dusk; the new commission will report
                  here from May.
                </Caption>
              </figure>
            </div>
          </Demo>

          <Headline weight="Low" as="h2">
            视觉权重映射表
          </Headline>
          <BodyText weight="Low">
            <p>
              下表从 <code>visualWeights</code> 数据动态生成，反映组件实际渲染时所用的
              token。修改 theme 后表格自动同步。
            </p>
          </BodyText>
          <div style={{ overflowX: 'auto', margin: '1rem 0 2rem' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'var(--font-family-meta)',
                fontSize: '13px',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--nui-rule-decorative)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>组件</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>权重</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>字体</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>字号</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>字重</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>行高</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>颜色</th>
                </tr>
              </thead>
              <tbody>
                {weightRows.map((row, idx) => (
                  <tr
                    key={`${row.component}-${row.weight}`}
                    style={{
                      borderBottom: '1px solid var(--nui-rule-hairline)',
                      background:
                        idx % 2 === 0 ? 'transparent' : 'var(--nui-bg-surface)',
                    }}
                  >
                    <td style={{ padding: '0.5rem' }}>{row.component}</td>
                    <td style={{ padding: '0.5rem' }}>{row.weight}</td>
                    <td style={{ padding: '0.5rem', fontSize: '11px' }}>
                      <code>{row.fontFamily}</code>
                    </td>
                    <td style={{ padding: '0.5rem' }}>{row.fontSize}</td>
                    <td style={{ padding: '0.5rem' }}>{row.fontWeight}</td>
                    <td style={{ padding: '0.5rem' }}>{row.lineHeight}</td>
                    <td style={{ padding: '0.5rem', fontSize: '11px' }}>
                      <code>{row.color}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Article>
      </Section>
    </Layout>
  );
}
