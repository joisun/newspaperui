'use client';
import { Layout, Section, Article, Rule, Headline, Subhead, Kicker, BodyText, Byline, Dateline, Figure, PullQuote } from 'newspaperui';

export default function EnFeature() {
  return (
    <Layout columns={24} maxWidth="750px" padding="3rem 2rem 4rem">
      <Section columns={24}>
        <Article span={24}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Kicker>Long-form · Investigation</Kicker>
            <Headline weight="High" align="center" style={{ marginTop: '0.5rem' }}>
              The Quiet Collapse of the Middle Shelf
            </Headline>
            <Subhead weight="High" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
              How a generation of mid-list authors lost their publishers, their readers, and their livelihoods — while bestseller lists grew longer than ever.
            </Subhead>
            <div style={{ marginTop: '1.5rem' }}>
              <Byline>By Catherine Ashworth</Byline>
            </div>
            <div style={{ fontFamily: 'var(--font-family-meta)', fontSize: '12px', color: 'var(--nui-text-muted)', marginTop: '0.5rem' }}>
              May 19, 2026 · 18 min read
            </div>
          </div>

          <Figure
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80"
            alt="Empty bookshelves in a closing bookstore"
            caption="A former independent bookstore in Portland, Oregon, photographed the week before its final closing. The middle shelves — where debut novels and second books once lived — were the first to empty."
            credit="Photograph by Daniel Voss for The Chronicle"
          />

          <BodyText weight="High" dropCap style={{ marginTop: '2rem' }}>
            <p><Dateline>Portland, Ore. —</Dateline> The bookstore on Southeast Hawthorne had been open for thirty-one years when its owner, Margaret Liu, decided she could no longer make the numbers work. It was not a dramatic collapse. There was no single catastrophe, no flood, no fire, no pandemic-era pivot that failed. It was, she said, more like a long exhalation.</p>
            <p>"The books that used to sell two thousand copies now sell four hundred," she told me, standing behind a counter stacked with returns. "And the books that sell a hundred thousand still sell a hundred thousand. The middle just — left."</p>
            <p>Liu's observation, echoed by dozens of booksellers, agents, and editors I spoke with over six months of reporting, describes a structural shift in American publishing that has accelerated sharply since 2022. The "middle shelf" — the physical and metaphorical space where literary fiction, serious nonfiction, and debut authors once found their audience — has contracted to a degree that many in the industry describe as existential.</p>
            <p>The data bears this out. According to figures compiled by the Association of American Publishers and cross-referenced with BookScan point-of-sale data, the number of titles selling between 2,000 and 20,000 copies annually has declined by 34 percent since 2019. Over the same period, the number of titles selling more than 100,000 copies has increased by 11 percent. The top is growing; the middle is vanishing.</p>
          </BodyText>

          <PullQuote weight="High" author="Margaret Liu, bookseller" align="center" style={{ margin: '2.5rem 0' }}>
            The books that used to sell two thousand copies now sell four hundred. The middle just — left.
          </PullQuote>

          <BodyText weight="High">
            <p>For readers, the consequences are subtle but cumulative. The debut novel that might have found ten thousand readers in 2015 now finds three thousand — or never gets published at all. The second book, historically the most precarious moment in a literary career, has become a cliff edge. Agents report that "second book syndrome" has evolved from a creative challenge into an economic one: publishers increasingly decline to offer contracts for follow-up works unless the debut exceeded expectations.</p>
            <p>"I had three clients last year whose publishers simply said no to book two," said Rachel Mendelson, a literary agent in New York. "Not because the books were bad. Because the sales data from book one didn't justify the advance. These are talented writers with good reviews and real readers. But 'real readers' now means something different to a P&L spreadsheet."</p>
            <p>The causes are multiple and mutually reinforcing. The consolidation of major publishers into four global conglomerates has concentrated decision-making power among fewer acquiring editors, each under greater pressure to justify investments with projected returns. The rise of algorithmic recommendation — on Amazon, on social media, on podcast charts — has created winner-take-all dynamics that reward existing visibility over literary merit. And the economic pressures on readers themselves, facing higher costs of living and competing demands on attention, have made the "safe bet" of a known author or a viral recommendation more attractive than the gamble of an unfamiliar name.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '2rem 0' }} />

          <BodyText weight="High">
            <p>The human cost is difficult to quantify but impossible to ignore. I spoke with fourteen mid-career authors — writers with two to five published books, strong reviews, and modest but loyal readerships — about their financial situations. Twelve reported that their writing income had declined in real terms over the past five years. Nine had taken on additional employment. Four had effectively stopped writing new books, though none had publicly announced retirement.</p>
            <p>"I don't want to sound self-pitying," said one novelist, who asked not to be named because she feared alienating her publisher. "I knew this wasn't going to make me rich. But I thought it would let me keep doing it. That's what's changed. It's not about wealth. It's about viability."</p>
            <p>The phrase "viability" recurred in nearly every conversation. Not the viability of literature as an art form — no one doubted that — but the viability of a life organized around producing it. The distinction matters. Great books will continue to be written. But the ecosystem that once supported a broad class of working writers, allowing them to develop over multiple books and find their audience gradually, is contracting faster than anyone predicted.</p>
          </BodyText>

          <PullQuote weight="Medium" author="Anonymous novelist" align="center" style={{ margin: '2.5rem 0' }}>
            I knew this wasn't going to make me rich. But I thought it would let me keep doing it. That's what's changed.
          </PullQuote>

          <BodyText weight="High">
            <p>Independent publishers have partially filled the gap. Small presses like Graywolf, Coffee House, Tin House, and Catapult have expanded their lists and taken on authors who might previously have published with major houses. But their advances are smaller, their marketing budgets thinner, and their distribution reach narrower. An author moving from a Big Four imprint to an independent press typically sees their print run cut by half or more.</p>
            <p>"We're doing important work," said one independent publisher, "but we can't replace what's been lost. We're a lifeboat, not a cruise ship."</p>
            <p>The question facing American letters is whether this contraction is cyclical or structural — whether the middle shelf will eventually recover as reading habits shift, or whether the current configuration represents a new permanent state. Most industry observers I spoke with leaned toward the latter view, though several noted that predictions about publishing have a long history of being wrong.</p>
            <p>What seems clear is that the current moment demands new thinking about how literary culture sustains itself. The old model — in which publishers cross-subsidized risky literary work with profitable commercial titles — depended on a middle tier that generated modest but reliable returns. Without that middle, the cross-subsidy breaks down, and each book must justify itself independently. In such a world, the incentive to publish only sure things becomes overwhelming.</p>
            <p>Margaret Liu closed her bookstore on a Tuesday in March. The middle shelves, she noted, were the first to empty. The bestsellers went last.</p>
          </BodyText>

          <Rule variant="double" style={{ margin: '3rem 0 1rem' }} />
          <div style={{ fontFamily: 'var(--font-family-meta)', fontSize: '12px', color: 'var(--nui-text-muted)', fontStyle: 'italic' }}>
            Catherine Ashworth is a staff writer covering publishing and literary culture. Additional reporting by James Okafor.
          </div>
        </Article>
      </Section>
    </Layout>
  );
}
