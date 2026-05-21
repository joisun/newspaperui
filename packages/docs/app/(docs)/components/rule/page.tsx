'use client';
import {
  Layout,
  Section,
  Article,
  Headline,
  Subhead,
  BodyText,
  Rule,
} from 'newspaperui-components';
import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';

export default function RulePage() {
  return (
    <Layout columns={24} maxWidth="900px" padding="2rem">
      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Medium" as="h1">
            Rule 分隔线
          </Headline>
          <Subhead weight="Medium">
            显式分隔线组件。三个 variant 覆盖 hairline、double、thick，支持水平和垂直方向。
          </Subhead>

          <Headline weight="Low" as="h2">
            API
          </Headline>
          <PropsTable
            data={[
              {
                name: 'variant',
                type: "'hairline' | 'double' | 'thick'",
                default: "'hairline'",
                description: '线型。',
              },
              {
                name: 'orientation',
                type: "'horizontal' | 'vertical'",
                default: "'horizontal'",
                description: '方向。',
              },
              {
                name: 'span',
                type: 'number',
                description: '横向时占多少列。缺省时 1 / -1 全跨。',
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
            ]}
          />

          <Headline weight="Low" as="h2">
            水平方向三种 variant
          </Headline>
          <Demo title="hairline / double / thick" description="水平分隔线对照。">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <BodyText weight="Low">
                  <p>hairline</p>
                </BodyText>
                <Rule variant="hairline" />
              </div>
              <div>
                <BodyText weight="Low">
                  <p>double</p>
                </BodyText>
                <Rule variant="double" />
              </div>
              <div>
                <BodyText weight="Low">
                  <p>thick</p>
                </BodyText>
                <Rule variant="thick" />
              </div>
            </div>
          </Demo>

          <Headline weight="Low" as="h2">
            垂直方向
          </Headline>
          <Demo
            title="垂直分隔线"
            description="在两栏之间放置垂直 Rule。"
            code={`<div style={{ display: 'flex', gap: '1.5rem', height: '120px' }}>
  <div>左栏内容</div>
  <Rule variant="hairline" orientation="vertical" />
  <div>右栏内容</div>
</div>`}
          >
            <div style={{ display: 'flex', gap: '1.5rem', height: '120px', alignItems: 'stretch' }}>
              <div style={{ flex: 1 }}>
                <BodyText weight="Low">
                  <p>
                    Markets responded cautiously through the morning session. The pound
                    traded sideways against the dollar.
                  </p>
                </BodyText>
              </div>
              <Rule variant="hairline" orientation="vertical" />
              <div style={{ flex: 1 }}>
                <BodyText weight="Low">
                  <p>
                    Analysts at three of the City&rsquo;s largest houses framed the move as
                    a holding pattern.
                  </p>
                </BodyText>
              </div>
            </div>
          </Demo>

          <Headline weight="Low" as="h2">
            使用建议
          </Headline>
          <BodyText weight="Low">
            <p>
              Rule 在 Section 栅格内默认 <code>gridColumn: 1 / -1</code> 全跨。
              如果只需要跨部分列，传入 <code>span</code> prop。垂直 Rule 适合放在
              flex 容器中作为栏间分隔。
            </p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}
