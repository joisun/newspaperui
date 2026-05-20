'use client';
import { Layout, Section, Article, Rule, BodyText, Figure } from '@newspaperui/components';

const jp = { fontFamily: 'var(--font-family-cjk-jp)' };
const jpAccent = { color: 'var(--nui-accent-ink-blue)' };

export default function JpHorizontal() {
  return (
    <Layout columns={24} maxWidth="1280px" padding="1.5rem 1rem">
      {/* 報頭 */}
      <header style={{
        textAlign: 'center',
        borderTop: '3px solid var(--nui-text-primary)',
        borderBottom: '1px solid var(--nui-rule-decorative)',
        paddingTop: '1rem',
        paddingBottom: '0.5rem',
      }}>
        <h1 style={{
          ...jp,
          fontSize: '72px',
          fontWeight: 900,
          margin: 0,
          letterSpacing: '0.15em',
          lineHeight: 1,
          color: 'var(--nui-text-primary)',
        }}>朝日新聞</h1>
        <div style={{
          ...jp,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: 'var(--nui-text-secondary)',
          padding: '0.5rem 1rem',
          borderTop: '1px solid var(--nui-rule-hairline)',
          marginTop: '0.5rem',
        }}>
          <span>第48721号</span>
          <span>令和8年（2026年）5月19日 火曜日</span>
          <span>朝刊 · 14版</span>
        </div>
      </header>

      {/* 一面トップ */}
      <Section columns={24} gap="1rem" style={{ marginTop: '1rem', paddingBottom: '1rem', borderBottom: '2px solid var(--nui-rule-decorative)' }}>
        <Article span={24}>
          <div style={{ ...jp, ...jpAccent, fontSize: '13px', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>【速報】</div>
          <h2 style={{ ...jp, fontSize: '48px', fontWeight: 900, lineHeight: 1.15, color: 'var(--nui-text-primary)', textAlign: 'center', margin: 0 }}>
            歴史的通商協定が成立　23カ国が署名
          </h2>
          <h3 style={{ ...jp, fontSize: '20px', fontWeight: 500, lineHeight: 1.5, color: 'var(--nui-text-secondary)', textAlign: 'center', margin: '0.5rem 0 1rem 0' }}>
            関税・労働・排出削減の包括枠組み　批准手続きへ
          </h3>
          <div style={{ ...jp, textAlign: 'center', fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '1rem' }}>
            ブリュッセル＝山田太郎、佐藤花子
          </div>

          <Figure
            src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80"
            alt="署名式の様子"
            caption="協定に署名する各国代表。ブリュッセルの会議場で19日未明。"
            credit="AP"
          />

          <BodyText weight="High" columns={3} style={{ ...jp, marginTop: '1rem' }}>
            <p>【ブリュッセル＝山田太郎】11日間にわたる交渉の末、23カ国の代表団は19日未明、関税、労働基準、温室効果ガス排出削減を包括する通商枠組み協定に署名した。各国議会の批准を経て発効する見通しで、分析筋は「一世代で最も重要な国際経済協調の成果」と評価している。</p>
            <p>協定の柱は三つ。第一に関税表の統一、第二に共通の労働最低基準の設定、第三に2040年までの排出削減経路への拘束力ある約束だ。重工業分野では2028年から段階的炭素賦課金が導入され、その収入は低炭素製造業への投資基金に充てられる。</p>
            <p>市場は穏やかな楽観で反応した。大陸総合指数は1.2％上昇し、通貨は対ドルで0.7％高。交渉期間中に上昇していた債券利回りは、交渉開始前の水準に戻った。資本財セクターが上昇を主導した。</p>
            <p>国内政治の反応は分かれた。協定の労働条項——有給休暇と団体交渉権の最低基準を定める——は労働組合連合から即座に歓迎されたが、商工会議所からは中小企業のコンプライアンス負担への懸念が示された。</p>
            <p>3カ国の議会指導者は夏季休会前の批准を示唆した。しかし2カ国の政府は事前に国民投票を実施する意向を示しており、手続きは秋まで延びる可能性がある。貿易研究センターは、最も楽観的なシナリオでも完全実施には少なくとも18カ月を要すると試算している。</p>
            <p>一般の旅行者や消費者にとって、当面の影響は限定的だ。国境手続きや製品基準は批准まで現行規定が適用される。しかし交渉担当者らは、より長い射程こそが重要だと主張する——歴史的に対立してきた隣国同士が、最も重要な10年間の共通ルールに合意したことの意義を。</p>
          </BodyText>
        </Article>
      </Section>

      {/* 二面：3栏 */}
      <Section columns={24} gap="1rem" style={{ marginTop: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--nui-rule-decorative)' }}>
        <Article span={8} style={{ background: 'var(--nui-bg-surface)', padding: '1rem', borderLeft: '3px solid var(--nui-accent-ink-blue)' }}>
          <div style={{ ...jp, ...jpAccent, fontSize: '12px', fontWeight: 700, marginBottom: '0.75rem', paddingLeft: '0.75rem', borderLeft: '3px solid var(--nui-accent-ink-blue)' }}>政治</div>
          <h3 style={{ ...jp, fontSize: '20px', fontWeight: 700, lineHeight: 1.35, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>気候法案が参院で全会一致可決</h3>
          <BodyText weight="Low" style={jp}>
            <p>数カ月の党派対立と複数回の修正を経て、参議院は昨夜、気候資源法案を全会一致で可決した。法案は低炭素産業への財政支援を強化する専用基金を設立する。</p>
            <p>支持者はこれを数十年で最も重要な環境立法と評価。反対派は地方財政への圧迫を懸念している。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...jp, fontSize: '16px', fontWeight: 600, lineHeight: 1.35, margin: '0 0 0.4rem 0' }}>都市鉄道3路線が認可</h4>
          <BodyText weight="Low" style={jp}>
            <p>市議会は24億ドル規模の都市鉄道拡張計画を承認。新たに3路線を追加し、既存路線のサービス時間を延長する。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...jp, fontSize: '16px', fontWeight: 600, lineHeight: 1.35, margin: '0 0 0.4rem 0' }}>港湾整備事業が着工</h4>
          <BodyText weight="Low" style={jp}>
            <p>3年計画で堆積物の浚渫と護岸の再建を実施。地方面。</p>
          </BodyText>
        </Article>

        <Article span={8} style={{ background: 'var(--nui-bg-surface)', padding: '1rem', borderLeft: '3px solid var(--nui-accent-ink-blue)' }}>
          <div style={{ ...jp, ...jpAccent, fontSize: '12px', fontWeight: 700, marginBottom: '0.75rem', paddingLeft: '0.75rem', borderLeft: '3px solid var(--nui-accent-ink-blue)' }}>経済</div>
          <h3 style={{ ...jp, fontSize: '20px', fontWeight: 700, lineHeight: 1.35, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>製造業PMI、年初来高値を更新</h3>
          <BodyText weight="Low" style={jp}>
            <p>統計局が本日発表したデータによると、5月の製造業購買担当者景気指数は52.4に上昇し、5カ月連続で拡大圏内を維持。新規受注と生産指数がともに改善した。</p>
            <p>アナリストは外需回復と在庫サイクルが製造業の回復を支えていると指摘。ただし中小企業の景況感は大企業に比べ依然弱い。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...jp, fontSize: '16px', fontWeight: 600, lineHeight: 1.35, margin: '0 0 0.4rem 0' }}>テック株が一日で3.7％上昇</h4>
          <BodyText weight="Low" style={jp}>
            <p>AI商用化への期待を背景にテクノロジー株が全面高。半導体、クラウドコンピューティング関連が上昇を主導。</p>
          </BodyText>
        </Article>

        <Article span={8} style={{ background: 'var(--nui-bg-surface)', padding: '1rem', borderLeft: '3px solid var(--nui-accent-ink-blue)' }}>
          <div style={{ ...jp, ...jpAccent, fontSize: '12px', fontWeight: 700, marginBottom: '0.75rem', paddingLeft: '0.75rem', borderLeft: '3px solid var(--nui-accent-ink-blue)' }}>文化</div>
          <h3 style={{ ...jp, fontSize: '20px', fontWeight: 700, lineHeight: 1.35, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>故宮博物院で新展覧会が開幕</h3>
          <BodyText weight="Low" style={jp}>
            <p>「シルクロード千年——中央アジア出土文物特別展」が本日、故宮博物院文華殿で開幕。8カ国の博物館から220点の貴重な文物を展示し、紀元前2世紀から14世紀までをカバーする。</p>
            <p>キュレーターによると、展覧会は「交易路」「信仰」「芸術」「日常」の4セクションに分かれ、多くの文物が初の海外展示となる。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...jp, fontSize: '16px', fontWeight: 600, lineHeight: 1.35, margin: '0 0 0.4rem 0' }}>大学志願者数が過去最高</h4>
          <BodyText weight="Low" style={jp}>
            <p>全国統一入試の出願者数が前年比18％増で過去最高を記録。文部科学省は定員拡大で対応する方針。</p>
          </BodyText>
        </Article>
      </Section>

      {/* 短信欄 */}
      <Section columns={24} gap="1rem" style={{ marginTop: '1rem' }}>
        <Article span={24}>
          <div style={{ ...jp, ...jpAccent, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem', paddingLeft: '0.75rem', borderLeft: '3px solid var(--nui-accent-ink-blue)' }}>短信 · 国内外</div>
          <BodyText weight="Low" columns={4} style={jp}>
            <p>▶ 日銀は政策金利を据え置いたが、通年のインフレ見通しを下方修正。市場は緩和政策の継続を織り込む。</p>
            <p>▶ FRB議事要旨で大半の当局者が年内利下げ開始を支持していることが判明。ただし具体的な時期については意見が分かれた。</p>
            <p>▶ 韓国中央銀行が政策金利を25bp引き下げ。今年初の利下げとなる。</p>
            <p>▶ インドが新年度予算を発表。インフラとクリーンエネルギーに重点配分。</p>
            <p>▶ EU首脳会議が支援パッケージで合意。規模は当初案から3割拡大。</p>
            <p>▶ 交通部が新たな高速道路建設計画を発表。今後5年で8000キロを新設、中西部を重点整備。</p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}
