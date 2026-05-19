'use client';

import {
  Layout, Section, Article, Masthead,
  Headline, Subhead, Kicker, BodyText, Byline, Dateline,
  Figure, PullQuote,
} from '@newspaperui/components';

export default function BlackletterFrontPage() {
  return (
    <Layout columns={24} maxWidth="1200px" padding="2rem 1.5rem">
      <Masthead
        variant="blackletter"
        title="Die Frankfurter Zeitung"
        edition="Nr. 117 · 142. Jahrgang"
        date="Dienstag, 19. Mai 2026"
        price="€ 3,80"
      />

      <Section columns={24} divider="bottom" gap="2rem" style={{ marginTop: '2rem' }}>
        <Article span={6} style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '1.25rem' }}>
          <Kicker>Im Blatt</Kicker>
          <Headline weight="Low" as="h3" style={{ marginTop: 0 }}>
            Bundestag billigt Klimapaket nach langer Debatte
          </Headline>
          <BodyText weight="Low">
            <p>Die einstimmige Abstimmung beendet eine umstrittene Sitzungsperiode. Politik, Seite 4.</p>
          </BodyText>
          <hr className="nui-rule-hairline" style={{ margin: '1rem 0' }} />
          <Headline weight="Low" as="h3">Industrie sieht in Reform Chance und Risiko</Headline>
          <BodyText weight="Low">
            <p>Verbände begrüßen die Pläne, mahnen aber Übergangsfristen für kleinere Betriebe an.
            Wirtschaft, Seite 9.</p>
          </BodyText>
        </Article>

        <Article span={18}>
          <Kicker>Politik · Eilmeldung</Kicker>
          <Headline weight="High">
            Historischer Pakt nach langem Verhandlungsmarathon beschlossen
          </Headline>
          <Subhead weight="High">
            Delegierte aus dreiundzwanzig Nationen einigen sich auf einen Rahmen für Zölle, Arbeit und Emissionen
          </Subhead>
          <Byline>Von Eleonore Witkomm und Markus Reyes</Byline>

          <Figure
            src="https://images.unsplash.com/photo-1551836022-aadb801c60ae?auto=format&fit=crop&w=1200&q=80"
            alt="Verhandlungsführer am Konferenztisch"
            caption="Die Delegationen applaudieren nach der Verabschiedung des Schlussdokuments am Montagabend."
            credit="Foto: Jane Doe / Pool"
          />

          <BodyText weight="High" columns={3} dropCap style={{ marginTop: '1.5rem' }}>
            <p><Dateline>Brüssel —</Dateline> Nach elf aufeinanderfolgenden Verhandlungstagen, die mehrere
            Teilnehmer als die anstrengendsten einer Generation bezeichneten, haben Delegierte aus
            dreiundzwanzig Nationen am Montag einen umfassenden Rahmen vorgelegt, der den Handel auf dem
            gesamten Kontinent neu ordnen soll.</p>

            <p>Das Abkommen, das noch von den nationalen Parlamenten ratifiziert werden muss, würde
            Zollordnungen harmonisieren, gemeinsame Arbeitsstandards setzen und die Unterzeichner auf einen
            geteilten Emissionspfad bis 2040 verpflichten. Beamte, die in die Gespräche eingeweiht waren,
            sagten, der Durchbruch sei kurz vor Mitternacht gekommen.</p>

            <p>Die Märkte reagierten mit verhaltenem Optimismus. Der kontinentale Composite-Index schloss
            mit einem Plus von 1,2 Prozent. Die Währung legte gegenüber dem Dollar um 0,7 Prozent zu.
            Anleiherenditen, die während der Verhandlungen wegen fiskalischer Sorgen gestiegen waren, kehrten
            auf das Niveau vor Beginn der Gespräche zurück.</p>
          </BodyText>

          <PullQuote weight="High" author="Margarethe Lindqvist, Chefverhandlerin" align="left">
            Ein langer Streit, der schließlich zum Gespräch wurde.
          </PullQuote>

          <BodyText weight="High" columns={2}>
            <p>Das Rahmenabkommen sieht eine schrittweise CO₂-Abgabe für Schwerindustrie ab 2028 vor.
            Einnahmen sollen in einen Investitionsfonds für klimafreundliche Fertigung fließen.</p>

            <p>Parlamentarische Führer in drei Hauptstädten signalisierten, dass die Ratifizierung noch vor
            der Sommerpause erfolgen könnte. Zwei Regierungen kündigten an, vorher Volksabstimmungen abhalten
            zu wollen.</p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}
