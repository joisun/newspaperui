'use client';

import { Demo } from '@/components/Demo';
import { Layout, Section, Article, Layer } from '@newspaperui/components';
import { Headline, Subhead, BodyText, Quote } from '@newspaperui/components';

export default function SpanningPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>跨栏布局示例</h1>
      <p className="text-xl text-gray-600">
        展示如何使用 NewspaperUI 实现复杂的跨栏报纸布局。
      </p>

      <h2>经典报纸头版布局</h2>
      <p>
        这是一个典型的报纸头版布局，包含主要新闻、次要新闻和浮动拉引。
      </p>

      <Demo
        title="报纸头版"
        description="主新闻占据 16 列，侧边栏占据 8 列，带浮动拉引"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <div style={{ position: 'relative', minHeight: '600px' }}>
      {/* 主新闻 - 16 列 */}
      <Article span={16}>
        <Headline weight="High">重大新闻标题占据主要版面</Headline>
        <Subhead weight="High">
          副标题提供更多背景信息和上下文
        </Subhead>
        <BodyText weight="High">
          这是主要新闻的正文内容。在报纸布局中，最重要的新闻通常占据最大的版面，
          使用最大的字号和最粗的字重。这样的布局能够立即吸引读者的注意力。
        </BodyText>
        <BodyText>
          新闻的后续段落继续详细描述事件的发展。通过合理的跨栏布局，
          我们可以在有限的版面中呈现丰富的内容。
        </BodyText>
      </Article>

      {/* 侧边栏 - 8 列 */}
      <Article span={8}>
        <Headline weight="Medium">次要新闻</Headline>
        <BodyText weight="Medium">
          侧边栏的新闻使用较小的字号，适合放置次要但仍然重要的内容。
        </BodyText>
      </Article>

      {/* 浮动拉引 */}
      <Layer position="absolute" top="100px" right="20px" zIndex={10}>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-xs">
          <Quote weight="High">
            "这是一段重要的引用，用于突出文章中的关键观点"
          </Quote>
        </div>
      </Layer>
    </div>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <div style={{ position: 'relative', minHeight: '600px' }}>
              <Article span={16}>
                <Headline weight="High">重大新闻标题占据主要版面</Headline>
                <Subhead weight="High">
                  副标题提供更多背景信息和上下文
                </Subhead>
                <BodyText weight="High">
                  这是主要新闻的正文内容。在报纸布局中，最重要的新闻通常占据最大的版面，
                  使用最大的字号和最粗的字重。这样的布局能够立即吸引读者的注意力。
                </BodyText>
                <BodyText>
                  新闻的后续段落继续详细描述事件的发展。通过合理的跨栏布局，
                  我们可以在有限的版面中呈现丰富的内容。
                </BodyText>
              </Article>

              <Article span={8}>
                <Headline weight="Medium">次要新闻</Headline>
                <BodyText weight="Medium">
                  侧边栏的新闻使用较小的字号，适合放置次要但仍然重要的内容。
                </BodyText>
              </Article>

              <Layer position="absolute" top="100px" right="20px" zIndex={10}>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-xs">
                  <Quote weight="High">
                    "这是一段重要的引用，用于突出文章中的关键观点"
                  </Quote>
                </div>
              </Layer>
            </div>
          </Section>
        </Layout>
      </Demo>

      <h2>三栏等宽布局</h2>
      <p>
        将 24 列平均分为三个 8 列的区域，适合展示多个同等重要的内容。
      </p>

      <Demo
        title="三栏布局"
        description="三个 8 列的文章并排显示"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <Article span={8}>
      <Headline weight="Medium">第一栏标题</Headline>
      <BodyText>第一栏的内容...</BodyText>
    </Article>
    <Article span={8}>
      <Headline weight="Medium">第二栏标题</Headline>
      <BodyText>第二栏的内容...</BodyText>
    </Article>
    <Article span={8}>
      <Headline weight="Medium">第三栏标题</Headline>
      <BodyText>第三栏的内容...</BodyText>
    </Article>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={8}>
              <Headline weight="Medium">科技新闻</Headline>
              <BodyText>
                最新的科技动态和创新成果，展示技术发展的最新趋势。
              </BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Medium">财经要闻</Headline>
              <BodyText>
                市场动态和经济分析，帮助读者了解财经领域的重要信息。
              </BodyText>
            </Article>
            <Article span={8}>
              <Headline weight="Medium">文化艺术</Headline>
              <BodyText>
                文化活动和艺术展览，丰富读者的精神文化生活。
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>不对称布局</h2>
      <p>
        使用不同的列宽组合创建视觉层次，突出重要内容。
      </p>

      <Demo
        title="12 + 12 列布局"
        description="两个等宽的 12 列区域"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <Article span={12}>
      <Headline weight="High">左侧主要内容</Headline>
      <BodyText weight="High">
        占据 12 列的主要内容区域...
      </BodyText>
    </Article>
    <Article span={12}>
      <Headline weight="High">右侧主要内容</Headline>
      <BodyText weight="High">
        同样占据 12 列的内容区域...
      </BodyText>
    </Article>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={12}>
              <Headline weight="High">深度报道：城市发展</Headline>
              <BodyText weight="High">
                这是一篇深度报道，详细分析城市发展的现状和未来趋势。
                12 列的宽度提供了良好的阅读体验。
              </BodyText>
            </Article>
            <Article span={12}>
              <Headline weight="High">专题调查：环境保护</Headline>
              <BodyText weight="High">
                环境保护专题调查报告，展示环保工作的成果和挑战。
                与左��内容形成对比和呼应。
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>复杂混合布局</h2>
      <p>
        组合多种列宽，创建丰富的视觉层次和内容结构。
      </p>

      <Demo
        title="混合列宽布局"
        description="6 + 12 + 6 列的组合布局"
        code={`<Layout columns={24}>
  <Section columns={24}>
    <Article span={6}>
      <Headline weight="Low">侧边栏</Headline>
      <BodyText weight="Low">简短内容</BodyText>
    </Article>
    <Article span={12}>
      <Headline weight="High">主要内容</Headline>
      <BodyText>详细的主要内容...</BodyText>
    </Article>
    <Article span={6}>
      <Headline weight="Low">另一侧边栏</Headline>
      <BodyText weight="Low">补充信息</BodyText>
    </Article>
  </Section>
</Layout>`}
      >
        <Layout columns={24}>
          <Section columns={24}>
            <Article span={6}>
              <Headline weight="Low">快讯</Headline>
              <BodyText weight="Low">
                • 新闻 1<br />
                • 新闻 2<br />
                • 新闻 3
              </BodyText>
            </Article>
            <Article span={12}>
              <Headline weight="High">今日焦点</Headline>
              <BodyText>
                主要新闻内容占据中间的 12 列，提供充足的空间展示详细信息。
                两侧的 6 列侧边栏提供补充内容和快讯。
              </BodyText>
            </Article>
            <Article span={6}>
              <Headline weight="Low">相关链接</Headline>
              <BodyText weight="Low">
                • 链接 1<br />
                • 链接 2<br />
                • 链接 3
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <h2>布局技巧</h2>
      <ul>
        <li>使用较大的 span 值（12-16 列）突出重要内容</li>
        <li>侧边栏使用较小的 span 值（4-8 列）</li>
        <li>保持布局的平衡感，避免过于拥挤或空旷</li>
        <li>使用浮动 Layer 添加视觉亮点</li>
        <li>通过视觉权重系统创建清晰的信息层次</li>
        <li>考虑内容的重要性和阅读顺序</li>
      </ul>

      <h2>注意事项</h2>
      <ul>
        <li>确保所有 Article 的 span 总和不超过 Section 的 columns</li>
        <li>在小屏设备上测试布局的响应式效果</li>
        <li>避免过多的跨栏，保持布局的可读性</li>
        <li>使用一致的列宽比例，如 8:16、6:12:6 等</li>
        <li>浮动元素不要遮挡重要内容</li>
      </ul>
    </div>
  );
}
