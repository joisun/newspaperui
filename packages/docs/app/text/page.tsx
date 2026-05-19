'use client';

import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';
import { Headline, Subhead, BodyText, Quote, Byline, Caption } from '@newspaperui/components';

export default function TextPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>文本组件</h1>
      <p className="text-xl text-gray-600">
        NewspaperUI 提供了完整的文本组件体系，支持视觉权重系统，自动映射字体大小和样式。
      </p>

      <h2>视觉权重系统</h2>
      <p>
        视觉权重（Visual Weight）是 NewspaperUI 的核心特性之一。
        通过 High、Medium、Low 三级权重，组件会自动应用对应的字体大小、粗细、行高和颜色。
      </p>

      <h2>Headline 组件</h2>
      <p>
        <code>Headline</code> 是标题组件，支持三级视觉权重。
      </p>

      <PropsTable
        data={[
          {
            name: 'weight',
            type: '"High" | "Medium" | "Low"',
            default: '"Medium"',
            description: '视觉权重级别',
          },
          {
            name: 'as',
            type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
            default: '"h2"',
            description: 'HTML 标签类型',
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
            description: '标题内容',
          },
        ]}
      />

      <Demo
        title="标题视觉权重"
        description="展示不同权重的标题效果"
        code={`<Headline weight="High">High 权重标题</Headline>
<Headline weight="Medium">Medium 权重标题</Headline>
<Headline weight="Low">Low 权重标题</Headline>`}
      >
        <div className="space-y-4">
          <Headline weight="High">High 权重标题 (36-48px, 700)</Headline>
          <Headline weight="Medium">Medium 权重标题 (28-34px, 600)</Headline>
          <Headline weight="Low">Low 权重标题 (22-26px, 500)</Headline>
        </div>
      </Demo>

      <h2>Subhead 组件</h2>
      <p>
        <code>Subhead</code> 是副标题组件，用于补充说明主标题。
      </p>

      <PropsTable
        data={[
          {
            name: 'weight',
            type: '"High" | "Medium"',
            default: '"Medium"',
            description: '视觉权重级别',
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
            description: '副标题内容',
          },
        ]}
      />

      <Demo
        title="副标题示例"
        description="标题和副标题的组合使用"
        code={`<Headline weight="High">主标题</Headline>
<Subhead weight="High">副标题说明文字</Subhead>
<BodyText>正文内容...</BodyText>`}
      >
        <div className="space-y-2">
          <Headline weight="High">重大新闻事件</Headline>
          <Subhead weight="High">详细的副标题说明，提供更多上下文信息</Subhead>
          <BodyText>正文内容从这里开始，详细描述新闻事件的来龙去脉...</BodyText>
        </div>
      </Demo>

      <h2>BodyText 组件</h2>
      <p>
        <code>BodyText</code> 是正文文本组件，用于文章主体内容。
      </p>

      <PropsTable
        data={[
          {
            name: 'weight',
            type: '"High" | "Medium" | "Low"',
            default: '"Medium"',
            description: '视觉权重级别',
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
            description: '正文内容',
          },
        ]}
      />

      <Demo
        title="正文文本权重"
        description="不同权重的正文文本"
        code={`<BodyText weight="High">High 权重正文 (16px)</BodyText>
<BodyText weight="Medium">Medium 权重正文 (14-15px)</BodyText>
<BodyText weight="Low">Low 权重正文 (12-14px)</BodyText>`}
      >
        <div className="space-y-3">
          <BodyText weight="High">
            High 权重正文文本，字号 16px，适合重要段落或引言。
          </BodyText>
          <BodyText weight="Medium">
            Medium 权重正文文本，字号 14-15px，适合常规正文内容。
          </BodyText>
          <BodyText weight="Low">
            Low 权重正文文本，字号 12-14px，适合次要说明或注释。
          </BodyText>
        </div>
      </Demo>

      <h2>Quote 组件</h2>
      <p>
        <code>Quote</code> 是引用组件，用于突出显示引用内容。
      </p>

      <PropsTable
        data={[
          {
            name: 'weight',
            type: '"High" | "Medium"',
            default: '"Medium"',
            description: '视觉权重级别',
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
            description: '引用内容',
          },
        ]}
      />

      <Demo
        title="引用文本"
        description="在文章中插入引用"
        code={`<Quote weight="High">
  这是一段重要的引用文字，来自某位专家的观点。
</Quote>`}
      >
        <Quote weight="High">
          这是一段重要的引用文字，来自某位专家的观点。引用组件会自动添加引号样式。
        </Quote>
      </Demo>

      <h2>Byline 和 Caption 组件</h2>
      <p>
        <code>Byline</code> 用于作者署名，<code>Caption</code> 用于图片说明。
      </p>

      <PropsTable
        data={[
          {
            name: 'className',
            type: 'string',
            description: '自定义 CSS 类名',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: true,
            description: '文本内容',
          },
        ]}
      />

      <Demo
        title="署名和图注"
        description="使用 Byline 和 Caption"
        code={`<Headline weight="High">文章标题</Headline>
<Byline>作者：张三 | 2024年1月1日</Byline>
<BodyText>文章内容...</BodyText>
<Caption>图1：示例图片的说明文字</Caption>`}
      >
        <div className="space-y-2">
          <Headline weight="High">重要新闻标题</Headline>
          <Byline>记者：张三 | 2024年1月1日 | 北京报道</Byline>
          <BodyText>文章正文内容从这里开始...</BodyText>
          <div className="bg-gray-200 h-32 flex items-center justify-center">
            <span className="text-gray-500">图片占位</span>
          </div>
          <Caption>图1：新闻现场照片，展示事件发生时的情况</Caption>
        </div>
      </Demo>

      <h2>视觉权重映射表</h2>
      <p>
        以下是完整的视觉权重映射规则（基于 24 列栅格）：
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-2 px-3">组件</th>
              <th className="text-left py-2 px-3">权重</th>
              <th className="text-left py-2 px-3">字号</th>
              <th className="text-left py-2 px-3">字重</th>
              <th className="text-left py-2 px-3">行高</th>
              <th className="text-left py-2 px-3">颜色</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">Headline</td>
              <td className="py-2 px-3">High</td>
              <td className="py-2 px-3">36-48px</td>
              <td className="py-2 px-3">700</td>
              <td className="py-2 px-3">1.1</td>
              <td className="py-2 px-3">#111</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">Headline</td>
              <td className="py-2 px-3">Medium</td>
              <td className="py-2 px-3">28-34px</td>
              <td className="py-2 px-3">600</td>
              <td className="py-2 px-3">1.2</td>
              <td className="py-2 px-3">#111</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">Headline</td>
              <td className="py-2 px-3">Low</td>
              <td className="py-2 px-3">22-26px</td>
              <td className="py-2 px-3">500</td>
              <td className="py-2 px-3">1.3</td>
              <td className="py-2 px-3">#222</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">Subhead</td>
              <td className="py-2 px-3">High</td>
              <td className="py-2 px-3">20-24px</td>
              <td className="py-2 px-3">600</td>
              <td className="py-2 px-3">1.25</td>
              <td className="py-2 px-3">#222</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">Subhead</td>
              <td className="py-2 px-3">Medium</td>
              <td className="py-2 px-3">16-18px</td>
              <td className="py-2 px-3">500</td>
              <td className="py-2 px-3">1.3</td>
              <td className="py-2 px-3">#333</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">BodyText</td>
              <td className="py-2 px-3">High</td>
              <td className="py-2 px-3">16px</td>
              <td className="py-2 px-3">400</td>
              <td className="py-2 px-3">1.5</td>
              <td className="py-2 px-3">#333</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">BodyText</td>
              <td className="py-2 px-3">Medium</td>
              <td className="py-2 px-3">14-15px</td>
              <td className="py-2 px-3">400</td>
              <td className="py-2 px-3">1.5</td>
              <td className="py-2 px-3">#444</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">BodyText</td>
              <td className="py-2 px-3">Low</td>
              <td className="py-2 px-3">12-14px</td>
              <td className="py-2 px-3">400</td>
              <td className="py-2 px-3">1.4</td>
              <td className="py-2 px-3">#555</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>使用建议</h2>
      <ul>
        <li>主标题使用 Headline High 权重</li>
        <li>次要标题使用 Headline Medium 或 Low 权重</li>
        <li>正文使用 BodyText Medium 权重</li>
        <li>重要段落或引言使用 BodyText High 权重</li>
        <li>注释或说明使用 BodyText Low 权重</li>
        <li>引用使用 Quote 组件突出显示</li>
        <li>作者信息使用 Byline 组件</li>
        <li>图片说明使用 Caption 组件</li>
      </ul>
    </div>
  );
}
