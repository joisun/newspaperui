'use client';
import {
  Layout,
  Section,
  Article,
  Headline,
  Subhead,
  BodyText,
} from '@newspaperui/components';
import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';

export default function GridSystemPage() {
  return (
    <Layout columns={24} maxWidth="900px" padding="2rem">
      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Medium" as="h1">
            栅格系统
          </Headline>
          <Subhead weight="Medium">
            24 列由 Layout 提供上下文，Section 在栅格内分配 grid-template-columns，
            Article 用 grid-column span 跨栏。所有跨栏统一通过 CSS Grid 完成。
          </Subhead>

          <Headline weight="Low" as="h2">
            24 列可视化
          </Headline>
          <BodyText>
            <p>
              下面的网格演示了 24 列的等宽分布。每个数字标签对应一列。报纸排版偏好 24
              列是因为它能整除 2 / 3 / 4 / 6 / 8 / 12，足够灵活地实现 1/3、2/3、1/4、3/4
              这类常见栏宽组合。
            </p>
          </BodyText>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(24, 1fr)',
              gap: '4px',
              margin: '1.5rem 0 2rem',
            }}
          >
            {Array.from({ length: 24 }, (_, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--nui-bg-surface)',
                  border: '1px solid var(--nui-rule-hairline)',
                  textAlign: 'center',
                  padding: '0.5rem 0',
                  fontFamily: 'var(--font-family-meta)',
                  fontSize: '11px',
                  color: 'var(--nui-text-muted)',
                  letterSpacing: '0.04em',
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <Headline weight="Low" as="h2">
            Layout API
          </Headline>
          <BodyText>
            <p>
              <code>Layout</code> 是顶层容器，提供 LayoutContext。Section 通过
              useLayout 读取列数上限并自动 clamp。
            </p>
          </BodyText>
          <PropsTable
            data={[
              {
                name: 'columns',
                type: 'number',
                default: '24',
                description: '栅格总列数。决定子 Section 的最大 columns。',
              },
              {
                name: 'maxWidth',
                type: 'string',
                default: "'1280px'",
                description: '页面最大宽度。',
              },
              {
                name: 'padding',
                type: 'string',
                default: "'var(--nui-space-6)'",
                description: '页面内边距。',
              },
              {
                name: 'theme',
                type: "'light' | 'dark'",
                description:
                  '强制主题；省略时跟随 documentElement.dataset.theme。',
              },
              {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: '子内容（通常是若干 Section）。',
              },
            ]}
          />

          <Headline weight="Low" as="h2">
            Section API
          </Headline>
          <BodyText>
            <p>
              <code>Section</code> 是栅格容器，
              <code>display: grid; grid-template-columns: repeat(N, 1fr)</code>
              。子 Article 通过 grid-column span 占位。
            </p>
          </BodyText>
          <PropsTable
            data={[
              {
                name: 'columns',
                type: 'number',
                required: true,
                description: 'Section 内部栅格列数（≤ Layout.columns）。',
              },
              {
                name: 'gap',
                type: 'string',
                default: "'var(--nui-gutter)'",
                description: '栏间间距。',
              },
              {
                name: 'breakable',
                type: 'boolean',
                default: 'true',
                description: '允许打印时跨页断开。',
              },
              {
                name: 'divider',
                type: "'none' | 'top' | 'bottom' | 'both'",
                default: "'none'",
                description: '上下方向的 hairline 分隔线。',
              },
            ]}
          />

          <Headline weight="Low" as="h2">
            Article API
          </Headline>
          <BodyText>
            <p>
              <code>Article</code> 在 Section 栅格内用 grid-column span N 占位。
              span 缺省时占满 Section 全宽。
            </p>
          </BodyText>
          <PropsTable
            data={[
              {
                name: 'span',
                type: 'number',
                description: '跨多少列（0 &lt; span ≤ Section.columns）。',
              },
              {
                name: 'breakable',
                type: 'boolean',
                default: 'true',
                description: '允许打印时跨页断开。',
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
            实例
          </Headline>
          <Demo
            title="8 + 16 跨栏"
            description="左侧短讯 8 列 + 右侧主稿 16 列。"
            code={`<Layout columns={24}>
  <Section columns={24}>
    <Article span={8}>
      <Headline weight="Low">短讯</Headline>
      <BodyText>...</BodyText>
    </Article>
    <Article span={16}>
      <Headline weight="Medium">主稿</Headline>
      <BodyText>...</BodyText>
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
                    <p>占 8 列。短讯栏适合放编辑选编、精选事件、快速通读型小段。</p>
                  </BodyText>
                </Article>
                <Article span={16}>
                  <Headline weight="Medium" as="h3">
                    主稿
                  </Headline>
                  <BodyText>
                    <p>
                      占 16 列。主稿区域承载头版头条、深度报道，可启用
                      多栏文字流以增强阅读节奏。
                    </p>
                  </BodyText>
                </Article>
              </Section>
            </Layout>
          </Demo>
        </Article>
      </Section>
    </Layout>
  );
}
