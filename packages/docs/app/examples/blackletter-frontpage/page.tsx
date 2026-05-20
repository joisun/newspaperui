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

          <hr className="nui-rule-hairline" style={{ margin: '1rem 0' }} />
          <Headline weight="Low" as="h3">Haushaltsentwurf sorgt für Streit in der Koalition</Headline>
          <BodyText weight="Low">
            <p>Die Fraktionsvorsitzenden konnten sich nicht auf Kürzungen im Sozialbereich einigen.
            Innenpolitik, Seite 3.</p>
          </BodyText>

          <hr className="nui-rule-hairline" style={{ margin: '1rem 0' }} />
          <Headline weight="Low" as="h3">Neue Studie belegt Rückgang der Artenvielfalt</Headline>
          <BodyText weight="Low">
            <p>Forscher der Universität Freiburg dokumentieren einen Verlust von 23 Prozent bei
            Insektenpopulationen seit 2015. Wissenschaft, Seite 7.</p>
          </BodyText>

          <hr className="nui-rule-hairline" style={{ margin: '1rem 0' }} />
          <Headline weight="Low" as="h3">Frankfurter Buchmesse meldet Besucherrekord</Headline>
          <BodyText weight="Low">
            <p>Über 300.000 Besucher kamen in diesem Jahr, ein Anstieg von zwölf Prozent gegenüber
            dem Vorjahr. Feuilleton, Seite 11.</p>
          </BodyText>

          <hr className="nui-rule-hairline" style={{ margin: '1rem 0' }} />
          <Headline weight="Low" as="h3">Bahn plant Ausbau der Nachtzugverbindungen</Headline>
          <BodyText weight="Low">
            <p>Ab Dezember sollen fünf neue Strecken das europäische Netz ergänzen. Wirtschaft, Seite 8.</p>
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

            <p>Die weitreichendsten Bestimmungen des Rahmenabkommens betreffen die Schwerindustrie.
            Zement-, Stahl- und Chemieproduzenten müssten ab 2028 eine gestaffelte CO₂-Abgabe
            entrichten, deren Einnahmen in einen kontinentalen Investitionsfonds für klimafreundliche
            Fertigung fließen sollen. Industrieverbände äußerten vorsichtige Zustimmung, während
            Umweltgruppen die verbindliche Architektur lobten, aber warnten, der Zeitplan gebe
            Verschmutzern zu viel Spielraum.</p>

            <p>Die innenpolitischen Reaktionen fielen gemischt aus. Die Arbeitsbestimmungen des
            Abkommens, die Mindeststandards für bezahlten Urlaub und Tarifverhandlungen festlegen,
            stießen bei Gewerkschaften auf sofortige Zustimmung und bei Wirtschaftskammern auf
            ebenso sofortige Bedenken. Der Vorsitzende des Bundesverbandes der Industrie warnte,
            kleine Unternehmen würden ohne Übergangsunterstützung mit den Compliance-Kosten kämpfen.</p>

            <p>Parlamentarische Führer in drei Hauptstädten signalisierten, dass die Ratifizierung
            noch vor der Sommerpause erfolgen könnte. Zwei Regierungen kündigten jedoch an, vorher
            Volksabstimmungen abhalten zu wollen — ein Prozess, der sich voraussichtlich bis in den
            Herbst hinziehen wird. Analysten des Zentrums für Handelsstudien schätzten, dass die
            vollständige Umsetzung selbst im günstigsten Fall mindestens achtzehn Monate erfordern würde.</p>

            <p>Für gewöhnliche Reisende und Verbraucher werden die unmittelbaren Auswirkungen bescheiden
            sein. Grenzverfahren und Produktstandards unterliegen bis zur Ratifizierung weiterhin den
            bestehenden Regelungen. Der längere Bogen, so argumentierten die Verhandlungsführer, sei
            das Entscheidende: ein Kontinent historisch zerstrittener Nachbarn, der sich auf ein
            einheitliches Regelwerk für das folgenreichste Jahrzehnt seit Menschengedenken einigt.</p>
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

            <p>Die Unterzeichnungszeremonie, ursprünglich für vergangenen Freitag geplant, wurde
            dreimal verschoben, während die Verfasser konkurrierende Texte zur Streitbeilegung
            abglichen. Der endgültige Kompromiss sieht ein Schiedsgericht aus neun Juristen vor,
            je drei ernannt von jeder der drei regionalen Gruppierungen des Blocks.</p>

            <p>Kritiker von rechts verurteilten das Rahmenwerk als Erosion nationaler Souveränität,
            während Kritiker von links argumentierten, der Arbeitsstandard sei zu niedrig angesetzt,
            um Arbeitnehmer in strengeren Regulierungsregimen wirksam zu schützen. Beide Lager
            signalisierten, dass die Ratifizierungskämpfe heftig werden dürften.</p>

            <p>Historiker der kontinentalen Integration merkten an, dass der Umfang des Abkommens
            jede einzelne Vereinbarung seit den Nachkriegs-Wiederaufbauverträgen übertrifft. Was
            dieses Abkommen anders mache, so Professor Elena Marchetti, sei dass es jeden Haushalt
            berühre — nicht nur durch den Handel, sondern durch die Luft und die Löhne.</p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}
