'use client';
import {
  Layout,
  Section,
  Article,
  Headline,
  Subhead,
  BodyText,
  Rule,
} from 'newspaperui';
import { CodeBlock } from '@/components/CodeBlock';

export default function ResponsivePage() {
  return (
    <Layout columns={24} maxWidth="900px" padding="2rem">
      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Medium" as="h1">
            响应式设计
          </Headline>
          <Subhead weight="Medium">
            NewspaperUI 的响应式策略完全基于 CSS media query + container query，
            不依赖 JavaScript 运行时计算。
          </Subhead>

          <Headline weight="Low" as="h2">
            断点说明
          </Headline>
          <BodyText>
            <p>
              三个核心断点覆盖移动、平板、桌面：
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
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>断点</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>宽度</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>栏数建议</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--nui-rule-hairline)' }}>
                  <td style={{ padding: '0.5rem' }}>Mobile</td>
                  <td style={{ padding: '0.5rem' }}>&lt; 768px</td>
                  <td style={{ padding: '0.5rem' }}>1 栏（全宽）</td>
                  <td style={{ padding: '0.5rem' }}>单栏堆叠，BodyText columns=1</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--nui-rule-hairline)', background: 'var(--nui-bg-surface)' }}>
                  <td style={{ padding: '0.5rem' }}>Tablet</td>
                  <td style={{ padding: '0.5rem' }}>768px - 1024px</td>
                  <td style={{ padding: '0.5rem' }}>12 列</td>
                  <td style={{ padding: '0.5rem' }}>两栏布局，BodyText columns=2</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--nui-rule-hairline)' }}>
                  <td style={{ padding: '0.5rem' }}>Desktop</td>
                  <td style={{ padding: '0.5rem' }}>&gt; 1024px</td>
                  <td style={{ padding: '0.5rem' }}>24 列</td>
                  <td style={{ padding: '0.5rem' }}>完整多栏布局</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Headline weight="Low" as="h2">
            实施手法
          </Headline>
          <BodyText>
            <p>
              NewspaperUI 不再使用 JavaScript responsive 函数。所有响应式行为通过 CSS
              media query 和 container query 实现，零运行时开销。
            </p>
            <p>
              Section 的 <code>gridTemplateColumns</code> 是 inline style，因此需要在
              消费侧用 CSS 覆盖。推荐做法：
            </p>
          </BodyText>

          <CodeBlock
            title="自定义响应式 CSS"
            language="css"
            code={`/* 在你的 globals.css 或组件 CSS 中 */
@media (max-width: 768px) {
  .nui-section {
    grid-template-columns: 1fr !important;
  }
  .nui-article {
    grid-column: span 1 !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .nui-section[data-columns="24"] {
    grid-template-columns: repeat(12, 1fr) !important;
  }
}`}
          />

          <BodyText>
            <p>
              或者使用 container query 让 Section 根据自身宽度自适应：
            </p>
          </BodyText>

          <CodeBlock
            title="Container Query 方案"
            language="css"
            code={`/* 给 Section 添加 container-type */
.nui-section {
  container-type: inline-size;
}

@container (max-width: 600px) {
  .nui-article {
    grid-column: 1 / -1 !important;
  }
}`}
          />

          <Rule variant="hairline" />

          <Headline weight="Low" as="h2">
            视口效果预览
          </Headline>
          <BodyText weight="Low">
            <p>
              下面三个区块模拟桌面、平板、移动端的视觉效果。实际项目中建议使用浏览器
              DevTools 的 responsive mode 进行测试。
            </p>
          </BodyText>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', margin: '1.5rem 0' }}>
            <div>
              <div
                className="nui-small-caps"
                style={{
                  fontFamily: 'var(--font-family-meta)',
                  fontSize: '11px',
                  color: 'var(--nui-text-muted)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.5rem',
                }}
              >
                Desktop (1024px+) &mdash; 24 列完整布局
              </div>
              <div
                style={{
                  border: '1px solid var(--nui-rule-hairline)',
                  padding: '1rem',
                  background: 'var(--nui-bg-surface)',
                }}
              >
                <Layout columns={24} padding="0" maxWidth="100%">
                  <Section columns={24}>
                    <Article span={6}>
                      <Headline weight="Low" as="h4">Briefing</Headline>
                      <BodyText weight="Low"><p>Short news items.</p></BodyText>
                    </Article>
                    <Article span={12}>
                      <Headline weight="Medium" as="h4">Lead Story</Headline>
                      <BodyText><p>Main article content with full detail.</p></BodyText>
                    </Article>
                    <Article span={6}>
                      <Headline weight="Low" as="h4">Markets</Headline>
                      <BodyText weight="Low"><p>FTSE, gilts, sterling.</p></BodyText>
                    </Article>
                  </Section>
                </Layout>
              </div>
            </div>

            <div>
              <div
                className="nui-small-caps"
                style={{
                  fontFamily: 'var(--font-family-meta)',
                  fontSize: '11px',
                  color: 'var(--nui-text-muted)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.5rem',
                }}
              >
                Tablet (768-1024px) &mdash; 12 列简化
              </div>
              <div
                style={{
                  border: '1px solid var(--nui-rule-hairline)',
                  padding: '1rem',
                  background: 'var(--nui-bg-surface)',
                  maxWidth: '600px',
                }}
              >
                <Layout columns={12} padding="0" maxWidth="100%">
                  <Section columns={12}>
                    <Article span={6}>
                      <Headline weight="Low" as="h4">Lead Story</Headline>
                      <BodyText weight="Low"><p>Main article.</p></BodyText>
                    </Article>
                    <Article span={6}>
                      <Headline weight="Low" as="h4">Secondary</Headline>
                      <BodyText weight="Low"><p>Supporting content.</p></BodyText>
                    </Article>
                  </Section>
                </Layout>
              </div>
            </div>

            <div>
              <div
                className="nui-small-caps"
                style={{
                  fontFamily: 'var(--font-family-meta)',
                  fontSize: '11px',
                  color: 'var(--nui-text-muted)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.5rem',
                }}
              >
                Mobile (&lt;768px) &mdash; 单栏堆叠
              </div>
              <div
                style={{
                  border: '1px solid var(--nui-rule-hairline)',
                  padding: '1rem',
                  background: 'var(--nui-bg-surface)',
                  maxWidth: '375px',
                }}
              >
                <Layout columns={1} padding="0" maxWidth="100%">
                  <Section columns={1}>
                    <Article span={1}>
                      <Headline weight="Low" as="h4">Lead Story</Headline>
                      <BodyText weight="Low"><p>Full-width single column.</p></BodyText>
                    </Article>
                    <Article span={1}>
                      <Headline weight="Low" as="h4">Secondary</Headline>
                      <BodyText weight="Low"><p>Stacked below.</p></BodyText>
                    </Article>
                  </Section>
                </Layout>
              </div>
            </div>
          </div>
        </Article>
      </Section>
    </Layout>
  );
}
