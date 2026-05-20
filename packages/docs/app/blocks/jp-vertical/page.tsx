'use client';
import React from 'react';

const jp = { fontFamily: 'var(--font-family-cjk-jp)' };
const jpAccent = { color: 'var(--nui-accent-ink-blue)' };

export default function JpVertical() {
  return (
    <div style={{
      background: 'var(--nui-bg-page)',
      color: 'var(--nui-text-body)',
      padding: '2rem',
      minHeight: '100vh',
    }}>
      {/* 竖排容器 */}
      <div style={{
        writingMode: 'vertical-rl',
        ...jp,
        height: '85vh',
        overflow: 'hidden',
      }}>
        {/* 報頭（竖排中在最右侧） */}
        <div style={{
          borderLeft: '3px solid var(--nui-text-primary)',
          paddingLeft: '1rem',
          marginLeft: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '1rem',
        }}>
          <h1 style={{
            ...jp,
            fontSize: '56px',
            fontWeight: 900,
            letterSpacing: '0.2em',
            lineHeight: 1.2,
            margin: 0,
            color: 'var(--nui-text-primary)',
          }}>朝日新聞</h1>
          <div style={{ fontSize: '12px', color: 'var(--nui-text-muted)', lineHeight: 1.8 }}>
            <div>令和八年</div>
            <div>五月十九日</div>
            <div>火曜日</div>
            <div>第48721号</div>
          </div>
        </div>

        {/* 一面トップ記事 */}
        <div style={{
          borderLeft: '1px solid var(--nui-rule-hairline)',
          paddingLeft: '1.5rem',
          marginLeft: '1.5rem',
          maxHeight: '100%',
        }}>
          <div style={{ ...jpAccent, fontSize: '13px', fontWeight: 700, marginBottom: '1rem' }}>【速報】</div>
          <h2 style={{
            ...jp,
            fontSize: '36px',
            fontWeight: 900,
            lineHeight: 1.4,
            color: 'var(--nui-text-primary)',
            margin: '0 0 1rem 0',
          }}>
            歴史的通商協定が成立
          </h2>
          <h3 style={{
            ...jp,
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: 1.6,
            color: 'var(--nui-text-secondary)',
            margin: '0 0 1.5rem 0',
          }}>
            二十三カ国が署名　関税・労働・排出削減の包括枠組み
          </h3>
          <div style={{ fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '1rem' }}>
            ブリュッセル＝山田太郎
          </div>
          <div style={{ fontSize: '15px', lineHeight: 2.0, color: 'var(--nui-text-body)' }}>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>十一日間にわたる交渉の末、二十三カ国の代表団は十九日未明、関税、労働基準、温室効果ガス排出削減を包括する通商枠組み協定に署名した。各国議会の批准を経て発効する見通しで、分析筋は「一世代で最も重要な国際経済協調の成果」と評価している。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>協定の柱は三つ。第一に関税表の統一、第二に共通の労働最低基準の設定、第三に二〇四〇年までの排出削減経路への拘束力ある約束だ。重工業分野では二〇二八年から段階的炭素賦課金が導入される。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>市場は穏やかな楽観で反応した。大陸総合指数は一・二パーセント上昇し、通貨は対ドルで〇・七パーセント高。交渉期間中に上昇していた債券利回りは、交渉開始前の水準に戻った。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>国内政治の反応は分かれた。協定の労働条項は労働組合連合から即座に歓迎されたが、商工会議所からは中小企業のコンプライアンス負担への懸念が示された。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>三カ国の議会指導者は夏季休会前の批准を示唆した。しかし二カ国の政府は事前に国民投票を実施する意向を示しており、手続きは秋まで延びる可能性がある。</p>
          </div>
        </div>

        {/* 二面記事 */}
        <div style={{
          borderLeft: '1px solid var(--nui-rule-hairline)',
          paddingLeft: '1.5rem',
          marginLeft: '1.5rem',
          maxHeight: '100%',
        }}>
          <div style={{ ...jpAccent, fontSize: '12px', fontWeight: 700, marginBottom: '0.75rem' }}>政治</div>
          <h3 style={{ ...jp, fontSize: '22px', fontWeight: 700, lineHeight: 1.4, color: 'var(--nui-text-primary)', margin: '0 0 0.75rem 0' }}>
            気候法案が参院で全会一致可決
          </h3>
          <div style={{ fontSize: '14px', lineHeight: 2.0, color: 'var(--nui-text-body)' }}>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>数カ月の党派対立と複数回の修正を経て、参議院は昨夜、気候資源法案を全会一致で可決した。法案は低炭素産業への財政支援を強化する専用基金を設立する。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>支持者はこれを数十年で最も重要な環境立法と評価する一方、反対派は地方財政への圧迫を懸念している。法案は来月一日から施行される。</p>
          </div>
        </div>

        {/* 三面記事 */}
        <div style={{
          borderLeft: '1px solid var(--nui-rule-hairline)',
          paddingLeft: '1.5rem',
          marginLeft: '1.5rem',
          maxHeight: '100%',
        }}>
          <div style={{ ...jpAccent, fontSize: '12px', fontWeight: 700, marginBottom: '0.75rem' }}>経済</div>
          <h3 style={{ ...jp, fontSize: '22px', fontWeight: 700, lineHeight: 1.4, color: 'var(--nui-text-primary)', margin: '0 0 0.75rem 0' }}>
            製造業ＰＭＩ年初来高値
          </h3>
          <div style={{ fontSize: '14px', lineHeight: 2.0, color: 'var(--nui-text-body)' }}>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>統計局が本日発表したデータによると、五月の製造業購買担当者景気指数は五二・四に上昇し、五カ月連続で拡大圏内を維持した。新規受注と生産指数がともに改善。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>アナリストは外需回復と在庫サイクルが製造業の回復を支えていると指摘する。ただし中小企業の景況感は大企業に比べ依然として弱い状況が続いている。</p>
          </div>
        </div>

        {/* 四面：文化 */}
        <div style={{
          borderLeft: '1px solid var(--nui-rule-hairline)',
          paddingLeft: '1.5rem',
          marginLeft: '1.5rem',
          maxHeight: '100%',
        }}>
          <div style={{ ...jpAccent, fontSize: '12px', fontWeight: 700, marginBottom: '0.75rem' }}>文化</div>
          <h3 style={{ ...jp, fontSize: '22px', fontWeight: 700, lineHeight: 1.4, color: 'var(--nui-text-primary)', margin: '0 0 0.75rem 0' }}>
            故宮博物院で新展覧会
          </h3>
          <div style={{ fontSize: '14px', lineHeight: 2.0, color: 'var(--nui-text-body)' }}>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>「シルクロード千年」特別展が本日開幕。八カ国の博物館から二百二十点の貴重な文物を展示し、紀元前二世紀から十四世紀までをカバーする大規模展覧会。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>キュレーターによると展覧会は「交易路」「信仰」「芸術」「日常」の四セクションに分かれ、多くの文物が初の海外展示となる。九月三十日まで。</p>
          </div>
        </div>

        {/* 五面：短信 */}
        <div style={{
          borderLeft: '1px solid var(--nui-rule-hairline)',
          paddingLeft: '1.5rem',
          marginLeft: '1.5rem',
          maxHeight: '100%',
        }}>
          <div style={{ ...jpAccent, fontSize: '12px', fontWeight: 700, marginBottom: '0.75rem' }}>短信</div>
          <div style={{ fontSize: '13px', lineHeight: 2.0, color: 'var(--nui-text-body)' }}>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>▼日銀は政策金利を据え置き。通年インフレ見通しを下方修正。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>▼ＦＲＢ議事要旨で年内利下げ支持が多数と判明。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>▼韓国中銀が二五ｂｐ利下げ。今年初。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>▼インドが新年度予算発表。インフラ重点。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>▼ＥＵ首脳会議が支援策で合意。三割増額。</p>
            <p style={{ margin: '0 0 0.5em 0', textIndent: '1em' }}>▼大学志願者数が過去最高。前年比一八％増。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
