'use client';
import { Layout, Section, Article, Rule, BodyText, Figure } from 'newspaperui';

const cn = { fontFamily: 'var(--font-family-cjk-serif)' };
const cnRed = { color: 'var(--nui-accent-cjk-red)' };
const sectionLabel = {
  ...cn,
  fontFamily: 'var(--font-family-meta)',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.15em',
  paddingBottom: '0.3rem',
  borderBottom: '1px solid var(--nui-rule-decorative)',
  marginBottom: '0.75rem',
} as const;

export default function ZhReview() {
  return (
    <Layout columns={24} maxWidth="1180px" padding="1.5rem 1.5rem 3rem">
      {/* 刊头 */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderTop: '3px solid var(--nui-text-primary)',
        borderBottom: '1px solid var(--nui-rule-hairline)',
        padding: '0.6rem 0',
        marginBottom: '1.5rem',
      }}>
        <h1 style={{ ...cn, fontSize: '26px', fontWeight: 900, margin: 0, letterSpacing: '0.15em' }}>书评周刊</h1>
        <div style={{ ...cn, ...cnRed, fontSize: '13px', fontWeight: 600 }}>BOOK REVIEW</div>
        <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)' }}>2026 年 5 月 19 日 · 第 214 期 · C 叠</div>
      </header>

      {/* 头条书评 */}
      <Section columns={24} gap="2rem" style={{ paddingBottom: '1.5rem' }}>
        <Article span={24}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ ...cn, ...cnRed, fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em' }}>本期主推</span>
            <span style={{ flex: 1, borderTop: '1px solid var(--nui-rule-hairline)' }} />
          </div>
          <h2 style={{ ...cn, fontSize: '38px', fontWeight: 900, lineHeight: 1.25, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>
            在书页间重走三万里
          </h2>
          <h3 style={{ ...cn, fontSize: '18px', fontWeight: 400, lineHeight: 1.6, color: 'var(--nui-text-secondary)', margin: '0 0 0.75rem 0' }}>
            ——评《漫长的丝路：一个历史学家的中亚行纪》
          </h3>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '1.25rem' }}>
            周文翰 · 特约书评人
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '1.5rem', alignItems: 'start' }}>
            <div>
              <Figure
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=440&q=80"
                alt="《漫长的丝路》书影"
                caption="《漫长的丝路》，陆远 著，跋涉文化 2026 年 3 月出版。"
                style={{ marginBottom: '0.75rem' }}
              />
              <div style={{ ...cn, fontSize: '12px', lineHeight: 1.8, color: 'var(--nui-text-secondary)', borderTop: '1px solid var(--nui-rule-hairline)', paddingTop: '0.5rem' }}>
                定价：78.00 元<br />
                页数：412 页<br />
                开本：32 开精装
              </div>
            </div>
            <BodyText weight="High" columns={2} dropCap style={cn}>
              <p>历时十年、七入中亚之后，历史学家陆远终于交出了这部四十万字的行纪。它既是一部严谨的学术考察，也是一部罕见的、带着尘土气息的旅行文学。作者从西安出发，沿天山北道西行，经撒马尔罕、布哈拉、梅尔夫，直至里海东岸，用双脚重新丈量了那条在教科书中被简化为箭头的古商路。</p>
              <p>本书最动人的部分，是作者对「废墟的体温」的执着记录。在碎叶城遗址，他没有复述李白的传说，而是蹲在夯土残垣下，记录一位吉尔吉斯牧羊人如何用唐代城墙的夯土块垒自家的羊圈。历史在此刻不再是玻璃展柜里的标本，而是仍在被使用的日常。</p>
              <p>学术层面，作者对「丝路由来多元说」的梳理尤为扎实。他遍引汉文、粟特文、波斯语文献，指出所谓「丝绸之路」从来不是一条单线通道，而是一张随绿洲水位、政局兴衰不断改道的网络。这一观点并不新鲜，但如此详尽的田野佐证，在中文世界尚属首次。</p>
              <p>缺憾同样明显。作者长于叙事而短于理论，全书缺乏一个统摄性的分析框架，读来更像一连串精彩的考察笔记，而非一部有野心的学术专著。对非专业读者而言，某些章节的地名与族名密度也近乎考验耐心。</p>
              <p>但这些瑕疵无损其整体价值。在中亚研究日益成为显学的今天，这本书提供了一种可贵的写作伦理：走下书斋，走向现场，让历史重新沾上尘土与体温。它值得每一个对远方仍怀有想象的读者。</p>
            </BodyText>
          </div>
        </Article>
      </Section>

      <Rule variant="double" style={{ margin: '0 0 1.5rem' }} />

      {/* 第二区：三篇短评均分通栏 */}
      <Section columns={24} gap="2rem" style={{ paddingBottom: '1.5rem' }}>
        <Article span={8} style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '2rem' }}>
          <div style={{ ...sectionLabel, color: 'var(--nui-text-primary)' }}>虚构 · FICTION</div>
          <h3 style={{ ...cn, fontSize: '20px', fontWeight: 700, lineHeight: 1.4, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>
            《夜航西行》：孤独者的星空
          </h3>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '0.75rem' }}>李静宜 · 本报特约撰稿</div>
          <BodyText weight="Low" style={cn}>
            <p>这部译自英文的经典回忆录，写的是上世纪三十年代一位女飞行员单人飞越非洲与大西洋的往事。作者笔调冷峻克制，把惊险的飞行写得如同夜航本身——寂静、辽远、直指内心。</p>
            <p>译者的处理颇为用心，保留了原文的呼吸节奏，中文读来没有翻译腔的滞涩。书中写夜航的一段尤其出色：星光不是导航的工具，而是孤独的证人。</p>
            <p>在「女性写作」被过度消费的当下，这本书提供了一种更沉静的样本：不必声嘶力竭，只需诚实记录一个人与天空的对峙。</p>
          </BodyText>
        </Article>

        <Article span={8} style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '2rem' }}>
          <div style={{ ...sectionLabel, color: 'var(--nui-text-primary)' }}>历史 · HISTORY</div>
          <h3 style={{ ...cn, fontSize: '20px', fontWeight: 700, lineHeight: 1.4, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>
            《盐的故事》：一粒晶体里的世界史
          </h3>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '0.75rem' }}>赵之谦 · 经济观察员</div>
          <BodyText weight="Low" style={cn}>
            <p>从山西盐池到威尼斯商路，从汉代的盐铁专营到英属印度的盐税抗争——作者以一粒盐为线索，串起五千年的贸易、战争与财政史。这种「小切口、大历史」的写法近年颇为流行，本书是其中完成度较高的一部。</p>
            <p>第三章论盐铁官营与帝国财政的关系，材料扎实，论证清晰，是全书最有分量的部分。可惜后半部转入现代工业后笔力渐弱，多少有虎头蛇尾之嫌。</p>
          </BodyText>
        </Article>

        <Article span={8}>
          <div style={{ ...sectionLabel, color: 'var(--nui-text-primary)' }}>诗歌 · POETRY</div>
          <h3 style={{ ...cn, fontSize: '20px', fontWeight: 700, lineHeight: 1.4, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>
            《山中来信》：迟到的成熟
          </h3>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '0.75rem' }}>陈白鹭 · 本报评论员</div>
          <BodyText weight="Low" style={cn}>
            <p>诗人五十八岁出版的第三本诗集，距上一本已有十九年。十九年的沉默没有白费：早年诗中的机巧与锋芒收敛了，取而代之的是近乎透明的朴素。写母亲梳头一首，通篇白描，结尾一句「梳子比头发先白了」，戛然而止，余味极长。</p>
            <p>在一个诗歌动辄追求爆炸性传播的时代，这样的写作近乎一种抵抗——抵抗喧哗，也抵抗被遗忘的焦虑。</p>
          </BodyText>
        </Article>
      </Section>

      {/* 第三区：新书速递通栏 */}
      <Section columns={24} style={{ borderTop: '1px solid var(--nui-rule-decorative)', paddingTop: '1rem' }}>
        <Article span={24}>
          <div style={{ ...sectionLabel, ...cnRed }}>新书速递 · NEW ARRIVALS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              ['《算法与诗人》', '沈澜 著 · 未名出版', '当机器学习开始写十四行诗，诗人该如何自处？一部介于随笔与预言之间的跨界之作。'],
              ['《古都的黄昏》', '苏枕书 著 · 三联书店', '奈良、京都、平安京——在古迹的阴影里，追问日本美学的来路与去向。'],
              ['《昆虫记新译》', '法布尔 著 · 顾枝 译', '百年经典的全新译本，注释详赡，附图精美，适合亲子共读。'],
              ['《造桥的人》', '茅新宇 口述 · 档案出版社', '三代桥梁工程师的口述史，一部沉默的国家建设档案。'],
            ].map(([title, meta, desc], i) => (
              <div key={i} style={{ borderTop: '1px solid var(--nui-rule-hairline)', paddingTop: '0.6rem' }}>
                <h4 style={{ ...cn, fontSize: '15px', fontWeight: 700, margin: '0 0 0.25rem 0', color: 'var(--nui-text-primary)' }}>{title}</h4>
                <div style={{ ...cn, fontSize: '11px', color: 'var(--nui-text-muted)', marginBottom: '0.4rem' }}>{meta}</div>
                <p style={{ ...cn, fontSize: '13px', lineHeight: 1.6, color: 'var(--nui-text-body)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </Article>
      </Section>

      {/* 页脚 */}
      <footer style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--nui-rule-hairline)',
        marginTop: '1.5rem',
        paddingTop: '0.5rem',
        ...cn,
        fontSize: '11px',
        color: 'var(--nui-text-muted)',
      }}>
        <span>人民周报 · 书评周刊</span>
        <span>编辑部地址：北京西城区椿树园 12 号</span>
        <span className="nui-tnum">C2 · 本版编辑：林之书</span>
      </footer>
    </Layout>
  );
}
