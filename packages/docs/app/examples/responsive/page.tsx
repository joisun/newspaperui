'use client';

import { Demo } from '@/components/Demo';
import { Layout, Section, Article } from '@newspaperui/components';
import { Headline, BodyText } from '@newspaperui/components';

export default function ResponsivePage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>响应式布局示例</h1>
      <p className="text-xl text-gray-600">
        展示 NewspaperUI 如何在不同屏幕尺寸下自动调整布局。
      </p>

      <h2>响应式原理</h2>
      <p>
        NewspaperUI 的响应式系统基于栅格列数的动态调整。在不同的屏幕尺寸下，
        栅格系统会自动调整列数，确保内容在各种设备上都能良好显示。
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <h3 className="text-lg font-semibold text-blue-900 mt-0">响应式断点</h3>
        <ul className="mb-0 text-blue-800">
          <li><strong>大屏（≥1024px）</strong>: 24 列</li>
          <li><strong>中屏（768px-1023px）</strong>: 16 列</li>
          <li><strong>小屏（&lt;768px）</strong>: 12 列</li>
        </ul>
      </div>

      <h2>自适应布局示例</h2>
      <p>
        以下示例展示了布局如何在不同屏幕尺寸下自动调整。
        尝试调整浏览器窗口大小查看效果。
      </p>

      <Demo
        title="响应式三栏布局"
        description="大屏显示三栏，中屏显示两栏，小屏显示单栏"
        code={`<Layout columns={24}>
  <Section columns={24}>
    {/* 大屏: 8+8+8, 中屏: 12+12, 小屏: 24 */}
    <Article span={8} className="lg:span-8 md:span-12 sm:span-24">
      <Headline weight="Medium">第一栏</Headline>
      <BodyText>内容自动适应屏幕宽度</BodyText>
    </Article>
    <Article span={8} className="lg:span-8 md:span-12 sm:span-24">
      <Headline weight="Medium">第二栏</Headline>
      <BodyText>响应式布局</BodyText>
    </Article>
    <Article span={8} className="lg:span-8 md:span-12 sm:span-24">
      <Headline weight="Medium">第三栏</Headline>
      <BodyText>自动换行</BodyText>
    </Article>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={8}>
              <Headline weight="Medium">科技新闻</Headline>
              <BodyText>
                在大屏上，这三栏并排显示。在中屏上，变为两栏布局。
                在小屏上，每栏占据全宽，垂直堆叠。
              </BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Medium">财经要闻</Headline>
              <BodyText>
                响应式布局确保内容在所有设备上都能良好显示，
                提供最佳的阅读体验。
              </BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Medium">文化艺术</Headline>
              <BodyText>
                NewspaperUI 的响应式系统会自动处理列宽调整，
                无需手动编写复杂的媒体查询。
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>主次内容响应式</h2>
      <p>
        在响应式布局中，主要内容和次要内容的比例也会自动调整。
      </p>

      <Demo
        title="主次内容自适应"
        description="大屏 16+8，中屏 12+12，小屏全宽堆叠"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <Article span={16}>
      <Headline weight="High">主要内容</Headline>
      <BodyText weight="High">
        主要内容在大屏占据 16 列，在中屏占据 12 列，
        在小屏占据全宽。
      </BodyText>
    </Article>
    <Article span={8}>
      <Headline weight="Low">侧边栏</Headline>
      <BodyText weight="Low">
        侧边栏在大屏占据 8 列，在中屏占据 12 列，
        在小屏移到主内容下方。
      </BodyText>
    </Article>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={16}>
              <Headline weight="High">深度报道</Headline>
              <BodyText weight="High">
                这是主要内容区域，在大屏幕上占据较大的空间。
                当屏幕变小时，布局会自动调整以保持良好的可读性。
              </BodyText>
              <BodyText>
                响应式设计确保用户在任何设备上都能获得最佳的阅读体验。
              </BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Low">相关链接</Headline>
              <BodyText weight="Low">
                • 相关文章 1<br />
                • 相关文章 2<br />
                • 相关文章 3<br />
                • 更多内容...
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>移动优先设计</h2>
      <p>
        NewspaperUI 采用移动优先的设计理念，确保内容在小屏设备上也能完美呈现。
      </p>

      <Demo
        title="移动优先布局"
        description="小屏优化的单栏布局"
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={24}>
              <Headline weight="High">移动端标题</Headline>
              <BodyText>
                在移动设备上，内容占据全宽，提供最佳的阅读体验。
                字体大小和行高也会根据屏幕尺寸自动调整。
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>响应式图片</h2>
      <p>
        图片和媒体元素也会根据容器宽度自动调整大小。
      </p>

      <Demo
        title="响应式媒体"
        description="图片自动适应容器宽度"
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={16}>
              <Headline weight="High">带图片的文章</Headline>
              <div className="bg-gray-200 aspect-video flex items-center justify-center my-4">
                <span className="text-gray-600">响应式图片占位</span>
              </div>
              <BodyText>
                图片会根据容器宽度自动缩放，保持宽高比不变。
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>响应式最佳实践</h2>
      <ul>
        <li>使用相对单位（rem、em）而不是绝对单位（px）</li>
        <li>在小屏设备上简化布局，避免过多的列</li>
        <li>确保文字大小在移动设备上足够大（至少 16px）</li>
        <li>触摸目标（按钮、链接）至少 44x44px</li>
        <li>测试不同设备和屏幕尺寸的显示效果</li>
        <li>考虑横屏和竖屏两种方向</li>
        <li>优化图片和媒体资源的加载性能</li>
      </ul>

      <h2>测试响应式布局</h2>
      <p>
        建议在以下设备和尺寸上测试响应式布局：
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">移动设备</h3>
          <ul className="text-sm space-y-1 mb-0">
            <li>iPhone SE (375px)</li>
            <li>iPhone 12/13 (390px)</li>
            <li>iPhone 14 Pro Max (430px)</li>
            <li>Android 小屏 (360px)</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">平板设备</h3>
          <ul className="text-sm space-y-1 mb-0">
            <li>iPad Mini (768px)</li>
            <li>iPad (810px)</li>
            <li>iPad Pro (1024px)</li>
            <li>Android 平板 (800px)</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">桌面设备</h3>
          <ul className="text-sm space-y-1 mb-0">
            <li>笔记本 (1366px)</li>
            <li>桌面 (1920px)</li>
            <li>大屏 (2560px)</li>
            <li>超宽屏 (3440px)</li>
          </ul>
        </div>
      </div>

      <h2>调试工具</h2>
      <p>
        使用浏览器开发者工具的响应式设计模式测试不同屏幕尺寸：
      </p>
      <ul>
        <li><strong>Chrome DevTools</strong>: Cmd/Ctrl + Shift + M</li>
        <li><strong>Firefox</strong>: Cmd/Ctrl + Shift + M</li>
        <li><strong>Safari</strong>: Develop → Enter Responsive Design Mode</li>
      </ul>

      <h2>性能优化</h2>
      <ul>
        <li>使用懒加载（lazy loading）延迟加载图片</li>
        <li>提供不同尺寸的图片用于不同设备</li>
        <li>使用现代图片格式（WebP、AVIF）</li>
        <li>压缩和优化资源文件</li>
        <li>使用 CDN 加速资源加载</li>
        <li>减少不必要的 JavaScript 和 CSS</li>
      </ul>
    </div>
  );
}
