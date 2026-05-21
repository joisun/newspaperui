'use client';

import {
  Layout,
  Section,
  Article,
  Masthead,
  Headline,
  Subhead,
  Kicker,
  BodyText,
} from 'newspaperui-components';
import Link from 'next/link';

const demos = [
  {
    href: '/blocks/zh-frontpage',
    lang: '中文 · Chinese',
    title: '人民周报 · 头版',
    description: '思源宋体 + 克制朱红 + 紧凑排版。中文报纸传统视觉语言。',
    color: '#CC2929',
  },
  {
    href: '/blocks/zh-feature',
    lang: '中文 · Chinese',
    title: '人民周报 · 副刊专题',
    description: '深度专题排版：访谈、人物、文化评论。',
    color: '#CC2929',
  },
  {
    href: '/examples/nyt-frontpage',
    lang: 'English',
    title: 'The Daily Chronicle · NYT Style',
    description:
      'Classic American serious newspaper. Cormorant Garamond masthead, multi-column flow with drop cap.',
    color: '#1A1A1A',
  },
  {
    href: '/blocks/en-feature',
    lang: 'English',
    title: 'The Daily Chronicle · Long-form Feature',
    description: 'Editorial long-form piece with pull quotes and editorial design.',
    color: '#1A1A1A',
  },
  {
    href: '/blocks/jp-horizontal',
    lang: '日本語 · Japanese',
    title: '朝日新聞 · 横組み',
    description: 'Modern horizontal Japanese newspaper layout. Noto Serif JP.',
    color: '#1B2A4A',
  },
  {
    href: '/blocks/jp-vertical',
    lang: '日本語 · Japanese',
    title: '朝日新聞 · 縦組み',
    description: 'Traditional vertical writing-mode Japanese layout.',
    color: '#1B2A4A',
  },
  {
    href: '/examples/blackletter-frontpage',
    lang: 'Deutsch',
    title: 'Die Frankfurter Zeitung',
    description: 'Blackletter masthead with UnifrakturMaguntia. German broadsheet tradition.',
    color: '#1A1A1A',
  },
];

export default function LandingPage() {
  return (
    <Layout columns={24} maxWidth="1400px" padding="3rem 2rem 4rem">
      <Masthead
        variant="classic"
        kicker="Production Newspaper Components"
        title="NewspaperUI"
        edition="Vol. 01 · No. 1"
        date="May 2026"
        price="MIT License"
      />

      <Section columns={24} gap="2rem" style={{ marginTop: '3rem' }}>
        <Article span={6}>
          <Kicker>About</Kicker>
          <Headline weight="Low" as="h2" style={{ marginTop: 0 }}>
            生产级报纸布局组件库
          </Headline>
          <BodyText weight="Medium">
            <p>
              参考 InDesign 与经典严肃风排版传统（NYT / The Times / FAZ），基于 24 列栅格、CSS Grid +
              Multi-column 双层机制构建。
            </p>
          </BodyText>
        </Article>
        <Article span={12}>
          <Headline weight="Medium" align="center">
            Print-grade typography, on the modern web.
          </Headline>
          <Subhead
            weight="High"
            style={{ textAlign: 'center', marginTop: '0.5rem' }}
          >
            18 components, 24-column grid, classic serif typography, real multi-column flow.
          </Subhead>
        </Article>
        <Article span={6}>
          <Kicker>Quick Start</Kicker>
          <Headline weight="Low" as="h2" style={{ marginTop: 0 }}>
            Install
          </Headline>
          <BodyText weight="Medium">
            <p style={{ fontFamily: 'var(--font-family-meta)', fontSize: '13px' }}>
              <code>pnpm add newspaperui-components newspaperui-theme</code>
            </p>
          </BodyText>
          <div style={{ marginTop: '1rem' }}>
            <Link
              href="/grid-system"
              style={{
                fontFamily: 'var(--font-family-meta)',
                fontSize: '13px',
                color: 'var(--nui-accent-primary)',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Documentation →
            </Link>
          </div>
        </Article>
      </Section>

      <Section
        columns={24}
        divider="top"
        gap="2rem"
        style={{ marginTop: '4rem', paddingTop: '3rem' }}
      >
        <Article span={24}>
          <div style={{ textAlign: 'center' }}>
            <Kicker>Live Demos · Production-grade Examples</Kicker>
          </div>
          <Headline weight="High" align="center">
            Multi-language Newspaper Showcase
          </Headline>
          <Subhead weight="Medium" style={{ textAlign: 'center' }}>
            7 complete newspaper layouts in Chinese, English, German, and Japanese
          </Subhead>
        </Article>
      </Section>

      <Section columns={24} gap="2rem" style={{ marginTop: '2rem' }}>
        {demos.map((demo, idx) => (
          <Article key={demo.href} span={24} style={{ marginBottom: '2rem' }}>
            <Link
              href={demo.href}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div
                style={{
                  border: '1px solid var(--nui-rule-hairline)',
                  background: 'var(--nui-bg-surface)',
                  padding: '2rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 3fr',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    borderRight: '1px solid var(--nui-rule-hairline)',
                    paddingRight: '2rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-family-meta)',
                      fontSize: '11px',
                      fontWeight: 600,
                      fontVariantCaps: 'small-caps',
                      letterSpacing: '0.08em',
                      color: demo.color,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {demo.lang}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-family-meta)',
                      fontSize: '11px',
                      color: 'var(--nui-text-muted)',
                    }}
                  >
                    Demo #{String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: '28px',
                      fontWeight: 600,
                      lineHeight: 1.15,
                      color: 'var(--nui-text-primary)',
                      margin: '0 0 0.5rem 0',
                    }}
                  >
                    {demo.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '15px',
                      lineHeight: 1.5,
                      color: 'var(--nui-text-body)',
                      margin: 0,
                    }}
                  >
                    {demo.description}
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-family-meta)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--nui-accent-primary)',
                      marginTop: '0.75rem',
                      fontVariantCaps: 'small-caps',
                      letterSpacing: '0.06em',
                    }}
                  >
                    View demo →
                  </div>
                </div>
              </div>
            </Link>
          </Article>
        ))}
      </Section>

      <Section
        columns={24}
        divider="top"
        gap="2rem"
        style={{ marginTop: '4rem', paddingTop: '2rem' }}
      >
        <Article span={12}>
          <Kicker>Design Philosophy</Kicker>
          <Headline weight="Low" as="h3" style={{ marginTop: 0 }}>
            Print Tradition, Web Implementation
          </Headline>
          <BodyText weight="Low">
            <p>
              NewspaperUI 借鉴 InDesign
              段落样式系统的设计 token 思想，把字体、字号、字重、行高、颜色、间距统一收敛到视觉权重映射表（visualWeights）。组件从单一数据源读取样式，修改一处即全局生效。
            </p>
            <p>
              排版机制采用 Hybrid 双层：CSS Grid 负责大块布局，CSS Multi-column 负责正文流。这是报纸排版传统在 Web
              上的最佳还原。
            </p>
          </BodyText>
        </Article>
        <Article span={12}>
          <Kicker>Tech Stack</Kicker>
          <Headline weight="Low" as="h3" style={{ marginTop: 0 }}>
            React 18 · TypeScript 5 · CSS Grid + Multi-column
          </Headline>
          <BodyText weight="Low">
            <p>
              4 packages：<code>newspaperui-theme</code>、<code>newspaperui-utils</code>、
              <code>newspaperui-components</code>（18 components）、<code>@newspaperui/docs</code>。
            </p>
            <p>Built with pnpm workspaces + Turborepo. Vite for libraries, Next.js 15 for docs.</p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}
