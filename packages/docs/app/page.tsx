'use client';

import { Demo } from '@/components/Demo';
import { Layout, Section, Article } from '@newspaperui/components';
import { Headline, BodyText } from '@newspaperui/components';

export default function HomePage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>NewspaperUI</h1>
      <p className="text-xl text-gray-600">
        生产级报纸布局组件库，参考 InDesign 设计理念，支持 24 列栅格、跨栏、视觉权重和主题系统。
      </p>

      <h2>设计理念</h2>
      <p>
        NewspaperUI 借鉴专业排版软件 InDesign 的设计思想，为 Web 应用提供报纸风格的布局能力。
        组件设计遵循少而精、职责明确、无冗余、无歧义的原则。
      </p>

      <h2>核心特性</h2>
      <ul>
        <li><strong>24 列栅格系统</strong> - 灵活的栅格布局，支持精确的列控制</li>
        <li><strong>跨栏布局</strong> - 内容可以跨越多列，实现复杂的报纸排版</li>
        <li><strong>视觉权重系统</strong> - High/Medium/Low 三级权重，自动映射字体大小和样式</li>
        <li><strong>主题系统</strong> - 基于 CSS Variables，支持主题切换和自定义</li>
        <li><strong>响应式设计</strong> - 小屏自动调整为 12-16 列，保持良好的阅读体验</li>
        <li><strong>浮动 Layer</strong> - 支持绝对定位的浮动元素，如广告、拉引等</li>
      </ul>

      <h2>快速开始</h2>

      <h3>安装</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>pnpm add @newspaperui/components @newspaperui/theme</code>
      </pre>

      <h3>基础使用</h3>
      <Demo
        title="简单的报纸布局"
        description="使用 Layout 和 Section 创建基础的栅格布局"
        code={`import { Layout, Section, Article, Headline, BodyText } from '@newspaperui/components';

function MyPage() {
  return (
    <Layout columns={24}>
      <Section columns={8}>
        <Article span={8}>
          <Headline weight="High">主要新闻标题</Headline>
          <BodyText>这是一篇重要的新闻内容...</BodyText>
        </Article>
      </Section>

      <Section columns={16}>
        <Article span={8}>
          <Headline weight="Medium">次要新闻</Headline>
          <BodyText>这是另一篇新闻...</BodyText>
        </Article>
        <Article span={8}>
          <Headline weight="Medium">更多新闻</Headline>
          <BodyText>更多内容...</BodyText>
        </Article>
      </Section>
    </Layout>
  );
}`}
      >
        <Layout columns={24}>
          <Section columns={8}>
            <Article span={8}>
              <Headline weight="High">主要新闻标题</Headline>
              <BodyText>这是一篇重要的新闻内容，使用 High 权重的标题和正文文本。</BodyText>
            </Article>
          </Section>

          <Section columns={16}>
            <Article span={8}>
              <Headline weight="Medium">次要新闻</Headline>
              <BodyText>这是另一篇新闻，使用 Medium 权重。</BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Medium">更多新闻</Headline>
              <BodyText>更多内容在这里展示。</BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>下一步</h2>
      <p>
        探索文档了解更多功能：
      </p>
      <ul>
        <li><a href="/grid-system">栅格系统</a> - 了解 24 列栅格的工作原理</li>
        <li><a href="/components/article">核心组件</a> - 学习 Article、Layer 等核心组件</li>
        <li><a href="/text">文本组件</a> - 掌握视觉权重系统</li>
        <li><a href="/theme">主题系统</a> - 自定义主题和样式</li>
        <li><a href="/examples/spanning">示例</a> - 查看完整的布局示例</li>
      </ul>
    </div>
  );
}
