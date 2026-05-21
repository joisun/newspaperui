'use client';
import { useState, useCallback } from 'react';
import {
  Layout, Section, Article, Masthead, Rule,
  Headline, Subhead, Kicker, BodyText, Byline, Dateline, Caption,
  PullQuote, Footer,
} from 'newspaperui-components';

// ─── Presets ────────────────────────────────────────────────────────────────

const PRESETS = {
  'Classic NYT': {
    '--nui-bg-page': '#F7F4ED',
    '--nui-bg-surface': '#FBF9F4',
    '--nui-text-primary': '#1A1A1A',
    '--nui-text-body': '#22201C',
    '--nui-text-secondary': '#4A4742',
    '--nui-text-muted': '#6E6A63',
    '--nui-rule-hairline': '#C9C2B2',
    '--nui-rule-decorative': '#1A1A1A',
    '--nui-accent-primary': '#7A1F1F',
    '--nui-gutter': '1.5rem',
    '--font-family-masthead': '"Cormorant Garamond", Georgia, serif',
    '--font-family-body': '"Source Serif 4", Georgia, serif',
    '--font-family-meta': '"Inter", system-ui, sans-serif',
  },
  'The Times': {
    '--nui-bg-page': '#F5F2EB',
    '--nui-bg-surface': '#F9F7F2',
    '--nui-text-primary': '#1C1C1C',
    '--nui-text-body': '#2A2520',
    '--nui-text-secondary': '#4A4540',
    '--nui-text-muted': '#706A62',
    '--nui-rule-hairline': '#C8BFB0',
    '--nui-rule-decorative': '#1C1C1C',
    '--nui-accent-primary': '#1B2A4A',
    '--nui-gutter': '1.25rem',
    '--font-family-masthead': '"Cormorant Garamond", Georgia, serif',
    '--font-family-body': '"Source Serif 4", Georgia, serif',
    '--font-family-meta': '"Inter", system-ui, sans-serif',
  },
  'Modern Dark': {
    '--nui-bg-page': '#14110D',
    '--nui-bg-surface': '#1C1812',
    '--nui-text-primary': '#EDE6D6',
    '--nui-text-body': '#DCD4C2',
    '--nui-text-secondary': '#A89F8C',
    '--nui-text-muted': '#857C6A',
    '--nui-rule-hairline': '#3A352C',
    '--nui-rule-decorative': '#EDE6D6',
    '--nui-accent-primary': '#C97A6E',
    '--nui-gutter': '1.5rem',
    '--font-family-masthead': '"Cormorant Garamond", Georgia, serif',
    '--font-family-body': '"Source Serif 4", Georgia, serif',
    '--font-family-meta': '"Inter", system-ui, sans-serif',
  },
  'Swiss Modern': {
    '--nui-bg-page': '#FFFFFF',
    '--nui-bg-surface': '#F5F5F5',
    '--nui-text-primary': '#000000',
    '--nui-text-body': '#111111',
    '--nui-text-secondary': '#555555',
    '--nui-text-muted': '#888888',
    '--nui-rule-hairline': '#CCCCCC',
    '--nui-rule-decorative': '#000000',
    '--nui-accent-primary': '#E63329',
    '--nui-gutter': '2rem',
    '--font-family-masthead': '"Inter", system-ui, sans-serif',
    '--font-family-body': '"Inter", system-ui, sans-serif',
    '--font-family-meta': '"Inter", system-ui, sans-serif',
  },
} as const;

type PresetName = keyof typeof PRESETS;
type ThemeVars = Record<string, string>;

// ─── Controls ───────────────────────────────────────────────────────────────

const CONTROLS = [
  { label: 'Page Background', key: '--nui-bg-page', type: 'color' },
  { label: 'Primary Text', key: '--nui-text-primary', type: 'color' },
  { label: 'Body Text', key: '--nui-text-body', type: 'color' },
  { label: 'Accent Color', key: '--nui-accent-primary', type: 'color' },
  { label: 'Hairline Rule', key: '--nui-rule-hairline', type: 'color' },
  { label: 'Gutter', key: '--nui-gutter', type: 'select', options: ['1rem', '1.25rem', '1.5rem', '2rem'] },
  {
    label: 'Masthead Font', key: '--font-family-masthead', type: 'select',
    options: [
      '"Cormorant Garamond", Georgia, serif',
      '"Playfair Display", Georgia, serif',
      '"UnifrakturMaguntia", serif',
      '"Inter", system-ui, sans-serif',
    ],
    display: ['Cormorant Garamond', 'Playfair Display', 'UnifrakturMaguntia', 'Inter'],
  },
  {
    label: 'Body Font', key: '--font-family-body', type: 'select',
    options: [
      '"Source Serif 4", Georgia, serif',
      '"Lora", Georgia, serif',
      '"Noto Serif SC", serif',
      '"Inter", system-ui, sans-serif',
    ],
    display: ['Source Serif 4', 'Lora', 'Noto Serif SC', 'Inter'],
  },
] as const;

// ─── CSS Generator ──────────────────────────────────────────────────────────

function generateCSS(vars: ThemeVars): string {
  const lines = Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`).join('\n');
  return `:root {\n${lines}\n}`;
}

// ─── Component Preview ──────────────────────────────────────────────────────

function ComponentPreview({ vars }: { vars: ThemeVars }) {
  const cssVars = Object.fromEntries(
    Object.entries(vars).map(([k, v]) => [k, v])
  ) as React.CSSProperties;

  return (
    <div style={{
      ...cssVars,
      background: vars['--nui-bg-page'],
      minHeight: '100%',
      transition: 'all 0.2s ease',
    }}>
      <Layout columns={24} maxWidth="100%" padding="2rem">
        <Masthead
          variant="classic"
          title="The Daily Chronicle"
          edition="Vol. CXLIX · No. 51,895"
          date="Tuesday, May 20, 2026"
          price="$4.00"
        />
        <Section columns={24}>
          <Article span={24}>
            <Kicker>Capitol · Breaking</Kicker>
            <Headline weight="High">Historic Accord Reshapes Continental Trade</Headline>
            <Subhead weight="High">Negotiators emerge with sweeping framework on tariffs, labor, and emissions</Subhead>
            <Byline>By Eleanor Whitcombe</Byline>
            <Dateline>Brussels</Dateline>
            <BodyText weight="High" columns={2}>
              <p>After eleven consecutive days of negotiation, delegates from twenty-three nations announced a sweeping framework to reorganize commerce across the continent. The accord would harmonize tariff schedules, set common labor standards, and bind signatories to a shared emissions pathway through 2040.</p>
              <p>Officials briefed on the talks said the breakthrough came shortly before midnight, when a dispute over agricultural subsidies was resolved with a side letter granting transitional relief to producers in five smaller economies.</p>
              <p>Markets reacted with measured optimism. The continental composite index closed up 1.2 percent, led by capital-goods makers expected to benefit from infrastructure investment.</p>
            </BodyText>
            <PullQuote weight="High" author="Margarethe Lindqvist, Chief Negotiator" align="center">
              "A long argument that finally became a conversation."
            </PullQuote>
            <Rule variant="hairline" />
            <Rule variant="double" />
            <Rule variant="thick" />
            <Caption credit="Photograph by Jane Doe / Pool">
              Negotiators applaud after the final draft was approved Monday evening.
            </Caption>
          </Article>
        </Section>
        <Footer copyright="© 2026 The Daily Chronicle" edition="Late City Edition" />
      </Layout>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function CreatePage() {
  const [activePreset, setActivePreset] = useState<PresetName>('Classic NYT');
  const [vars, setVars] = useState<ThemeVars>({ ...PRESETS['Classic NYT'] });
  const [copied, setCopied] = useState(false);

  const applyPreset = useCallback((name: PresetName) => {
    setActivePreset(name);
    setVars({ ...PRESETS[name] });
  }, []);

  const updateVar = useCallback((key: string, value: string) => {
    setActivePreset('Custom' as PresetName);
    setVars(prev => ({ ...prev, [key]: value }));
  }, []);

  const css = generateCSS(vars);

  const copyCSS = () => {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCSS = () => {
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newspaper-theme.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(vars, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newspaper-theme.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const metaStyle = { fontFamily: 'var(--font-family-meta)', fontSize: '13px' };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 65px)', overflow: 'hidden', background: 'var(--nui-bg-page)' }}>

      {/* ── Left Panel ── */}
      <aside style={{
        width: '280px',
        flexShrink: 0,
        borderRight: '1px solid var(--nui-rule-hairline)',
        background: 'var(--nui-bg-surface)',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{ padding: '1.5rem 1.5rem 1rem', borderBottom: '1px solid var(--nui-rule-hairline)' }}>
          <div style={{ ...metaStyle, fontVariantCaps: 'small-caps', letterSpacing: '0.08em', color: 'var(--nui-accent-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
            Create Theme
          </div>
          <h2 style={{ fontFamily: 'var(--font-family-display)', fontSize: '20px', fontWeight: 600, margin: 0, color: 'var(--nui-text-primary)' }}>
            Customize
          </h2>
        </div>

        {/* Presets */}
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--nui-rule-hairline)' }}>
          <div style={{ ...metaStyle, color: 'var(--nui-text-muted)', marginBottom: '0.75rem', fontVariantCaps: 'small-caps', letterSpacing: '0.06em' }}>Presets</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {(Object.keys(PRESETS) as PresetName[]).map(name => (
              <button
                key={name}
                onClick={() => applyPreset(name)}
                style={{
                  ...metaStyle,
                  padding: '0.5rem 0.75rem',
                  border: `1px solid ${activePreset === name ? 'var(--nui-rule-decorative)' : 'var(--nui-rule-hairline)'}`,
                  background: activePreset === name ? 'var(--nui-text-primary)' : 'transparent',
                  color: activePreset === name ? 'var(--nui-bg-page)' : 'var(--nui-text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontWeight: activePreset === name ? 600 : 400,
                  transition: 'all 0.15s',
                }}
              >{name}</button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ padding: '1rem 1.5rem', flex: 1 }}>
          <div style={{ ...metaStyle, color: 'var(--nui-text-muted)', marginBottom: '0.75rem', fontVariantCaps: 'small-caps', letterSpacing: '0.06em' }}>Customize</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {CONTROLS.map(ctrl => (
              <div key={ctrl.key}>
                <label style={{ ...metaStyle, color: 'var(--nui-text-secondary)', display: 'block', marginBottom: '0.35rem' }}>
                  {ctrl.label}
                </label>
                {ctrl.type === 'color' ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="color"
                      value={vars[ctrl.key] || '#000000'}
                      onChange={e => updateVar(ctrl.key, e.target.value)}
                      style={{ width: '32px', height: '32px', border: '1px solid var(--nui-rule-hairline)', cursor: 'pointer', padding: '2px', background: 'none' }}
                    />
                    <span style={{ ...metaStyle, color: 'var(--nui-text-muted)', fontFamily: 'monospace', fontSize: '12px' }}>
                      {vars[ctrl.key]}
                    </span>
                  </div>
                ) : (
                  <select
                    value={vars[ctrl.key]}
                    onChange={e => updateVar(ctrl.key, e.target.value)}
                    style={{
                      ...metaStyle,
                      width: '100%',
                      padding: '0.4rem 0.5rem',
                      border: '1px solid var(--nui-rule-hairline)',
                      background: 'var(--nui-bg-page)',
                      color: 'var(--nui-text-body)',
                      cursor: 'pointer',
                    }}
                  >
                    {ctrl.options.map((opt, i) => (
                      <option key={opt} value={opt}>
                        {'display' in ctrl ? ctrl.display[i] : opt}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Export */}
        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--nui-rule-hairline)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button
            onClick={copyCSS}
            style={{
              ...metaStyle,
              padding: '0.6rem 1rem',
              background: 'var(--nui-text-primary)',
              color: 'var(--nui-bg-page)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontVariantCaps: 'small-caps',
              letterSpacing: '0.06em',
            }}
          >
            {copied ? '✓ Copied!' : 'Copy CSS'}
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={downloadCSS}
              style={{
                ...metaStyle,
                flex: 1,
                padding: '0.5rem',
                background: 'transparent',
                color: 'var(--nui-text-secondary)',
                border: '1px solid var(--nui-rule-hairline)',
                cursor: 'pointer',
              }}
            >↓ .css</button>
            <button
              onClick={downloadJSON}
              style={{
                ...metaStyle,
                flex: 1,
                padding: '0.5rem',
                background: 'transparent',
                color: 'var(--nui-text-secondary)',
                border: '1px solid var(--nui-rule-hairline)',
                cursor: 'pointer',
              }}
            >↓ .json</button>
          </div>
        </div>
      </aside>

      {/* ── Right Preview ── */}
      <main style={{ flex: 1, overflowY: 'auto' }}>
        <ComponentPreview vars={vars} />
      </main>
    </div>
  );
}
