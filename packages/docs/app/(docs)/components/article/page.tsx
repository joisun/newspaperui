'use client';
import {
  Layout,
  Section,
  Article,
  Layer,
  Headline,
  Subhead,
  BodyText,
} from 'newspaperui';
import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';

export default function ArticlePage() {
  return (
    <Layout columns={24} maxWidth="900px" padding="2rem">
      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Medium" as="h1">
            Article + Layer
          </Headline>
          <Subhead weight="Medium">
            Article 是栅格内的文章块，通过 grid-column span 跨栏。Layer 是脱离文档流的浮动层。
          </Subhead>

          <Headline weight="Low" as="h2">
            Article API
          </Headline>
          <PropsTable
            data={[
              {
                name: 'span',
                type: 'number',
                description: '跨多少列（≤ Section.columns）。缺省时占满全宽。',
              },
              {
                name: 'breakable',
                type: 'boolean',
                default: 'true',
                description: '允许打印时跨页断开。',
              },
              {
                name: 'className',
                type: 'string',
                description: '自定义 CSS 类名。',
              },
              {
                name: 'style',
                type: 'CSSProperties',
                description: '自定义内联样式。',
              },
              {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: '文章内容。',
              },
            ]}
          />

          <Headline weight="Low" as="h2">
            跨栏 Demo
          </Headline>
          <Demo
            title="8 + 16 跨栏"
            description="左侧 8 列 + 右侧 16 列，模拟短讯 + 主稿布局。"
            code={`<Layout columns={24}>
  <Section columns={24}>
    <Article span={8}>
      <Headline weight="Low">短讯</Headline>
      <BodyText>...</BodyText>
    </Article>
    <Article span={16}>
      <Headline weight="Medium">主稿</Headline>
      <BodyText columns={2}>...</BodyText>
    </Article>
  </Section>
</Layout>`}
          >
            <Layout columns={24} padding="0">
              <Section columns={24}>
                <Article span={8}>
                  <Headline weight="Low" as="h3">
                    短讯
                  </Headline>
                  <BodyText weight="Low">
                    <p>
                      Markets responded cautiously through the morning session. The pound
                      traded sideways against the dollar, gilts firmed by three basis points.
                    </p>
                  </BodyText>
                </Article>
                <Article span={16}>
                  <Headline weight="Medium" as="h3">
                    主稿
                  </Headline>
                  <BodyText columns={2}>
                    <p>
                      Whitehall officials confirmed late Tuesday that the long-anticipated
                      review of national infrastructure funding will be tabled before the
                      recess. The 248-page document, drafted across three departments,
                      recommends a recalibration of regional priorities and a measured shift
                      toward rail electrification.
                    </p>
                    <p>
                      Critics inside the cabinet caution that the timing risks overshadowing
                      the chancellor&rsquo;s autumn statement, while supporters describe the
                      proposals as the most coherent strategic blueprint in a generation.
                    </p>
                  </BodyText>
                </Article>
              </Section>
            </Layout>
          </Demo>

          <Headline weight="Low" as="h2" style={{ marginTop: '2rem' }}>
            Layer API
          </Headline>
          <BodyText weight="Low">
            <p>
              Layer 脱离栅格流，使用 CSS position 定位。适合浮动拉引、浮动广告、sticky 导航等场景。
            </p>
          </BodyText>
          <PropsTable
            data={[
              {
                name: 'position',
                type: "'absolute' | 'fixed' | 'sticky'",
                default: "'absolute'",
                description: 'CSS position 属性。',
              },
              {
                name: 'top',
                type: 'string | number',
                description: '距离顶部的距离。',
              },
              {
                name: 'left',
                type: 'string | number',
                description: '距离左侧的距离。',
              },
              {
                name: 'right',
                type: 'string | number',
                description: '距离右侧的距离。',
              },
              {
                name: 'bottom',
                type: 'string | number',
                description: '距离底部的距离。',
              },
              {
                name: 'zIndex',
                type: 'number',
                description: 'z-index 层级。',
              },
              {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: '浮动层内容。',
              },
            ]}
          />

          <Demo
            title="Layer 浮动拉引"
            description="在文章旁边添加浮动的拉引文字。父容器需要 position: relative。"
            code={`<div style={{ position: 'relative', minHeight: '200px' }}>
  <Article span={16}>
    <Headline weight="Low">主要文章</Headline>
    <BodyText>...</BodyText>
  </Article>
  <Layer position="absolute" top="0" right="0">
    <aside>浮动内容</aside>
  </Layer>
</div>`}
          >
            <Layout columns={24} padding="0">
              <Section columns={24}>
                <div style={{ position: 'relative', minHeight: '200px', gridColumn: 'span 24' }}>
                  <Article span={16}>
                    <Headline weight="Low" as="h3">
                      主要文章
                    </Headline>
                    <BodyText>
                      <p>
                        In Manchester, regional officials greeted the announcement with
                        measured optimism. The mayor&rsquo;s office is expected to issue a
                        formal response by week&rsquo;s end.
                      </p>
                    </BodyText>
                  </Article>
                  <Layer position="absolute" top="0" right="0">
                    <aside
                      style={{
                        width: '180px',
                        padding: '1rem',
                        borderTop: '1px solid var(--nui-rule-hairline)',
                        borderBottom: '1px solid var(--nui-rule-hairline)',
                        fontFamily: 'var(--font-family-display)',
                        fontSize: '18px',
                        lineHeight: 1.3,
                        color: 'var(--nui-text-primary)',
                      }}
                    >
                      &ldquo;We have lobbied for this kind of clarity for the better part of
                      a decade.&rdquo;
                    </aside>
                  </Layer>
                </div>
              </Section>
            </Layout>
          </Demo>
        </Article>
      </Section>
    </Layout>
  );
}
