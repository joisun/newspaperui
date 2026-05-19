'use client';
import {
  Layout,
  Section,
  Article,
  Headline,
  Subhead,
  BodyText,
} from '@newspaperui/components';
import { ThemeToggle } from '@/components/ThemeToggle';

interface Swatch {
  token: string;
  hex: string;
  label?: string;
}

const textSwatches: Swatch[] = [
  { token: '--nui-text-primary', hex: '#1A1A1A', label: '标题、主文本' },
  { token: '--nui-text-body', hex: '#22201C', label: '正文' },
  { token: '--nui-text-secondary', hex: '#4A4742', label: 'Subhead、次级' },
  { token: '--nui-text-muted', hex: '#6E6A63', label: 'Caption、注释' },
  { token: '--nui-text-quote', hex: '#2E2A24', label: 'Quote 主体' },
];

const surfaceSwatches: Swatch[] = [
  { token: '--nui-bg-page', hex: '#F7F4ED', label: 'Warm off-white 页面底' },
  { token: '--nui-bg-surface', hex: '#FBF9F4', label: '次级面板背景' },
  { token: '--nui-rule-hairline', hex: '#C9C2B2', label: '细线分隔' },
  { token: '--nui-rule-decorative', hex: '#1A1A1A', label: '强调线' },
  { token: '--nui-highlight', hex: '#F2E9C8', label: '旧报纸黄' },
];

const accentSwatches: Swatch[] = [
  { token: '--nui-accent-primary', hex: '#7A1F1F', label: 'Brick red, Kicker / Masthead 强调' },
  { token: '--nui-accent-ink-blue', hex: '#1B2A4A', label: 'The Times 蓝' },
  { token: '--nui-highlight', hex: '#F2E9C8', label: '高亮底色' },
];

interface FontFamily {
  token: string;
  sample: string;
  description: string;
}

const families: FontFamily[] = [
  {
    token: '--font-family-masthead',
    sample: 'The Daily Chronicle',
    description: 'Cormorant Garamond — 报头',
  },
  {
    token: '--font-family-blackletter',
    sample: 'The Daily Chronicle',
    description: 'UnifrakturMaguntia — Blackletter preset',
  },
  {
    token: '--font-family-display',
    sample: 'A Quiet Revolution',
    description: 'Source Serif 4 — Display 大字头条',
  },
  {
    token: '--font-family-headline',
    sample: 'Whitehall confirms review',
    description: 'Source Serif 4 — Headline / Subhead',
  },
  {
    token: '--font-family-body',
    sample: 'In Manchester, regional officials greeted the announcement.',
    description: 'Source Serif 4 — 正文',
  },
  {
    token: '--font-family-meta',
    sample: 'BY ALICE SMITH · LONDON',
    description: 'Inter — small-caps 元信息',
  },
];

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '0.75rem',
        margin: '1rem 0 1.5rem',
      }}
    >
      {swatches.map((s) => (
        <div
          key={s.token}
          style={{ border: '1px solid var(--nui-rule-hairline)', overflow: 'hidden' }}
        >
          <div style={{ background: s.hex, height: '64px' }} />
          <div
            style={{
              padding: '0.5rem 0.75rem',
              fontFamily: 'var(--font-family-meta)',
              fontSize: '11px',
              background: 'var(--nui-bg-surface)',
            }}
          >
            <code style={{ display: 'block', fontSize: '11px' }}>{s.token}</code>
            <div
              style={{
                color: 'var(--nui-text-muted)',
                marginTop: '0.15rem',
                letterSpacing: '0.04em',
              }}
            >
              {s.hex}
              {s.label ? ` · ${s.label}` : ''}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ThemePage() {
  return (
    <Layout columns={24} maxWidth="900px" padding="2rem">
      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Medium" as="h1">
            主题与颜色
          </Headline>
          <Subhead weight="Medium">
            设计哲学：暖灰系 + warm off-white。不使用纯黑（#000）也不使用纯白（#FFF），
            把屏幕配色带回纸面的温度。
          </Subhead>

          <Headline weight="Low" as="h2">
            主题切换
          </Headline>
          <BodyText weight="Low">
            <p>
              点击切换深色模式。深色基调采用暖深棕黑（#14110D）而非冷蓝黑，保持报纸的纸性触感。
            </p>
          </BodyText>
          <div style={{ margin: '1rem 0 2rem' }}>
            <ThemeToggle />
          </div>

          <Headline weight="Low" as="h2">
            文字色 token
          </Headline>
          <SwatchGrid swatches={textSwatches} />

          <Headline weight="Low" as="h2">
            背景与分隔线 token
          </Headline>
          <SwatchGrid swatches={surfaceSwatches} />

          <Headline weight="Low" as="h2">
            强调色 token
          </Headline>
          <SwatchGrid swatches={accentSwatches} />

          <Headline weight="Low" as="h2">
            字体家族
          </Headline>
          <BodyText weight="Low">
            <p>
              全部经典严肃风字体：Cormorant Garamond 承担报头与展示，Source Serif 4
              贯穿正文与标题，Inter 处理 small-caps 元信息。Blackletter preset 通过
              UnifrakturMaguntia 切入哥特报头。
            </p>
          </BodyText>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              margin: '1rem 0 2rem',
            }}
          >
            {families.map((f) => (
              <div
                key={f.token}
                style={{
                  borderTop: '1px solid var(--nui-rule-hairline)',
                  paddingTop: '0.75rem',
                }}
              >
                <div
                  className="nui-small-caps"
                  style={{
                    fontFamily: 'var(--font-family-meta)',
                    fontSize: '11px',
                    color: 'var(--nui-text-muted)',
                    letterSpacing: '0.08em',
                    marginBottom: '0.25rem',
                  }}
                >
                  {f.token} &middot; {f.description}
                </div>
                <div
                  style={{
                    fontFamily: `var(${f.token})`,
                    fontSize: '32px',
                    color: 'var(--nui-text-primary)',
                    lineHeight: 1.1,
                  }}
                >
                  {f.sample}
                </div>
              </div>
            ))}
          </div>
        </Article>
      </Section>
    </Layout>
  );
}
