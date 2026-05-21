'use client';
import Link from 'next/link';
import { Layout, Section, Article, Headline, Subhead, Kicker } from 'newspaperui';

const blocks = [
  {
    href: '/blocks/zh-frontpage',
    lang: 'CHINESE · 中文',
    title: '人民周报 · 头版',
    description: '思源宋体 + 克制朱红 + 紧凑排版。中文报纸传统视觉语言，板块密集，信息密度高。',
    color: '#CC2929',
  },
  {
    href: '/blocks/zh-feature',
    lang: 'CHINESE · 中文',
    title: '副刊 · 文化专题',
    description: '人物访谈与文化评论。深度内容排版，引用密集，多用 Quote 组件。',
    color: '#CC2929',
  },
  {
    href: '/blocks/en-feature',
    lang: 'ENGLISH',
    title: 'The Daily Chronicle · Long-form Feature',
    description: 'Atlantic / New Yorker style long-form editorial. Single-column reading mode with multiple PullQuotes.',
    color: '#1A1A1A',
  },
  {
    href: '/blocks/jp-horizontal',
    lang: 'JAPANESE · 日本語',
    title: '朝日新聞 · 横組み',
    description: 'Modern horizontal Japanese newspaper layout. Noto Serif JP, 24-column grid.',
    color: '#1B2A4A',
  },
  {
    href: '/blocks/jp-vertical',
    lang: 'JAPANESE · 日本語',
    title: '朝日新聞 · 縦組み',
    description: 'Traditional vertical writing-mode (vertical-rl) Japanese layout.',
    color: '#1B2A4A',
  },
  {
    href: '/blocks/zh-editorial',
    lang: 'CHINESE · 中文',
    title: '社论 · 时事评论',
    description: '双栏对开评论文章。引用密集，配以专家点评与读者来信。',
    color: '#CC2929',
  },
];

export default function BlocksIndex() {
  return (
    <Layout columns={24} maxWidth="1400px" padding="3rem 2rem 4rem">
      <Section columns={24} gap="2rem">
        <Article span={24}>
          <div style={{ textAlign: 'center' }}>
            <Kicker>Production-grade Blocks · Copy & Paste</Kicker>
          </div>
          <Headline weight="High" align="center">
            Newspaper Blocks
          </Headline>
          <Subhead weight="Medium" style={{ textAlign: 'center' }}>
            6 complete newspaper layouts in Chinese, English, and Japanese — ready to copy.
          </Subhead>
        </Article>
      </Section>

      <Section columns={24} gap="2rem" style={{ marginTop: '3rem' }}>
        {blocks.map((block, idx) => (
          <Article key={block.href} span={24} style={{ marginBottom: '1.5rem' }}>
            <Link href={block.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div style={{
                border: '1px solid var(--nui-rule-hairline)',
                background: 'var(--nui-bg-surface)',
                padding: '2rem',
                display: 'grid',
                gridTemplateColumns: '1fr 3fr',
                gap: '2rem',
                alignItems: 'center',
              }}>
                <div style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '2rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-family-meta)',
                    fontSize: '11px',
                    fontWeight: 600,
                    fontVariantCaps: 'small-caps',
                    letterSpacing: '0.08em',
                    color: block.color,
                    marginBottom: '0.5rem',
                  }}>
                    {block.lang}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-family-meta)',
                    fontSize: '11px',
                    color: 'var(--nui-text-muted)',
                  }}>
                    Block #{String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: 1.15,
                    color: 'var(--nui-text-primary)',
                    margin: '0 0 0.5rem 0',
                  }}>
                    {block.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: '15px',
                    lineHeight: 1.5,
                    color: 'var(--nui-text-body)',
                    margin: 0,
                  }}>
                    {block.description}
                  </p>
                  <div style={{
                    fontFamily: 'var(--font-family-meta)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--nui-accent-primary)',
                    marginTop: '0.75rem',
                    fontVariantCaps: 'small-caps',
                    letterSpacing: '0.06em',
                  }}>
                    View block →
                  </div>
                </div>
              </div>
            </Link>
          </Article>
        ))}
      </Section>
    </Layout>
  );
}
