'use client';

import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';
import { Layout, Section, Article, Headline, BodyText, Subhead } from '@newspaperui/components';

export default function ArticlePage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>Article 组件</h1>
      <p className="text-xl text-gray-600">
        Article 是内容容器组件，用于组织文章内容，支持跨栏布局和优先级控制。
      </p>

      <h2>组件说明</h2>
      <p>
        <code>Article</code> 组件是报纸布局中的基本内容单元，可以包含标题、正文、图片等多种内容。
        通过 span 属性控制文章占据的列数，实现灵活的跨栏布局。
      </p>

      <h2>API 文档</h2>
      <PropsTable
        data={[
          {
            name: 'span',
            type: 'number',
            required: true,
            description: '文章占据的列数，必须 ≤ 所在 Section 的 columns',
          },
          {
            name: 'priority',
            type: 'number',
            default: '0',
            description: '优先级，数值越大优先级越高，影响排序',
          },
          {
            name: 'weight',
            type: '"High" | "Medium" | "Low"',
            default: '"Medium"',
            description: '视觉权重，影响内部文本组件的默认样式',
          },
          {
            name: 'breakable',
            type: 'boolean',
            default: 'true',
            description: '是否允许在此处分页断开',
          },
          {
            name: 'className',
            type: 'string',
            description: '自定义 CSS 类名',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: true,
            description: '文章内容',
          },
        ]}
      />

      <h2>基础用法</h2>
      <Demo
        title="单列文章"
        description="创建一个占据 8 列的文章"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <Article span={8}>
      <Headline weight="High">文章标题</Headline>
      <Subhead>副标题说明</Subhead>
      <BodyText>
        这是文章的正文内容。Article 组件提供了内容容器，
        可以包含多种文本和媒体组件。
      </BodyText>
    </Article>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={8}>
              <Headline weight="High">文章标题</Headline>
              <Subhead>副标题说明</Subhead>
              <BodyText>
                这是文章的正文内容。Article 组件提供了内容容器，
                可以包含多种文本和媒体组件。
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>跨栏布局</h2>
      <p>
        通过调整 span 属性，可以实现不同宽度的文章布局。较大的 span 值适合重要内容，
        较小的 span 值适合次要内容或侧边栏。
      </p>

      <Demo
        title="多列文章并排"
        description="在 24 列布局中创建三个 8 列的文章"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <Article span={8}>
      <Headline weight="High">主要文章</Headline>
      <BodyText>占据 8 列的主要内容</BodyText>
    </Article>
    <Article span={8}>
      <Headline weight="Medium">次要文章</Headline>
      <BodyText>占据 8 列的次要内容</BodyText>
    </Article>
    <Article span={8}>
      <Headline weight="Medium">更多内容</Headline>
      <BodyText>占据 8 列的更多内容</BodyText>
    </Article>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={8}>
              <Headline weight="High">主要文章</Headline>
              <BodyText>占据 8 列的主要内容，使用 High 权重突出显示。</BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Medium">次要文章</Headline>
              <BodyText>占据 8 列的次要内容，使用 Medium 权重。</BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Medium">更多内容</Headline>
              <BodyText>占据 8 列的更多内容，与其他文章并排显示。</BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>不同宽度组合</h2>
      <Demo
        title="混合宽度布局"
        description="组合不同宽度的文章实现复杂布局"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <Article span={16}>
      <Headline weight="High">宽文章 (16 列)</Headline>
      <BodyText>
        这是一篇占据 16 列的宽文章，适合放置重要内容或长篇文章。
      </BodyText>
    </Article>
    <Article span={8}>
      <Headline weight="Low">窄文章 (8 列)</Headline>
      <BodyText>这是占据 8 列的窄文章，适合侧边栏或简短内容。</BodyText>
    </Article>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={16}>
              <Headline weight="High">宽文章 (16 列)</Headline>
              <BodyText>
                这是一篇占据 16 列的宽文章，适合放置重要内容或长篇文章。
                更宽的列宽提供了更好的阅读体验。
              </BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Low">窄文章 (8 列)</Headline>
              <BodyText>这是占据 8 列的窄文章，适合侧边栏或简短内容。</BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>使用建议</h2>
      <ul>
        <li>主要文章建议使用 12-16 列，提供良好的阅读宽度</li>
        <li>次要文章或侧边栏使用 6-8 列</li>
        <li>确保同一 Section 内所有 Article 的 span 总和 ≤ Section.columns</li>
        <li>使用 priority 属性控制文章的显示顺序</li>
        <li>通过 weight 属性影响内部文本组件的默认样式</li>
        <li>重要内容使用更大的 span 值以获得更多视觉权重</li>
      </ul>

      <h2>注意事项</h2>
      <ul>
        <li>Article 的 span 值必须小于或等于所在 Section 的 columns 值</li>
        <li>如果 Section 内多个 Article 的 span 总和超过 Section.columns，会自动换行</li>
        <li>在响应式布局中，Article 会根据屏幕尺寸自动调整宽���</li>
        <li>breakable 属性在打印或分页场景中很有用</li>
      </ul>
    </div>
  );
}
