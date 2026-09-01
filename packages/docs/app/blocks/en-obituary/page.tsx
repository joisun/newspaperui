'use client';
import { Layout, Section, Article, Rule, Headline, BodyText, Byline, Quote, Figure } from 'newspaperui';

export default function EnObituary() {
  return (
    <Layout columns={24} maxWidth="800px" padding="4rem 2rem">
      <Section columns={24}>
        <Article span={24}>
          {/* Page header: quiet, two hairlines */}
          <header style={{
            textAlign: 'center',
            borderTop: '1px solid var(--nui-rule-decorative)',
            borderBottom: '1px solid var(--nui-rule-decorative)',
            padding: '0.5rem 0',
            marginBottom: '3rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-family-meta)',
              fontSize: '12px',
              fontVariantCaps: 'small-caps',
              letterSpacing: '0.22em',
              color: 'var(--nui-text-secondary)',
            }}>Obituaries</span>
          </header>

          <Figure
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
            alt="Portrait of Dame Vera Ellison"
            style={{ width: '180px', margin: '0 auto 1.25rem' }}
          />

          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Headline weight="Medium" as="h1" align="center" style={{ marginBottom: '0.25rem' }}>
              Dame Vera Ellison
            </Headline>
            <div className="nui-tnum" style={{
              fontFamily: 'var(--font-family-headline)',
              fontSize: '18px',
              color: 'var(--nui-text-secondary)',
              marginBottom: '0.75rem',
            }}>
              1931 — 2026
            </div>
            <div style={{
              fontFamily: 'var(--font-family-headline)',
              fontStyle: 'italic',
              fontSize: '17px',
              lineHeight: 1.5,
              color: 'var(--nui-text-secondary)',
              maxWidth: '520px',
              margin: '0 auto',
            }}>
              Cellist and teacher who carried the music of her century into three generations of students, and played on through two wars of the spirit.
            </div>
          </div>

          <BodyText weight="High">
            <p>Vera Ellison was born in Leeds in the winter of 1931, the third daughter of a railway clerk and a seamstress who kept an upright piano in the front room because, as she liked to say, a house without music was only half heated. The cello arrived when Vera was nine — a borrowed instrument, too large, which she played standing for the first year.</p>
            <p>She won a scholarship to the Royal College of Music in 1949 and took her first orchestral post four years later, at a time when women in British orchestras were still expected to sit at the back and be grateful. She was not grateful. She was, by all accounts, simply so good that the seating rearranged itself around her.</p>
          </BodyText>

          <div style={{ textAlign: 'center', margin: '2rem 0', color: 'var(--nui-text-muted)', letterSpacing: '1em', fontSize: '12px' }}>
            · &nbsp;· &nbsp;·
          </div>

          <BodyText weight="High">
            <p>Her recording of the Elgar concerto in 1968 remains the reference against which younger cellists are measured, often unkindly. The critic of this newspaper wrote at the time that she played the great lament of the adagio "as though remembering it from a life not yet lived." She professed to find the remark baffling. She kept the cutting all the same.</p>
            <p>In 1974 she walked away from the concert platform at the height of her fame to teach. Colleagues called it perverse. She called it arithmetic: "A soloist gives one life to music. A teacher gives it fifty."</p>
          </BodyText>

          <Quote variant="block" weight="High" style={{ margin: '2rem 0 2rem 1.5em' }}>
            A soloist gives one life to music. A teacher gives it fifty.
          </Quote>

          <BodyText weight="High">
            <p>Her fifty are now scattered through the orchestras and conservatoires of four continents. They remember the same things: the pencil snapped in half to mark a rhythm; the insistence that a wrong note played with conviction was worth correcting, and a right note played without it was not worth playing; the tea, always stewed, always strong.</p>
            <p>She was made a dame in 1998 and accepted the honour, she said, "on behalf of the section." Her husband, the violinist Thomas Hare, died in 2011. She is survived by two daughters — both cellists, which she insisted was coincidence — and by five grandchildren, none of whom were permitted to touch the instrument until they could carry a tune.</p>
            <p>Asked in her last interview how she wished to be remembered, she replied that she did not, particularly. "Remember the music," she said. "I was only its courier."</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '2.5rem 0 1rem' }} />
          <div style={{ textAlign: 'center' }}>
            <Byline>By Edmund Calloway</Byline>
            <div style={{
              fontFamily: 'var(--font-family-meta)',
              fontSize: '11px',
              fontStyle: 'italic',
              color: 'var(--nui-text-muted)',
              marginTop: '0.4rem',
            }}>
              Vera Constance Ellison, cellist and teacher, was born on December 3, 1931. She died on May 12, 2026, aged 94.
            </div>
          </div>
        </Article>
      </Section>
    </Layout>
  );
}
