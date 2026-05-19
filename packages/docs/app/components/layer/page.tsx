'use client';

import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';
import { Layout, Section, Article, Layer, Headline, BodyText } from '@newspaperui/components';

export default function LayerPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>Layer 组件</h1>
      <p className="text-xl text-gray-600">
        Layer 是浮动层组件，支持绝对定位，用于实现浮动广告、拉引、浮动图片等效果。
      </p>

      <h2>组件说明</h2>
      <p>
        <code>Layer</code> 组件脱离正常的栅格流，使用绝对定位。
        它可以浮动在其他内容之上，常用于实现报纸中的浮动元素，如拉引、浮动广告、浮动图片等。
      </p>

      <h2>API 文档</h2>
      <PropsTable
        data={[
          {
            name: 'position',
            type: '"absolute" | "fixed" | "sticky"',
            default: '"absolute"',
            description: 'CSS position 属性',
          },
          {
            name: 'top',
            type: 'string | number',
            description: '距离顶部的距离',
          },
          {
            name: 'right',
            type: 'string | number',
            description: '距离右侧的距离',
          },
          {
            name: 'bottom',
            type: 'string | number',
            description: '距离底部的距离',
          },
          {
            name: 'left',
            type: 'string | number',
            description: '距离左侧的距离',
          },
          {
            name: 'zIndex',
            type: 'number',
            default: '10',
            description: 'z-index 层级',
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
            description: '浮动层内容',
          },
        ]}
      />

      <h2>基础用法</h2>
      <Demo
        title="浮动拉引"
        description="在文章旁边添加浮动的拉引文字"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <div style={{ position: 'relative', minHeight: '300px' }}>
      <Article span={16}>
        <Headline weight="High">主要文章</Headline>
        <BodyText>
          这是一篇主要文章的内容。旁边有一个浮动的拉引，
          用于突出显示文章中的重要引用或观点。
        </BodyText>
      </Article>

      <Layer position="absolute" top="20px" right="20px" zIndex={10}>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-xs">
          <p className="text-lg font-semibold text-gray-800">
            "这是一段重要的引用文字"
          </p>
        </div>
      </Layer>
    </div>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <div style={{ position: 'relative', minHeight: '300px' }}>
              <Article span={16}>
                <Headline weight="High">主要文章</Headline>
                <BodyText>
                  这是一篇主要文章的内容。旁边有一个浮动的拉引，
                  用于突出显示文章中的重要引用或观点。Layer 组件使用绝对定位，
                  可以精确控制元素的位置。
                </BodyText>
              </Article>

              <Layer position="absolute" top="20px" right="20px" zIndex={10}>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-xs">
                  <p className="text-lg font-semibold text-gray-800">
                    "这是一段重要的引用文字"
                  </p>
                </div>
              </Layer>
            </div>
          </Section>
        </Layout>
      </Demo>

      <h2>浮动广告</h2>
      <Demo
        title="侧边浮动广告"
        description="在页面侧边添加固定位置的广告"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <div style={{ position: 'relative', minHeight: '400px' }}>
      <Article span={18}>
        <Headline weight="High">文章内容</Headline>
        <BodyText>
          这是文章的主要内容区域。右侧有一个浮动的广告位，
          使用 Layer 组件实现。
        </BodyText>
      </Article>

      <Layer position="absolute" top="0" right="0" zIndex={5}>
        <div className="bg-blue-100 border border-blue-300 p-6 w-48">
          <p className="text-center font-bold text-blue-900">广告位</p>
          <p className="text-sm text-blue-700 mt-2">300x250</p>
        </div>
      </Layer>
    </div>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <div style={{ position: 'relative', minHeight: '400px' }}>
              <Article span={18}>
                <Headline weight="High">文章内容</Headline>
                <BodyText>
                  这是文章的主要内容区域。右侧有一个浮动的广告位，
                  使用 Layer 组件实现。广告不会影响正常的文章布局流。
                </BodyText>
                <BodyText>
                  Layer 组件非常适合实现这类需要脱离文档流的元素。
                </BodyText>
              </Article>

              <Layer position="absolute" top="0" right="0" zIndex={5}>
                <div className="bg-blue-100 border border-blue-300 p-6 w-48 text-center">
                  <p className="font-bold text-blue-900">广告位</p>
                  <p className="text-sm text-blue-700 mt-2">300x250</p>
                </div>
              </Layer>
            </div>
          </Section>
        </Layout>
      </Demo>

      <h2>使用建议</h2>
      <ul>
        <li>Layer 的父容器需要设置 <code>position: relative</code></li>
        <li>使用 zIndex 控制多个 Layer 的层叠顺序</li>
        <li>浮动元素不应遮挡重要内容</li>
        <li>考虑移动端的显示效果，必要时隐藏或调整 Layer</li>
        <li>使用 <code>position="fixed"</code> 可以实现固定在视口的效果</li>
        <li>使用 <code>position="sticky"</code> 可以实现粘性定位效果</li>
      </ul>

      <h2>注意事项</h2>
      <ul>
        <li>Layer 脱离了栅格系统，不受 Section 和 Article 的列数限制</li>
        <li>需要手动控制 Layer 的宽度和位置</li>
        <li>在响应式设计中，可能需要根据屏幕尺寸调整 Layer 的位置</li>
        <li>过多的 Layer 可能影响页面性能和可访问性</li>
        <li>确保 Layer 内容在所有屏幕尺寸下都能正常显示</li>
      </ul>

      <h2>典型应用场景</h2>
      <ul>
        <li>浮动拉引 - 突出显示文章中的重要引用</li>
        <li>浮动广告 - 侧边或角落的广告位</li>
        <li>浮动图片 - 文章中的浮动配图</li>
        <li>固定导航 - 使用 fixed 定位的导航栏</li>
        <li>粘性标题 - 使用 sticky 定位的章节标题</li>
      </ul>
    </div>
  );
}
