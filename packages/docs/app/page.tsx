'use client';

import Link from 'next/link';
import { Article, BodyText, Headline, Kicker, Layout, Rule, Section } from 'newspaperui';
import { InstallCommand } from '../components/InstallCommand';
import styles from './page.module.css';

const capabilities = [
  ['28', 'exported components'],
  ['24', 'column grid'],
  ['4', 'language-ready type systems'],
  ['1', 'package to install'],
];

const families = [
  {
    number: '01',
    title: 'Editorial structure',
    components: 'Layout, Section, Article, Layer, Sidebar, Footer',
    description: 'Compose page architecture on a strict 24-column system, then let content reflow responsively.',
    href: '/docs/grid-system',
  },
  {
    number: '02',
    title: 'Typographic hierarchy',
    components: 'Headline, Subhead, Kicker, BodyText, Byline, Quote',
    description: 'Use measured visual weights, real small caps, drop caps, and multi-column reading flows.',
    href: '/docs/components/article',
  },
  {
    number: '03',
    title: 'Publishing details',
    components: 'Figure, Caption, Folio, Factbox, RelatedArticles',
    description: 'Finish the page with the small structures that make editorial layouts feel credible.',
    href: '/blocks',
  },
];

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Editorial React components · v0.1</p>
          <h1 id="hero-title">Build pages that read like they were edited.</h1>
          <p className={styles.lede}>
            NewspaperUI brings disciplined grids, multilingual typography, and newsroom details to
            production React interfaces. One package, composable primitives, no imitation template.
          </p>
          <InstallCommand />
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/docs/grid-system">Read the documentation</Link>
            <Link className={styles.secondaryAction} href="/create">Create a theme</Link>
          </div>
        </div>

        <div className={styles.previewWrap} aria-label="Live NewspaperUI component preview">
          <div className={styles.previewMeta}>
            <span>Live composition</span>
            <span>24-column · responsive</span>
          </div>
          <Layout className={styles.preview} columns={24} maxWidth="none" padding="clamp(1rem, 3vw, 2rem)">
            <div className={styles.previewMasthead}>The Evening Ledger</div>
            <div className={styles.previewDate}>Vol. 18 · Sunday Review · Edition 04</div>
            <Rule variant="double" />
            <Section columns={24} gap="1rem" className={styles.previewGrid}>
              <Article span={16}>
                <Kicker>Design · Systems</Kicker>
                <Headline as="h2" weight="High" className={styles.previewHeadline}>
                  The quiet rules behind an unmistakable page
                </Headline>
                <BodyText columns={2} dropCap className={styles.previewBody}>
                  <p>
                    Great editorial design starts before decoration. Proportion, rhythm, and type
                    establish a structure that lets every story find its proper voice.
                  </p>
                </BodyText>
              </Article>
              <Article span={8} className={styles.previewRail}>
                <Kicker>Inside</Kicker>
                <h3>Twenty-four columns, one coherent system</h3>
                <Rule variant="hairline" />
                <p>Theme tokens · Multilingual type · Accessible semantics</p>
              </Article>
            </Section>
          </Layout>
        </div>
      </section>

      <section className={styles.proof} aria-label="Verified library capabilities">
        {capabilities.map(([value, label]) => (
          <div key={label} className={styles.proofItem}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className={styles.section} aria-labelledby="components-title">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Component library</p>
          <h2 id="components-title">A system, not a pile of styled boxes.</h2>
          <p>Start with layout, establish hierarchy, then add the publishing details that make a page believable.</p>
        </div>
        <div className={styles.familyList}>
          {families.map((family) => (
            <Link className={styles.family} href={family.href} key={family.number}>
              <span className={styles.familyNumber}>{family.number}</span>
              <div>
                <h3>{family.title}</h3>
                <p className={styles.familyComponents}>{family.components}</p>
                <p>{family.description}</p>
              </div>
              <span className={styles.familyAction}>Explore</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.workflow} aria-labelledby="workflow-title">
        <div>
          <p className={styles.eyebrow}>From install to edition</p>
          <h2 id="workflow-title">Compose with editorial intent.</h2>
        </div>
        <ol>
          <li><span>01</span><strong>Install</strong><p>Add one package and one stylesheet.</p></li>
          <li><span>02</span><strong>Compose</strong><p>Place stories on the 24-column grid.</p></li>
          <li><span>03</span><strong>Tune</strong><p>Adjust semantic tokens in the theme creator.</p></li>
        </ol>
      </section>

      <section className={styles.blocks} aria-labelledby="blocks-title">
        <div className={styles.blocksCopy}>
          <p className={styles.eyebrow}>Production blocks</p>
          <h2 id="blocks-title">Study complete editions. Keep only what serves the story.</h2>
          <p>Six reference layouts cover Chinese, English, and Japanese editorial patterns without locking you into a template.</p>
          <Link className={styles.textLink} href="/blocks">Browse all six blocks</Link>
        </div>
        <div className={styles.blockSpecimens}>
          <article><span>ZH · 01</span><h3>人民周报</h3><p>Dense front page, restrained vermilion, regional type.</p></article>
          <article><span>EN · 03</span><h3>Long-form feature</h3><p>Measured reading width, pull quotes, deep story rhythm.</p></article>
          <article><span>JP · 05</span><h3>縦組み edition</h3><p>Traditional vertical flow with modern responsive behavior.</p></article>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="cta-title">
        <p className={styles.eyebrow}>Make the first edition</p>
        <h2 id="cta-title">Give the content a structure worth reading.</h2>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} href="/docs/grid-system">Start with the grid</Link>
          <a className={styles.secondaryAction} href="https://github.com/joisun/newspaperui">View on GitHub</a>
        </div>
      </section>
    </main>
  );
}
