'use client';
import {
  Layout,
  Section,
  Article,
  Headline,
  Subhead,
  BodyText,
  Figure,
  PullQuote,
} from 'newspaperui';
import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';

export default function MediaPage() {
  return (
    <Layout columns={24} maxWidth="900px" padding="2rem">
      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Medium" as="h1">
            媒体组件
          </Headline>
          <Subhead weight="Medium">
            Image、Figure、Video、PullQuote — 报纸版面中的视觉元素。
          </Subhead>

          <Headline weight="Low" as="h2">
            Image
          </Headline>
          <BodyText weight="Low">
            <p>
              基础图片组件。<code>display: block; width: 100%</code>，在 Section 栅格内通过
              span 跨栏。
            </p>
          </BodyText>
          <PropsTable
            data={[
              { name: 'src', type: 'string', required: true, description: '图片 URL。' },
              { name: 'alt', type: 'string', required: true, description: '替代文本。' },
              { name: 'span', type: 'number', description: '跨栏数。' },
            ]}
          />

          <Headline weight="Low" as="h2">
            Figure
          </Headline>
          <BodyText weight="Low">
            <p>
              组合 Image + Caption + Credit 的语义容器。自动渲染 figcaption。
            </p>
          </BodyText>
          <PropsTable
            data={[
              { name: 'src', type: 'string', required: true, description: '图片 URL。' },
              { name: 'alt', type: 'string', required: true, description: '替代文本。' },
              { name: 'caption', type: 'string', description: '图片说明。' },
              { name: 'credit', type: 'string', description: '摄影师/来源（small-caps 渲染）。' },
              { name: 'span', type: 'number', description: '跨栏数。' },
            ]}
          />
          <Demo
            title="Figure 带 caption 和 credit"
            description="使用 Unsplash 占位图演示完整效果。"
            code={`<Figure
  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=400&fit=crop"
  alt="Newspapers on a wooden table"
  caption="A view of the morning editions, arranged on the newsroom table."
  credit="Photograph by Roman Kraft / Unsplash"
/>`}
          >
            <Figure
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=400&fit=crop"
              alt="Newspapers on a wooden table"
              caption="A view of the morning editions, arranged on the newsroom table."
              credit="Photograph by Roman Kraft / Unsplash"
            />
          </Demo>

          <Headline weight="Low" as="h2">
            Video
          </Headline>
          <PropsTable
            data={[
              { name: 'src', type: 'string', required: true, description: '视频 URL。' },
              { name: 'poster', type: 'string', description: '封面图 URL。' },
              { name: 'caption', type: 'string', description: '视频说明。' },
              { name: 'credit', type: 'string', description: '来源。' },
              { name: 'controls', type: 'boolean', default: 'true', description: '显示播放控件。' },
              { name: 'span', type: 'number', description: '跨栏数。' },
            ]}
          />
          <BodyText weight="Low">
            <p>
              Video 组件与 Figure 结构类似，包裹 <code>&lt;video&gt;</code> 标签并附带
              caption/credit。
            </p>
          </BodyText>

          <Headline weight="Low" as="h2">
            PullQuote
          </Headline>
          <BodyText weight="Low">
            <p>
              上下双 hairline + Display 字体的拉引组件。在多栏 BodyText 内设置
              <code>spanAllColumns</code> 可跨所有栏（通过 <code>column-span: all</code>）。
            </p>
          </BodyText>
          <PropsTable
            data={[
              { name: 'weight', type: "'High' | 'Medium'", default: "'High'", description: '视觉权重。' },
              { name: 'span', type: 'number', description: '在 Section 栅格内跨栏。' },
              { name: 'spanAllColumns', type: 'boolean', default: 'false', description: '在多栏 BodyText 内跨所有栏。' },
              { name: 'author', type: 'string', description: '引用来源。' },
              { name: 'align', type: "'left' | 'center'", default: "'left'", description: '文本对齐。' },
            ]}
          />

          <Demo
            title="PullQuote 独立使用"
            code={`<PullQuote author="Senior Cabinet Official">
  We have lobbied for this kind of clarity for the better part of a decade.
</PullQuote>`}
          >
            <PullQuote author="Senior Cabinet Official">
              We have lobbied for this kind of clarity for the better part of a decade.
            </PullQuote>
          </Demo>

          <Demo
            title="PullQuote 在多栏 BodyText 内跨栏"
            description="spanAllColumns 使 PullQuote 通过 column-span: all 跨越所有文字栏。"
            code={`<BodyText columns={3}>
  <p>...</p>
  <PullQuote spanAllColumns author="...">...</PullQuote>
  <p>...</p>
</BodyText>`}
          >
            <BodyText columns={3}>
              <p>
                Whitehall officials confirmed late Tuesday that the long-anticipated review
                of national infrastructure funding will be tabled before the recess. The
                248-page document, drafted across three departments, recommends a
                recalibration of regional priorities and a measured shift toward rail
                electrification.
              </p>
              <PullQuote spanAllColumns author="Senior Cabinet Official">
                The most coherent strategic blueprint in a generation.
              </PullQuote>
              <p>
                Markets responded cautiously through the morning session. The pound traded
                sideways against the dollar, gilts firmed by three basis points, and the
                FTSE 100 closed marginally lower as defensive sectors absorbed the
                day&rsquo;s modest outflows.
              </p>
              <p>
                In Manchester, regional officials greeted the announcement with measured
                optimism. The mayor&rsquo;s office is expected to issue a formal response by
                week&rsquo;s end, focusing on commitments to the trans-Pennine corridor.
              </p>
            </BodyText>
          </Demo>
        </Article>
      </Section>
    </Layout>
  );
}
