'use client';

import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';
import { Layout, Section, Article, Headline, BodyText } from '@newspaperui/components';

export default function GridSystemPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>栅格系统</h1>
      <p className="text-xl text-gray-600">
        NewspaperUI 采用 24 列栅格系统，提供灵活而精确的布局控制能力。
      </p>

      <h2>设计原理</h2>
      <p>
        24 列栅格系统借鉴了专业排版软件的设计思想，相比传统的 12 列��格��24 列提供了更细粒度的布局控制。
        这使得我们可以实现更复杂的报纸风格布局，如 1/3、2/3、1/4、3/4 等多种列宽组合。
      </p>

      <h2>Layout 组件</h2>
      <p>
        <code>Layout</code> 是顶层容器组件，定义了整个页面的栅格系统。
      </p>

      <PropsTable
        data={[
          {
            name: 'columns',
            type: 'number',
            default: '24',
            description: '栅格总列数，默认 24 列',
          },
          {
            name: 'maxWidth',
            type: 'string',
            default: '"1440px"',
            description: '容器最大宽度',
          },
          {
            name: 'gutter',
            type: 'number',
            default: '16',
            description: '列间距（单位 px）',
          },
          {
            name: 'padding',
            type: 'string',
            default: '"1rem"',
            description: '容器内边距',
          },
          {
            name: 'className',
            type: 'string',
            description: '自定义 CSS 类名',
          },
        ]}
      />

      <Demo
        title="基础 Layout"
        description="创建一个 24 列的栅格容器"
        code={`<Layout columns={24}>
  {/* 内容 */}
</Layout>`}
      >
        <Layout columns={24}>
          <div className="bg-blue-50 border-2 border-blue-200 p-4 text-center">
            24 列栅格容器
          </div>
        </Layout>
      </Demo>

      <h2>Section 组件</h2>
      <p>
        <code>Section</code> 组件用于将 Layout 划分为多个区域，每个 Section 可以占据不同的列数。
        Section 内的所有对象的 span 总和不能超过 Section 的 columns 值。
      </p>

      <PropsTable
        data={[
          {
            name: 'columns',
            type: 'number',
            required: true,
            description: 'Section 占据的列数，必须 ≤ Layout.columns',
          },
          {
            name: 'breakable',
            type: 'boolean',
            default: 'true',
            description: '是否允许在此处分页断开',
          },
          {
            name: 'priority',
            type: "'High' | 'Medium' | 'Low'",
            default: "'Medium'",
            description: '优先级，用于排序',
          },
          {
            name: 'className',
            type: 'string',
            description: '自定义 CSS 类名',
          },
        ]}
      />

      <Demo
        title="多 Section 布局"
        description="将 24 列划分为 8 列和 16 列两个区域"
        code={`<Layout columns={24}>
  <Section columns={8}>
    <Article span={8}>
      <Headline weight="High">8 列区域</Headline>
      <BodyText>这个区域占据 8 列</BodyText>
    </Article>
  </Section>

  <Section columns={16}>
    <Article span={8}>
      <Headline weight="Medium">16 列区域 - 左</Headline>
      <BodyText>这个区域占据 16 列，分为两个 8 列文章</BodyText>
    </Article>
    <Article span={8}>
      <Headline weight="Medium">16 列区域 - 右</Headline>
      <BodyText>第二个 8 列文章</BodyText>
    </Article>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={8}>
            <Article span={8}>
              <Headline weight="High">8 列区域</Headline>
              <BodyText>这个区域占据 8 列，适合放置主要内容或大图。</BodyText>
            </Article>
          </Section>

          <Section columns={16}>
            <Article span={8}>
              <Headline weight="Medium">16 列区域 - 左</Headline>
              <BodyText>这个区域占据 16 列，分为两个 8 列文章。</BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Medium">16 列区域 - 右</Headline>
              <BodyText>第二个 8 列文章，与左侧并排显示。</BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>响应式栅格</h2>
      <p>
        在小屏设备上，栅格系统会自动调整为 12-16 列，确保内容在移动设备上也能良好显示。
        你可以通过 CSS 媒体查询或响应式工具类来进一步控制不同屏幕尺寸下的布局。
      </p>

      <Demo
        title="响应式栅格示例"
        description="在不同屏幕尺寸下自动调整列数"
      >
        <Layout columns={24}>
          <Section columns={6}>
            <Article span={6}>
              <Headline weight="Low">6 列</Headline>
              <BodyText>小屏下可能变为全宽</BodyText>
            </Article>
          </Section>
          <Section columns={6}>
            <Article span={6}>
              <Headline weight="Low">6 列</Headline>
              <BodyText>自动适应屏幕</BodyText>
            </Article>
          </Section>
          <Section columns={6}>
            <Article span={6}>
              <Headline weight="Low">6 列</Headline>
              <BodyText>保持良好阅读体验</BodyText>
            </Article>
          </Section>
          <Section columns={6}>
            <Article span={6}>
              <Headline weight="Low">6 列</Headline>
              <BodyText>响应式布局</BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>布局规则</h2>
      <ul>
        <li>Layout 的 columns 属性定义了整个页面的栅格总列数（默认 24）</li>
        <li>Section 的 columns 属性必须 ≤ Layout 的 columns</li>
        <li>Section 内所有对象的 span 总和必须 ≤ Section 的 columns</li>
        <li>对象可以通过 span 属性跨越多列</li>
        <li>小屏设备会自动调整为 12-16 列</li>
      </ul>

      <h2>最佳实践</h2>
      <ul>
        <li>使用 24 列栅格可以实现 1/2、1/3、1/4、1/6、1/8 等多种比例</li>
        <li>主要内容区域建议使用 8-16 列</li>
        <li>侧边栏或次要内容使用 4-8 列</li>
        <li>重要内容可以跨越更多列以获得更大的视觉权重</li>
        <li>保持 Section 之间的列数比例协调，如 8:16、6:18、12:12 等</li>
      </ul>
    </div>
  );
}
