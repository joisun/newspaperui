'use client';
import {
  Layout,
  Section,
  Article,
  Headline,
  Subhead,
  BodyText,
  Rule,
} from 'newspaperui-components';
import { Demo } from '@/components/Demo';

export default function SpanningPage() {
  return (
    <Layout columns={24} maxWidth="900px" padding="2rem">
      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Medium" as="h1">
            跨栏布局示例
          </Headline>
          <Subhead weight="Medium">
            五种常见栏宽组合，演示 24 列栅格的灵活性。
          </Subhead>
        </Article>
      </Section>

      <Rule variant="hairline" />

      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Low" as="h2">
            8 + 16
          </Headline>
        </Article>
      </Section>
      <Demo title="8 + 16" description="短讯 + 主稿。">
        <Layout columns={24} padding="0">
          <Section columns={24}>
            <Article span={8}>
              <Headline weight="Low" as="h3">
                Briefing
              </Headline>
              <BodyText weight="Low">
                <p>
                  Markets responded cautiously through the morning session. The pound
                  traded sideways against the dollar.
                </p>
              </BodyText>
            </Article>
            <Article span={16}>
              <Headline weight="Medium" as="h3">
                Infrastructure Review Tabled
              </Headline>
              <BodyText>
                <p>
                  Whitehall officials confirmed late Tuesday that the long-anticipated
                  review of national infrastructure funding will be tabled before the
                  recess. The 248-page document recommends a recalibration of regional
                  priorities.
                </p>
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Low" as="h2">
            6 + 12 + 6
          </Headline>
        </Article>
      </Section>
      <Demo title="6 + 12 + 6" description="三栏对称布局，中间主体 + 两侧辅助。">
        <Layout columns={24} padding="0">
          <Section columns={24}>
            <Article span={6}>
              <Headline weight="Low" as="h3">
                Weather
              </Headline>
              <BodyText weight="Low">
                <p>Partly cloudy, 18C. Wind NW 12 mph. Sunset 20:47.</p>
              </BodyText>
            </Article>
            <Article span={12}>
              <Headline weight="Medium" as="h3">
                Chancellor Outlines Spending Envelope
              </Headline>
              <BodyText>
                <p>
                  The chancellor confirmed a three-year spending envelope that prioritizes
                  rail electrification and regional connectivity. The announcement was
                  greeted with cautious optimism across the House.
                </p>
              </BodyText>
            </Article>
            <Article span={6}>
              <Headline weight="Low" as="h3">
                Markets
              </Headline>
              <BodyText weight="Low">
                <p>FTSE 100: 7,842 (-0.2%). Gilts +3bp. Sterling flat.</p>
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Low" as="h2">
            12 + 12
          </Headline>
        </Article>
      </Section>
      <Demo title="12 + 12" description="对称双栏，适合对比报道或并列文章。">
        <Layout columns={24} padding="0">
          <Section columns={24}>
            <Article span={12}>
              <Headline weight="Low" as="h3">
                View from Westminster
              </Headline>
              <BodyText>
                <p>
                  Critics inside the cabinet caution that the timing risks overshadowing
                  the chancellor&rsquo;s autumn statement. The opposition has called for a
                  full debate before any commitments are made.
                </p>
              </BodyText>
            </Article>
            <Article span={12}>
              <Headline weight="Low" as="h3">
                View from the Regions
              </Headline>
              <BodyText>
                <p>
                  In Manchester, regional officials greeted the announcement with measured
                  optimism. The mayor&rsquo;s office is expected to issue a formal response
                  by week&rsquo;s end.
                </p>
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Low" as="h2">
            4 + 16 + 4
          </Headline>
        </Article>
      </Section>
      <Demo title="4 + 16 + 4" description="窄侧栏 + 宽主体，适合带注释的长文。">
        <Layout columns={24} padding="0">
          <Section columns={24}>
            <Article span={4}>
              <BodyText weight="Low">
                <p style={{ fontStyle: 'italic', fontSize: '12px' }}>
                  Editor&rsquo;s note: This report was filed before the evening session.
                </p>
              </BodyText>
            </Article>
            <Article span={16}>
              <Headline weight="Medium" as="h3">
                A Standing Technical Commission
              </Headline>
              <BodyText>
                <p>
                  Beyond the immediate fiscal arithmetic, the review&rsquo;s most
                  consequential proposal may be its quietest: a standing technical
                  commission, modeled on Australia&rsquo;s Infrastructure Australia, to
                  depoliticize project sequencing.
                </p>
              </BodyText>
            </Article>
            <Article span={4}>
              <BodyText weight="Low">
                <p style={{ fontStyle: 'italic', fontSize: '12px' }}>
                  Related: &ldquo;How Australia reformed infrastructure planning&rdquo;
                  &mdash; p. 12
                </p>
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>

      <Section columns={24}>
        <Article span={24}>
          <Headline weight="Low" as="h2">
            24 全宽
          </Headline>
        </Article>
      </Section>
      <Demo title="24 全宽" description="单篇全宽文章，适合社论或特稿。">
        <Layout columns={24} padding="0">
          <Section columns={24}>
            <Article span={24}>
              <Headline weight="High" as="h3">
                The Quiet Revolution in Treasury Forecasting
              </Headline>
              <BodyText columns={4} dropCap>
                <p>
                  Whitehall officials confirmed late Tuesday that the long-anticipated
                  review of national infrastructure funding will be tabled before the
                  recess. The 248-page document, drafted across three departments,
                  recommends a recalibration of regional priorities and a measured shift
                  toward rail electrification.
                </p>
                <p>
                  Markets responded cautiously through the morning session. The pound
                  traded sideways against the dollar, gilts firmed by three basis points,
                  and the FTSE 100 closed marginally lower as defensive sectors absorbed
                  the day&rsquo;s modest outflows.
                </p>
                <p>
                  In Manchester, regional officials greeted the announcement with measured
                  optimism. The mayor&rsquo;s office is expected to issue a formal response
                  by week&rsquo;s end, focusing on commitments to the trans-Pennine
                  corridor and the long-deferred upgrade of suburban tram capacity.
                </p>
                <p>
                  Beyond the immediate fiscal arithmetic, the review&rsquo;s most
                  consequential proposal may be its quietest: a standing technical
                  commission to depoliticize project sequencing. Whether that body acquires
                  teeth will be determined by the legislation expected in the spring.
                </p>
              </BodyText>
            </Article>
          </Section>
        </Layout>
      </Demo>
    </Layout>
  );
}
