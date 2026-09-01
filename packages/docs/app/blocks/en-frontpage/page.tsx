'use client';
import { Layout, Section, Article, Rule, Headline, Subhead, Kicker, BodyText, Byline, Dateline, Caption, Figure } from 'newspaperui';

export default function EnFrontpage() {
  return (
    <Layout columns={24} maxWidth="1240px" padding="1.25rem 1.5rem 3rem">
      {/* Masthead */}
      <header style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-family-meta)',
          fontSize: '11px',
          letterSpacing: '0.18em',
          color: 'var(--nui-text-muted)',
          marginBottom: '0.4rem',
        }}>FOUNDED 1785 · NO. 72,941 · LONDON, TUESDAY, MAY 19, 2026</div>
        <h1 style={{
          fontFamily: 'var(--font-family-masthead)',
          fontSize: 'clamp(48px, 7vw, 84px)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '0.02em',
          color: 'var(--nui-text-primary)',
          margin: 0,
        }}>The Meridian Times</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-family-meta)',
          fontSize: '11px',
          color: 'var(--nui-text-secondary)',
          borderTop: '1px solid var(--nui-rule-decorative)',
          borderBottom: '1px solid var(--nui-rule-decorative)',
          padding: '0.35rem 0.25rem',
          marginTop: '0.6rem',
        }}>
          <span>PRICE £2.50</span>
          <span>WESTMINSTER EDITION</span>
          <span>WEATHER: FAIR, HIGH 17°C · PAGE 28</span>
        </div>
      </header>

      {/* Lead zone: left briefs 4 | banner 14 | markets 6 */}
      <Section columns={24} gap="1.5rem" style={{ marginTop: '1.25rem' }}>
        <Article span={4}>
          <div style={{
            fontFamily: 'var(--font-family-meta)',
            fontSize: '11px',
            fontWeight: 700,
            fontVariantCaps: 'small-caps',
            letterSpacing: '0.1em',
            color: 'var(--nui-accent-primary)',
            borderBottom: '3px solid var(--nui-rule-decorative)',
            paddingBottom: '0.3rem',
            marginBottom: '0.75rem',
          }}>News in Brief</div>
          {[
            ['Rail settlement reached', 'Union leaders accepted a revised pay offer late last night, ending the threat of a three-day strike.'],
            ['Cathedral spire restored', 'The eight-year restoration of St Aldhelm’s spire concludes this week, £14m under revised budget.'],
            ['Chess title retained', 'Elena Marchetti, 22, defended her national championship in a tie-break lasting four hours.'],
            ['River barrier tested', 'The flood barrier completed its annual full-scale trial at dawn; all gates performed within tolerance.'],
          ].map(([h, t], i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <h4 style={{
                fontFamily: 'var(--font-family-headline)',
                fontSize: '15px',
                fontWeight: 600,
                lineHeight: 1.25,
                margin: '0 0 0.25rem 0',
                color: 'var(--nui-text-primary)',
              }}>{h}</h4>
              <p style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: '13px',
                lineHeight: 1.5,
                color: 'var(--nui-text-body)',
                margin: 0,
              }}>{t}</p>
            </div>
          ))}
          <div style={{
            fontFamily: 'var(--font-family-meta)',
            fontSize: '11px',
            color: 'var(--nui-text-muted)',
            borderTop: '1px solid var(--nui-rule-hairline)',
            paddingTop: '0.5rem',
          }}>Full digest — page 2</div>
        </Article>

        <Article span={14}>
          <div style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <Kicker>Politics · Exclusive</Kicker>
          </div>
          <Headline weight="High" align="center">
            Accord Signed at Last After Eleven Days of Talks
          </Headline>
          <Subhead weight="High" style={{ textAlign: 'center', margin: '0.4rem 0 0.75rem' }}>
            Tariffs, labour standards and carbon pricing settled in framework uniting twenty-three nations — parliaments must now decide
          </Subhead>
          <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
            <Byline>By Harriet Cole and James Whitfield</Byline>
          </div>
          <Figure
            src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80"
            alt="Delegates at the signing ceremony"
            caption="Delegates from twenty-three nations at the signing ceremony in Brussels shortly before midnight on Monday."
            credit="Emil Bataille for The Meridian Times"
            style={{ marginBottom: '0.75rem' }}
          />
          <BodyText weight="Medium" columns={3} dropCap>
            <p><Dateline>Brussels —</Dateline> After eleven days and a final negotiating session that ran past midnight, envoys from twenty-three nations signed a framework agreement on Monday covering tariffs, labour standards and emissions targets. The accord, the most ambitious of its kind in a generation, now faces ratification in national parliaments.</p>
            <p>The text commits signatories to a common tariff schedule, a floor of labour protections and a stepped carbon charge on heavy industry beginning in 2028. Revenues will feed a continental fund for low-carbon manufacturing.</p>
            <p>Markets responded with cautious optimism. The composite index closed up 1.2 per cent, with capital goods leading the advance. Bond yields retreated to levels last seen before the talks began.</p>
            <p>Reaction at home was divided. Union federations welcomed the labour clauses; the chamber of commerce warned that smaller firms would struggle with compliance costs and called for transitional support.</p>
            <p>Two governments said they would put the accord to a referendum, a process likely to run into the autumn. Even on the fastest timetable, officials concede, full implementation is at least eighteen months away.</p>
            <p>For travellers and consumers, little changes at once. Border formalities and product standards remain as they are until ratification. The deeper significance, veterans of past rounds say, is that neighbours long divided have at last agreed the rules of the coming decade.</p>
          </BodyText>
        </Article>

        <Article span={6} style={{ borderLeft: '1px solid var(--nui-rule-hairline)', paddingLeft: '1.5rem' }}>
          <div style={{
            fontFamily: 'var(--font-family-meta)',
            fontSize: '11px',
            fontWeight: 700,
            fontVariantCaps: 'small-caps',
            letterSpacing: '0.1em',
            color: 'var(--nui-text-primary)',
            borderBottom: '1px solid var(--nui-rule-decorative)',
            paddingBottom: '0.3rem',
            marginBottom: '0.75rem',
          }}>The Markets</div>
          {[
            ['Meridian Composite', '5,842.16', '+1.2%'],
            ['Sterling / Euro', '1.1842', '+0.4%'],
            ['Gilt 10-yr yield', '3.87%', '−0.06'],
            ['Brent crude', '$81.30', '−0.8%'],
            ['Gold', '$2,412', '+0.3%'],
          ].map(([name, val, chg], i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              padding: '0.4rem 0',
              borderBottom: '1px solid var(--nui-rule-hairline)',
              fontFamily: 'var(--font-family-body)',
              fontSize: '13px',
            }}>
              <span style={{ color: 'var(--nui-text-body)' }}>{name}</span>
              <span className="nui-tnum" style={{ color: 'var(--nui-text-primary)', fontWeight: 600 }}>
                {val} <span style={{ color: chg.startsWith('−') ? 'var(--nui-accent-primary)' : 'var(--nui-text-secondary)', fontWeight: 400 }}>{chg}</span>
              </span>
            </div>
          ))}
          <Caption style={{ marginTop: '0.6rem' }}>Closing prices, Monday. Full report — page 24</Caption>

          <Rule variant="hairline" style={{ margin: '1.25rem 0' }} />

          <div style={{
            fontFamily: 'var(--font-family-meta)',
            fontSize: '11px',
            fontWeight: 700,
            fontVariantCaps: 'small-caps',
            letterSpacing: '0.1em',
            color: 'var(--nui-text-primary)',
            marginBottom: '0.5rem',
          }}>Inside</div>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontFamily: 'var(--font-family-body)',
            fontSize: '13px',
            lineHeight: 1.9,
            color: 'var(--nui-text-body)',
          }}>
            <li>What the accord means for your job — <span className="nui-tnum">3</span></li>
            <li>Comment: rules worth the candle — <span className="nui-tnum">17</span></li>
            <li>Obituary: Dame Vera Ellison — <span className="nui-tnum">21</span></li>
            <li>Sport: county championship — <span className="nui-tnum">26</span></li>
            <li>Weather &amp; tides — <span className="nui-tnum">28</span></li>
          </ul>
        </Article>
      </Section>

      <Rule variant="double" style={{ margin: '1.25rem 0' }} />

      {/* Secondary zone: two stories with a vertical rule between */}
      <Section columns={24} gap="1.5rem">
        <Article span={12} style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '1.5rem' }}>
          <Kicker>Environment</Kicker>
          <Headline weight="Medium" style={{ marginTop: '0.3rem' }}>
            Tidal Array Powers 40,000 Homes in First Full Quarter
          </Headline>
          <div style={{ margin: '0.4rem 0 0.75rem' }}>
            <Byline>By Marcus Oyelaran</Byline>
          </div>
          <BodyText weight="Medium" columns={2}>
            <p><Dateline>Inverness —</Dateline> The tidal energy array in the Pentland Firth generated enough electricity in its first full quarter to supply 40,000 homes, operators announced on Monday, exceeding projections by 12 per cent.</p>
            <p>The result strengthens the case for two further arrays along the northern coast. Grid operators said the predictability of tidal output — immune to the vagaries of wind — made it uniquely valuable for balancing supply.</p>
            <p>Fishing representatives remain cautious about navigation corridors, and marine biologists continue to monitor turbine effects on seal populations. Early data, one researcher said, was “quietly encouraging”.</p>
            <p>A final decision on expansion is expected before the end of the year.</p>
          </BodyText>
        </Article>

        <Article span={12}>
          <Kicker>The Arts</Kicker>
          <Headline weight="Medium" style={{ marginTop: '0.3rem' }}>
            Lost Sibelius Score Performed After a Century in an Attic
          </Headline>
          <div style={{ margin: '0.4rem 0 0.75rem' }}>
            <Byline>By Dorothea Lindqvist</Byline>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
            <Figure
              src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=600&q=80"
              alt="Manuscript pages"
              caption="The rediscovered manuscript."
            />
            <BodyText weight="Medium">
              <p><Dateline>Helsinki —</Dateline> A symphonic poem believed lost since 1918 received its modern premiere on Sunday, more than a century after the composer withdrew it and the single copy vanished into a collector’s attic.</p>
              <p>Scholars authenticated the forty-two-page score by its paper, its ink and the composer’s unmistakable hand in the margins. The audience rose mid-finale.</p>
            </BodyText>
          </div>
        </Article>
      </Section>

      {/* Folio */}
      <footer style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '3px solid var(--nui-rule-decorative)',
        marginTop: '1.5rem',
        paddingTop: '0.4rem',
        fontFamily: 'var(--font-family-meta)',
        fontSize: '11px',
        color: 'var(--nui-text-muted)',
      }}>
        <span>THE MERIDIAN TIMES</span>
        <span>TUESDAY, MAY 19, 2026</span>
        <span className="nui-tnum">PAGE 1 OF 32</span>
      </footer>
    </Layout>
  );
}
