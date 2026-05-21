'use client';
import {
  Layout,
  Section,
  Article,
  Headline,
  Subhead,
  BodyText,
  Masthead,
} from 'newspaperui';
import { Demo } from '@/components/Demo';
import { PropsTable } from '@/components/PropsTable';

export default function MastheadPage() {
  return (
    <Layout columns={24} maxWidth="900px" padding="2rem">
      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Medium" as="h1">
            Masthead 报头
          </Headline>
          <Subhead weight="Medium">
            报头是报纸的门面。三个 variant 覆盖经典双线居中、哥特体、现代左对齐三种风格。
          </Subhead>

          <Headline weight="Low" as="h2">
            API
          </Headline>
          <PropsTable
            data={[
              {
                name: 'title',
                type: 'string',
                required: true,
                description: '报名文字。',
              },
              {
                name: 'variant',
                type: "'classic' | 'blackletter' | 'modern'",
                default: "'classic'",
                description: '视觉风格。',
              },
              {
                name: 'kicker',
                type: 'string',
                description: '报名上方的小标（如 "All the News That\'s Fit to Print"）。',
              },
              {
                name: 'edition',
                type: 'string',
                description: '版次（如 "Vol. CLXXII No. 59,678"）。',
              },
              {
                name: 'date',
                type: 'string',
                description: '日期（如 "Monday, May 19, 2026"）。',
              },
              {
                name: 'price',
                type: 'string',
                description: '售价（如 "$3.00"）。',
              },
            ]}
          />

          <Headline weight="Low" as="h2">
            Classic
          </Headline>
          <Demo
            title="classic variant"
            description="双线居中，Cormorant Garamond 衬线。"
            code={`<Masthead
  variant="classic"
  title="The Daily Chronicle"
  kicker="All the News That's Fit to Print"
  edition="Vol. CLXXII No. 59,678"
  date="Monday, May 19, 2026"
  price="$3.00"
/>`}
          >
            <Masthead
              variant="classic"
              title="The Daily Chronicle"
              kicker="All the News That's Fit to Print"
              edition="Vol. CLXXII No. 59,678"
              date="Monday, May 19, 2026"
              price="$3.00"
            />
          </Demo>

          <Headline weight="Low" as="h2">
            Blackletter
          </Headline>
          <Demo
            title="blackletter variant"
            description="UnifrakturMaguntia 哥特体，The Times 风格。"
            code={`<Masthead
  variant="blackletter"
  title="The Evening Standard"
  edition="Late Final Edition"
  date="Monday, May 19, 2026"
  price="£2.50"
/>`}
          >
            <Masthead
              variant="blackletter"
              title="The Evening Standard"
              edition="Late Final Edition"
              date="Monday, May 19, 2026"
              price="£2.50"
            />
          </Demo>

          <Headline weight="Low" as="h2">
            Modern
          </Headline>
          <Demo
            title="modern variant"
            description="左对齐 + accent 强调色，适合数字优先的出版物。"
            code={`<Masthead
  variant="modern"
  title="The Observer"
  kicker="Sunday Edition"
  date="May 19, 2026"
/>`}
          >
            <Masthead
              variant="modern"
              title="The Observer"
              kicker="Sunday Edition"
              date="May 19, 2026"
            />
          </Demo>

          <Headline weight="Low" as="h2">
            使用建议
          </Headline>
          <BodyText weight="Low">
            <p>
              Masthead 默认 <code>gridColumn: 1 / -1</code>，在 Section 内自动全宽。
              通常放在 Layout 的第一个 Section 中，后接 Rule 分隔线。
            </p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}
