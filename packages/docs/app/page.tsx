'use client';
import {
  Layout, Section, Article, Masthead, Rule, Folio, IndexBox, Factbox,
  Headline, Subhead, Kicker, BodyText, Byline, Dateline,
  Figure, PullQuote, Footer, BreakingNewsBanner,
} from 'newspaperui';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <Layout columns={24} maxWidth="1400px" padding="1.5rem">
      {/* Breaking News Banner */}
      <BreakingNewsBanner label="NEW">
        v0.1.0 released — 24 components, multi-language blocks, responsive grid, theme customization
      </BreakingNewsBanner>

      {/* Masthead */}
      <Masthead
        variant="classic"
        kicker="Production Newspaper Components for the Modern Web"
        title="NewspaperUI"
        edition="Vol. 01 · No. 1"
        date="May 2026"
        price="MIT License · Open Source"
      />

      {/* Main Content: 5 + 14 + 5 layout */}
      <Section columns={24} gap="1.5rem" style={{ marginTop: '1.5rem' }}>

        {/* Left sidebar: Index + Quick links */}
        <Article span={5} style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '1rem' }}>
          <IndexBox title="Navigate" items={[
            { page: '→', title: 'Docs', headline: 'Grid system & API reference' },
            { page: '→', title: 'Blocks', headline: '6 multi-language demos' },
            { page: '→', title: 'Create', headline: 'Theme customizer' },
            { page: '→', title: 'GitHub', headline: 'Source code & issues' },
          ]} />

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Kicker>Install</Kicker>
          <div style={{ fontFamily: 'var(--font-family-meta)', fontSize: '12px', background: 'var(--nui-bg-surface)', padding: '0.75rem', border: '1px solid var(--nui-rule-hairline)', marginTop: '0.5rem' }}>
            <code>pnpm add newspaperui-components newspaperui-theme</code>
          </div>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Factbox title="At a Glance" variant="highlight">
            <ul style={{ padding: '0 0 0 1em', margin: 0, fontSize: '12px', lineHeight: 1.7 }}>
              <li>24 React components</li>
              <li>CSS Grid + Multi-column</li>
              <li>4 font families</li>
              <li>Warm off-white palette</li>
              <li>Dark mode support</li>
              <li>CJK ready (中/日)</li>
              <li>51 tests passing</li>
            </ul>
          </Factbox>
        </Article>

        {/* Center: Lead story */}
        <Article span={14}>
          <Kicker style={{ textAlign: 'center' }}>Design System · Open Source</Kicker>
          <Headline weight="High" align="center">
            Print-Grade Typography Meets the Modern Web
          </Headline>
          <Subhead weight="High" style={{ textAlign: 'center', marginTop: 0 }}>
            24 components inspired by InDesign, built for React. Real multi-column flow, drop caps, small caps, old-style figures — the full newspaper toolkit.
          </Subhead>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '0.5rem 0 1.5rem', alignItems: 'baseline' }}>
            <Byline>By the NewspaperUI Team</Byline>
          </div>

          <Figure
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
            alt="Newspaper printing press"
            caption="From Gutenberg to Grid: newspaper typography traditions, now available as React components."
            credit="Unsplash"
          />

          <BodyText weight="High" columns={3} dropCap style={{ marginTop: '1.5rem' }}>
            <p><Dateline>Open Source —</Dateline> NewspaperUI brings the precision of professional newspaper typesetting to web development. Built on a 24-column CSS Grid foundation with CSS Multi-column text flow, it reproduces the dense, information-rich layouts that have defined print journalism for centuries.</p>
            <p>The library&#39;s visual weight system — borrowed from InDesign&#39;s paragraph styles — drives all typography from a single data source. Change one value in the visual-weights mapping, and every Headline, Subhead, and BodyText component updates globally. This is design-token architecture taken to its logical conclusion.</p>
            <p>Typography details that most web frameworks ignore are first-class citizens here: true OpenType small caps (not faked with text-transform), old-style figures that blend with body text, hanging punctuation, proper paragraph indentation (no space between paragraphs, first-line indent from paragraph two), and drop caps that actually work with CSS ::first-letter.</p>
            <p>The multi-column flow is real CSS columns — text reflows naturally across 2, 3, or 4 columns with hairline rules between them. Pull quotes span all columns. Figures break cleanly. Orphans and widows are controlled. This is how InDesign works, translated to the browser.</p>
            <p>Four preset themes ship out of the box: Classic NYT (warm off-white, Cormorant Garamond masthead), The Times (ink-blue accent), Modern Dark (warm brown-black), and Swiss Modern (Helvetica-clean). The Create page lets you customize every token and export a CSS file for your project.</p>
          </BodyText>

          <PullQuote weight="High" author="Design Philosophy" align="center" style={{ margin: '2rem 0' }}>
            Components should be few, precise, and unambiguous. Every prop maps to a real newspaper concept.
          </PullQuote>

          <BodyText weight="High" columns={2}>
            <p>Multi-language support is built in from day one. Chinese layouts use Noto Serif SC with restrained red accents (masthead and kickers only). Japanese layouts support both horizontal (yokogumi) and traditional vertical (tategumi) writing modes. German blackletter mastheads use UnifrakturMaguntia.</p>
            <p>The responsive system uses CSS media queries injected per-Section, so column counts adapt to viewport width without JavaScript. Font sizes use clamp() for fluid scaling between mobile and desktop. No runtime overhead, no layout shift.</p>
          </BodyText>
        </Article>

        {/* Right sidebar: Demo previews */}
        <Article span={5} style={{ borderLeft: '1px solid var(--nui-rule-hairline)', paddingLeft: '1rem' }}>
          <Kicker>Live Blocks</Kicker>
          <Headline weight="Low" as="h3" style={{ marginTop: '0.25rem' }}>Multi-language Demos</Headline>

          {/* Mini Chinese preview */}
          <Link href="/blocks/zh-frontpage" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginTop: '1rem' }}>
            <div style={{ border: '1px solid var(--nui-rule-hairline)', padding: '0.75rem', background: 'var(--nui-bg-surface)', marginBottom: '0.75rem' }}>
              <div style={{ fontFamily: 'var(--font-family-cjk-serif)', fontSize: '18px', fontWeight: 900, color: '#CC2929', lineHeight: 1.2, marginBottom: '0.25rem' }}>人民周报</div>
              <div style={{ fontFamily: 'var(--font-family-cjk-serif)', fontSize: '11px', color: 'var(--nui-text-body)', lineHeight: 1.5 }}>历史性贸易协定昨日签署…</div>
              <div style={{ fontFamily: 'var(--font-family-meta)', fontSize: '9px', color: 'var(--nui-accent-primary)', marginTop: '0.5rem', fontVariantCaps: 'small-caps', letterSpacing: '0.06em' }}>View Chinese Block →</div>
            </div>
          </Link>

          {/* Mini English preview */}
          <Link href="/blocks/en-feature" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{ border: '1px solid var(--nui-rule-hairline)', padding: '0.75rem', background: 'var(--nui-bg-surface)', marginBottom: '0.75rem' }}>
              <div style={{ fontFamily: 'var(--font-family-display)', fontSize: '14px', fontWeight: 600, lineHeight: 1.2, marginBottom: '0.25rem' }}>The Quiet Collapse of the Middle Shelf</div>
              <div style={{ fontFamily: 'var(--font-family-body)', fontSize: '11px', color: 'var(--nui-text-body)', lineHeight: 1.5 }}>How a generation of mid-list authors lost their publishers…</div>
              <div style={{ fontFamily: 'var(--font-family-meta)', fontSize: '9px', color: 'var(--nui-accent-primary)', marginTop: '0.5rem', fontVariantCaps: 'small-caps', letterSpacing: '0.06em' }}>View English Block →</div>
            </div>
          </Link>

          {/* Mini Japanese preview */}
          <Link href="/blocks/jp-vertical" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{ border: '1px solid var(--nui-rule-hairline)', padding: '0.75rem', background: 'var(--nui-bg-surface)', marginBottom: '0.75rem' }}>
              <div style={{ fontFamily: 'var(--font-family-cjk-jp)', fontSize: '16px', fontWeight: 900, lineHeight: 1.2, marginBottom: '0.25rem' }}>朝日新聞</div>
              <div style={{ fontFamily: 'var(--font-family-cjk-jp)', fontSize: '11px', color: 'var(--nui-text-body)', lineHeight: 1.5 }}>歴史的通商協定が成立…</div>
              <div style={{ fontFamily: 'var(--font-family-meta)', fontSize: '9px', color: 'var(--nui-accent-primary)', marginTop: '0.5rem', fontVariantCaps: 'small-caps', letterSpacing: '0.06em' }}>View Japanese Block →</div>
            </div>
          </Link>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          {/* Quick links */}
          <Kicker>More</Kicker>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0 0', fontFamily: 'var(--font-family-meta)', fontSize: '12px', lineHeight: 2 }}>
            <li><Link href="/blocks" style={{ color: 'var(--nui-text-body)', textDecoration: 'none' }}>All 6 Blocks →</Link></li>
            <li><Link href="/examples/nyt-frontpage" style={{ color: 'var(--nui-text-body)', textDecoration: 'none' }}>NYT Front Page →</Link></li>
            <li><Link href="/examples/blackletter-frontpage" style={{ color: 'var(--nui-text-body)', textDecoration: 'none' }}>Blackletter →</Link></li>
            <li><Link href="/create" style={{ color: 'var(--nui-text-body)', textDecoration: 'none' }}>Theme Creator →</Link></li>
            <li><Link href="/grid-system" style={{ color: 'var(--nui-text-body)', textDecoration: 'none' }}>Documentation →</Link></li>
          </ul>
        </Article>
      </Section>

      {/* Bottom section: Component showcase strip */}
      <Section columns={24} divider="top" gap="1rem" style={{ marginTop: '2rem', paddingTop: '1.5rem' }}>
        <Article span={24}>
          <Folio page="B1" section="Components" date="24 total" publication="NewspaperUI" />
        </Article>

        <Article span={6}>
          <Factbox title="Layout (9)">
            <ul style={{ padding: '0 0 0 1em', margin: 0, fontSize: '12px', lineHeight: 1.8 }}>
              <li>Layout</li>
              <li>Section</li>
              <li>Article</li>
              <li>Layer</li>
              <li>Masthead</li>
              <li>Rule</li>
              <li>Footer</li>
              <li>Sidebar</li>
              <li>BreakingNewsBanner</li>
            </ul>
          </Factbox>
        </Article>

        <Article span={6}>
          <Factbox title="Text (10)">
            <ul style={{ padding: '0 0 0 1em', margin: 0, fontSize: '12px', lineHeight: 1.8 }}>
              <li>Headline</li>
              <li>Subhead</li>
              <li>Kicker</li>
              <li>BodyText</li>
              <li>Quote</li>
              <li>Byline</li>
              <li>Dateline</li>
              <li>Caption</li>
              <li>AuthorCard</li>
              <li>JumpLine</li>
            </ul>
          </Factbox>
        </Article>

        <Article span={6}>
          <Factbox title="Media (4)">
            <ul style={{ padding: '0 0 0 1em', margin: 0, fontSize: '12px', lineHeight: 1.8 }}>
              <li>Image</li>
              <li>Figure</li>
              <li>Video</li>
              <li>PullQuote</li>
            </ul>
          </Factbox>
        </Article>

        <Article span={6}>
          <Factbox title="Data (3)">
            <ul style={{ padding: '0 0 0 1em', margin: 0, fontSize: '12px', lineHeight: 1.8 }}>
              <li>IndexBox</li>
              <li>Factbox</li>
              <li>RelatedArticles</li>
            </ul>
          </Factbox>
        </Article>
      </Section>

      {/* Footer */}
      <Footer
        copyright="© 2026 NewspaperUI"
        edition="MIT License"
        links={[
          { label: 'GitHub', href: 'https://github.com/joisun/newspaperui' },
          { label: 'Documentation', href: '/grid-system' },
          { label: 'Blocks', href: '/blocks' },
          { label: 'Create Theme', href: '/create' },
        ]}
      />
    </Layout>
  );
}