'use client';

import {
  Layout, Section, Article, Masthead, Rule,
  Headline, Subhead, Kicker, BodyText, Byline, Dateline,
  Figure, PullQuote,
} from 'newspaperui';

export default function FrontPage() {
  return (
    <main>
      <Layout columns={24} maxWidth="1200px" padding="2rem 1.5rem">
      <Masthead
        variant="classic"
        kicker="Late City Edition"
        title="The Daily Chronicle"
        edition="Vol. CXLIX · No. 51,895"
        date="Tuesday, May 19, 2026"
        price="$4.00"
      />

      <Section columns={24} divider="bottom" gap="2rem" style={{ marginTop: '2rem' }}>
        <Article span={5} style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '1.5rem' }}>
          <Kicker>Inside Today</Kicker>
          <Headline weight="Low" as="h3" style={{ marginTop: 0 }}>
            Senate Approves Climate Resolution After Months of Debate
          </Headline>
          <BodyText weight="Low">
            <p>The unanimous vote concludes a contentious legislative session marked by partisan disputes
            and last-minute amendments. Page A6.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Headline weight="Low" as="h3">Tech Sector Gains as Inflation Eases</Headline>
          <BodyText weight="Low">
            <p>Major indices climbed for a fifth consecutive session as new data showed price growth
            slowing across consumer goods. Business B1.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Headline weight="Low" as="h3">Drought Conditions Worsen Across the Plains</Headline>
          <BodyText weight="Low">
            <p>Officials in seven states have requested federal disaster relief as reservoir levels reach
            historic lows. National A12.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Headline weight="Low" as="h3">New Exhibit Opens at the Metropolitan</Headline>
          <BodyText weight="Low">
            <p>A retrospective of mid-century textile design draws record opening crowds. Arts C3.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Headline weight="Low" as="h3">City Council Approves Transit Expansion</Headline>
          <BodyText weight="Low">
            <p>The $2.4 billion plan adds three new rail lines and extends service hours on existing routes. Metro A8.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Headline weight="Low" as="h3">University Announces Record Enrollment</Headline>
          <BodyText weight="Low">
            <p>Applications rose 18 percent this cycle, driven by expanded financial aid programs. Education B4.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Headline weight="Low" as="h3">Harbor Restoration Project Begins</Headline>
          <BodyText weight="Low">
            <p>Engineers will dredge sediment and rebuild seawalls over a three-year timeline. Local A10.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Headline weight="Low" as="h3">Orchestra Names New Music Director</Headline>
          <BodyText weight="Low">
            <p>The appointment ends a two-year search following the previous director&rsquo;s retirement. Arts C1.</p>
          </BodyText>
        </Article>

        <Article span={14}>
          <div style={{ textAlign: 'center' }}><Kicker>Capitol · Breaking</Kicker></div>
          <Headline weight="High" as="h2" align="center">
            Historic Accord Reshapes Continental Trade After Marathon Session
          </Headline>
          <Subhead weight="High" style={{ textAlign: 'center', marginTop: 0 }}>
            Negotiators emerge with sweeping framework on tariffs, labor, and emissions; ratification expected within weeks
          </Subhead>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '0.5rem 0 1rem', alignItems: 'baseline' }}>
            <Byline>By Eleanor Whitcombe and Marcus Reyes</Byline>
            <span style={{ color: 'var(--nui-text-muted)' }}>·</span>
            <span style={{ fontFamily: 'var(--font-family-meta)', fontSize: '12px', color: 'var(--nui-text-muted)' }}>5 min read</span>
          </div>

          <Figure
            src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&w=1200&q=80"
            alt="Diplomats applaud after the final draft was approved"
            caption="Negotiators applaud after the final draft was approved Monday evening at the Continental Conference Center."
            credit="Photograph by Jane Doe / Pool"
          />

          <BodyText weight="High" columns={3} dropCap style={{ marginTop: '1.5rem' }}>
            <p><Dateline>Brussels -</Dateline> After eleven consecutive days of negotiation that several
            participants described as the most demanding in a generation, delegates from twenty-three nations
            announced on Monday a sweeping framework to reorganize commerce across the continent. The accord,
            which still requires ratification by member parliaments, would harmonize tariff schedules, set
            common labor standards, and bind signatories to a shared emissions pathway through 2040.</p>

            <p>Officials briefed on the talks said the breakthrough came shortly before midnight, when a
            dispute over agricultural subsidies was resolved with a side letter granting transitional relief
            to producers in five smaller economies. The chief negotiator, Margarethe Lindqvist, called the
            outcome &ldquo;a long argument that finally became a conversation.&rdquo;</p>

            <p>The framework&rsquo;s most consequential provisions target heavy industry. Cement, steel, and
            chemical producers would face a graduated carbon levy beginning in 2028, with revenues recycled
            into a continental investment fund for low-carbon manufacturing. Industry associations expressed
            cautious support, while environmental groups praised the levy&rsquo;s binding architecture but warned
            that the timeline gives polluters too much room to delay.</p>

            <p>Markets reacted with measured optimism. The continental composite index closed up 1.2 percent,
            led by capital-goods makers expected to benefit from infrastructure investment. The currency
            strengthened against the dollar by 0.7 percent. Bond yields, which had climbed throughout the
            negotiations on fiscal-stability concerns, retreated to levels seen before the talks began.</p>

            <p>Domestic political reaction was mixed. The accord&rsquo;s labor provisions, which establish minimum
            standards for paid leave and collective bargaining, drew immediate praise from union federations
            and equally immediate concern from chambers of commerce. The chairman of the Federation of
            Industries warned that small firms would struggle with compliance costs absent transitional support.</p>

            <p>Parliamentary leaders in three capitals signaled that ratification could occur before the
            summer recess. Two governments, however, indicated that they would seek public referenda before
            committing, a process likely to extend into the autumn. Analysts at the Centre for Trade Studies
            estimated that full implementation, even on the most expedited timeline, would require at least
            eighteen months.</p>

            <p>For ordinary travelers and consumers, the immediate effects will be modest. Border procedures
            and product standards remain governed by existing arrangements pending ratification. The longer
            arc is what matters: a continent of historically fractious neighbors agreeing on a single set of
            rules for the most consequential decade in living memory.</p>

            <p>The accord&rsquo;s environmental chapter, which drew the most sustained opposition during
            negotiations, establishes a continental carbon market linked to existing national schemes.
            Permits would be tradeable across borders beginning in 2030, with a price floor set at
            forty-five units per ton of carbon dioxide equivalent. Economists at the Institute for
            Climate Economics estimated that the floor alone would reduce emissions by eight to twelve
            percent within the first five years of operation.</p>

            <p>Labor unions in the industrial heartland expressed qualified support. The secretary-general
            of the Metalworkers&rsquo; Federation said the transition fund &ldquo;acknowledges what we have argued
            for years: that decarbonization cannot be built on the backs of workers.&rdquo; But she cautioned
            that the fund&rsquo;s governance structure, which gives equal weight to employer and employee
            representatives, could slow disbursements at a moment when speed matters most.</p>

            <p>Small and medium enterprises, which employ roughly sixty percent of the continental
            workforce, face a distinct set of challenges. The accord exempts firms below a revenue
            threshold from the carbon levy for three years, but compliance with the new labor standards
            is immediate. Business associations in four countries have already requested technical
            assistance programs to help smaller firms adapt their payroll and reporting systems.</p>

            <p>Historians of continental integration noted that the accord&rsquo;s scope exceeds any single
            agreement since the postwar reconstruction treaties. &ldquo;What makes this different,&rdquo; said
            Professor Elena Marchetti of the University of Turin, &ldquo;is that it touches every household -
            not just through trade, but through the air they breathe and the wages they earn.&rdquo;</p>
          </BodyText>

          <PullQuote weight="High" author="Margarethe Lindqvist, Chief Negotiator" align="center" style={{ margin: '2rem 0' }}>
            A long argument that finally became a conversation.
          </PullQuote>

          <BodyText weight="High" columns={2} style={{ marginTop: '1rem' }}>
            <p>The accord&rsquo;s signing ceremony, originally scheduled for last Friday, was delayed three times
            as drafters reconciled competing texts on dispute resolution. The final compromise establishes
            an arbitration panel of nine jurists, three appointed by each of the bloc&rsquo;s three regional
            groupings, with binding authority over commercial disputes exceeding twenty million units.</p>

            <p>Critics on the populist right denounced the framework as an erosion of national sovereignty,
            while critics on the left argued that the labor floor was set too low to meaningfully protect
            workers in tighter regulatory regimes. Both camps signaled that ratification battles would be
            fierce, particularly in legislatures with narrow majorities.</p>
          </BodyText>
        </Article>

        <Article span={5} style={{ borderLeft: '1px solid var(--nui-rule-hairline)', paddingLeft: '1.5rem' }}>
          <Kicker>Foreign Desk</Kicker>
          <Headline weight="Medium" as="h2">
            Coastal Nations Pledge Joint Action on Maritime Pollution
          </Headline>
          <Subhead weight="Medium">
            Pact follows years of stalled regional talks and a cascade of recent shipping accidents.
          </Subhead>
          <Byline>By Tomás Almeida</Byline>

          <BodyText weight="Medium" style={{ marginTop: '0.75rem' }}>
            <p><Dateline>Lisbon -</Dateline> Eleven coastal nations announced a binding compact to coordinate
            cleanup operations and harmonize liability rules for vessels exceeding fifty thousand tons. The
            agreement establishes a shared rapid-response fund and creates a regional inspectorate empowered
            to detain non-compliant ships in any signatory port.</p>

            <p>Maritime industry groups received the news with caution. A spokesperson for the Continental
            Shipping Council acknowledged that &ldquo;stronger common rules are overdue&rdquo; but warned that
            implementation costs could fall disproportionately on smaller operators.</p>

            <p>The compact takes effect on January 1, pending technical annexes. Environmental observers
            described the pact as the most consequential maritime accord in a decade.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Headline weight="Low" as="h3">Fisheries Report Warns of Declining Stocks</Headline>
          <BodyText weight="Low">
            <p>Annual survey data shows a 14 percent drop in key commercial species across the northern
            shelf. Scientists attribute the decline to warming waters and overfishing in adjacent
            unregulated zones. Environment A9.</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Headline weight="Low" as="h3">Rail Strike Averted After Late-Night Deal</Headline>
          <BodyText weight="Low">
            <p>Workers accepted a revised pay offer minutes before the midnight deadline. Services
            resume on normal schedules. Transport B2.</p>
          </BodyText>
        </Article>
      </Section>

      <Section columns={24} divider="top" gap="2rem" style={{ marginTop: '2rem', paddingTop: '2rem' }}>
        <Article span={24}>
          <Kicker>National · Investigation</Kicker>
          <Headline weight="Medium" as="h2">
            Records Reveal Years of Overlooked Warnings at Aging Reservoirs
          </Headline>
          <Subhead weight="Medium">
            Internal inspection memoranda, obtained through public records requests, suggest that
            structural concerns flagged repeatedly by field engineers were not escalated to senior staff.
          </Subhead>
          <Byline style={{ marginBottom: '1rem' }}>By Ravi Nair, Anita Kowalski, and Charles Weston</Byline>

          <BodyText weight="High" columns={4}>
            <p><Dateline>Sacramento -</Dateline> A six-month review of more than four thousand pages of
            inspection records, interviews with twenty-three current and former engineers, and reconstructions
            of three near-failure incidents reveals a pattern of unheeded warnings about the structural
            integrity of mid-twentieth-century earthen dams across the western states.</p>

            <p>The records show that field engineers documented concerns about seepage, erosion, and spillway
            capacity in repeated annual assessments dating back at least fifteen years. In several instances,
            those concerns were rated &ldquo;moderate&rdquo; in the field reports but downgraded to &ldquo;low&rdquo; by the time they
            reached senior officials. The pattern was particularly pronounced at three facilities serving
            regions of more than two million residents.</p>

            <p>Officials at the Department of Water Resources, asked to review excerpts of the records, said
            in a written statement that &ldquo;every reservoir under our oversight has been deemed safe for current
            operations&rdquo; but did not specifically address the discrepancies between field and final ratings.
            The agency declined to make senior staff available for interviews.</p>

            <p>The findings come amid renewed scrutiny of aging infrastructure following the partial collapse
            of an earthen embankment in March that displaced more than fifteen hundred residents. Federal
            inspectors who responded to that incident found the proximate cause to be precisely the type of
            seepage concern that field engineers had flagged in three of the past four annual assessments.</p>

            <p>The investigative review found that of forty-seven reservoirs surveyed, sixteen had at least
            one instance in which a &ldquo;moderate&rdquo; or &ldquo;high&rdquo; field rating was downgraded before reaching senior
            management. In nine cases, the downgrades persisted for three or more consecutive years. None of
            the affected facilities have publicly disclosed the discrepancies.</p>

            <p>Engineering professional associations have, in recent years, called for an independent review
            of inspection workflows in the western states. A spokesperson for the Society of Hydraulic
            Engineers said the Society was &ldquo;deeply concerned&rdquo; by the patterns described and would convene a
            working group to examine reform options.</p>
          </BodyText>
        </Article>
      </Section>
      </Layout>
    </main>
  );
}
