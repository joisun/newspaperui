'use client';

import {
  Layout, Section, Article, Rule, BodyText, Figure,
  Masthead, Headline, Subhead, Kicker, Byline, Dateline,
  PullQuote,
} from 'newspaperui';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <div style={{
        background: 'var(--nui-bg-surface)',
        borderBottom: '2px solid var(--nui-rule-decorative)',
        padding: '3rem 2rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--font-family-meta)',
          fontSize: '11px',
          fontVariantCaps: 'small-caps',
          letterSpacing: '0.1em',
          color: 'var(--nui-accent-primary)',
          marginBottom: '0.5rem',
        }}>Production Newspaper Components</div>
        <h1 style={{
          fontFamily: 'var(--font-family-masthead)',
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '0.02em',
          color: 'var(--nui-text-primary)',
          margin: '0 0 1rem 0',
        }}>NewspaperUI</h1>
        <p style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: '18px',
          lineHeight: 1.5,
          color: 'var(--nui-text-secondary)',
          maxWidth: '700px',
          margin: '0 auto 1.5rem',
        }}>
          24 React components · CSS Grid + Multi-column · 中文 / English / 日本語
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontFamily: 'var(--font-family-meta)', fontSize: '13px' }}>
          <Link href="/grid-system" style={{ color: 'var(--nui-accent-primary)', textDecoration: 'none', fontWeight: 600 }}>Documentation →</Link>
          <Link href="/create" style={{ color: 'var(--nui-text-secondary)', textDecoration: 'none' }}>Create Theme</Link>
          <Link href="/blocks" style={{ color: 'var(--nui-text-secondary)', textDecoration: 'none' }}>All Blocks</Link>
          <a href="https://github.com/joisun/newspaperui" style={{ color: 'var(--nui-text-muted)', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>

      {/* Demo 1: Chinese */}
      <DemoSection label="CHINESE · 中文" sublabel="人民周报 · Noto Serif SC · 克制朱红">
        <ZhFrontpageDemo />
      </DemoSection>

      {/* Demo 2: English */}
      <DemoSection label="ENGLISH" sublabel="The Daily Chronicle · Source Serif 4 · NYT Style">
        <EnFrontpageDemo />
      </DemoSection>

      {/* Demo 3: Japanese */}
      <DemoSection label="JAPANESE · 日本語" sublabel="朝日新聞 · Noto Serif JP · 横組み">
        <JpFrontpageDemo />
      </DemoSection>
    </div>
  );
}

function DemoSection({ label, sublabel, children }: { label: string; sublabel: string; children: React.ReactNode }) {
  return (
    <div style={{ borderBottom: '1px solid var(--nui-rule-hairline)' }}>
      <div style={{
        background: 'var(--nui-bg-surface)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderBottom: '1px solid var(--nui-rule-hairline)',
      }}>
        <span style={{
          fontFamily: 'var(--font-family-meta)',
          fontSize: '11px',
          fontWeight: 700,
          fontVariantCaps: 'small-caps',
          letterSpacing: '0.1em',
          color: 'var(--nui-accent-primary)',
        }}>{label}</span>
        <span style={{
          fontFamily: 'var(--font-family-meta)',
          fontSize: '11px',
          color: 'var(--nui-text-muted)',
        }}>{sublabel}</span>
      </div>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {children}
      </div>
    </div>
  );
}

/* ============================================================
 * DEMO: Chinese Front Page (人民周报)
 * ============================================================ */
const cn = { fontFamily: 'var(--font-family-cjk-serif)' };
const cnRed = { color: 'var(--nui-accent-cjk-red)' };

function ZhFrontpageDemo() {
  return (
    <Layout columns={24} maxWidth="1280px" padding="1.5rem 1rem">
      {/* 报头 */}
      <header style={{
        textAlign: 'center',
        borderTop: '4px solid var(--nui-accent-cjk-red)',
        borderBottom: '1px solid var(--nui-rule-decorative)',
        paddingTop: '1rem',
        paddingBottom: '0.5rem',
      }}>
        <div style={{
          fontFamily: 'var(--font-family-meta)',
          fontSize: '11px',
          color: 'var(--nui-text-muted)',
          letterSpacing: '0.2em',
          marginBottom: '0.25rem',
        }}>RENMIN ZHOUBAO · 中国第一周报</div>
        <h1 style={{
          ...cn,
          ...cnRed,
          fontSize: '88px',
          fontWeight: 900,
          margin: 0,
          letterSpacing: '0.1em',
          lineHeight: 1,
        }}>人民周报</h1>
        <div style={{
          ...cn,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: 'var(--nui-text-secondary)',
          padding: '0.5rem 1rem',
          borderTop: '1px solid var(--nui-rule-hairline)',
          marginTop: '0.5rem',
        }}>
          <span>第 2026 期 · 总第 5891 期</span>
          <span>2026 年 5 月 19 日 · 星期二 · 农历四月初三</span>
          <span>每份 5 元 · 全年 260 元</span>
        </div>
      </header>

      {/* 版面导航条 */}
      <div style={{
        ...cn,
        display: 'flex',
        gap: '0',
        fontSize: '12px',
        borderTop: '1px solid var(--nui-rule-hairline)',
        borderBottom: '1px solid var(--nui-rule-hairline)',
        marginTop: '1rem',
      }}>
        {['01版 要闻', '02版 经济', '03版 国际', '04版 文化', '05版 体育', '06版 副刊'].map((v, i) => (
          <div key={i} style={{
            padding: '0.4rem 1rem',
            borderRight: '1px solid var(--nui-rule-hairline)',
            color: i === 0 ? 'var(--nui-accent-cjk-red)' : 'var(--nui-text-secondary)',
            fontWeight: i === 0 ? 700 : 400,
            cursor: 'pointer',
          }}>{v}</div>
        ))}
      </div>

      {/* 头条区 */}
      <Section columns={24} gap="1rem" style={{ marginTop: '1rem', paddingBottom: '1rem', borderBottom: '2px solid var(--nui-rule-decorative)' }}>
        <Article span={24}>
          <div style={{ ...cn, ...cnRed, fontSize: '13px', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center', letterSpacing: '0.1em' }}>【本报北京电】</div>
          <h2 style={{ ...cn, fontSize: '56px', fontWeight: 900, lineHeight: 1.1, color: 'var(--nui-text-primary)', textAlign: 'center', margin: 0 }}>
            历史性贸易协定昨日签署
          </h2>
          <h3 style={{ ...cn, fontSize: '24px', fontWeight: 500, lineHeight: 1.4, color: 'var(--nui-text-secondary)', textAlign: 'center', margin: '0.5rem 0 1rem 0' }}>
            ——二十三国代表历经十一日谈判 达成关税、劳工、减排三大领域综合框架
          </h3>
          <div style={{ ...cn, textAlign: 'center', fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '1rem' }}>
            本报记者 王思源 李明 · 联合报道
          </div>
          <Figure
            src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80"
            alt="签署仪式现场"
            caption="各国代表在布鲁塞尔会议中心签署协定。"
            credit="新华社记者 摄"
            style={{ marginBottom: '1rem' }}
          />
          <BodyText weight="Medium" columns={3} dropCap style={cn}>
            <p>本报布鲁塞尔电 经过连续十一天紧张磋商，二十三国代表于昨日深夜就一项涵盖关税、劳工标准与减排目标的综合框架协议达成最终一致。该协议尚需各成员国议会批准，但分析人士普遍认为，这是近一代人以来最具深远意义的国际经济协调成果。</p>
            <p>协议核心条款涵盖三个层面：一是统一关税表，二是设立共同劳工最低标准，三是约束各方至 2040 年前的减排路径。重工业领域将自 2028 年起执行阶梯碳费，所得款项注入大陆投资基金，专项支持低碳制造业升级。</p>
            <p>消息公布后，市场反应温和乐观。大陆综合指数收涨 1.2%，欧元兑美元上涨 0.7%。债券收益率从协议谈判期间高位回落至会前水平。资本货物板块领涨，被视为最大受益者。</p>
            <p>国内政界反应不一。协议关于带薪休假和集体谈判权的劳工条款获工会联盟支持，但商会担忧中小企业难以承担合规成本。工业联合会主席表示，需要过渡期支持以缓解冲击。</p>
            <p>三国议会领袖暗示，可能在夏季休会前完成批准程序。但另有两国政府表示将先行举行公投，预计审议过程将延续至秋季。贸易研究中心估算，即便按最快时间表，全面落实仍需至少十八个月。</p>
            <p>对普通旅客和消费者而言，短期内变化有限。边境流程和产品标准在批准前仍按现行规定执行。但更深远的意义在于：历史上彼此分裂的邻国，正首次就最关键十年的共同规则达成一致。</p>
            <p>分析人士指出，本次协议的最大突破在于建立了具有约束力的争端解决机制。九人仲裁小组由三个区域分别提名三人组成，对超过两千万单位的商业纠纷具有最终裁决权。这是过去多边协议中罕见的硬性条款。</p>
            <p>环境团体对碳费机制表示谨慎乐观，但担忧 2028 年的起始时间过晚。多家环保组织联合声明称，将持续监督各国国内立法，确保不被既得利益集团淡化。</p>
            <p>劳工议题方面，最低假期天数从原方案的 18 天上调至 20 天，这一调整被视为工会方的实质让步换得。集体谈判权的扩展则覆盖了中小企业，超过最初保守派的预期。</p>
          </BodyText>
        </Article>
      </Section>

      {/* 二条区：3 栏并列 */}
      <Section columns={24} gap="1rem" style={{ marginTop: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--nui-rule-decorative)' }}>
        <Article span={8} style={{ border: '1px solid var(--nui-rule-hairline)', padding: '1rem', background: 'var(--nui-bg-surface)' }}>
          <div style={{ ...cn, ...cnRed, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem' }}>要 闻</div>
          <h3 style={{ ...cn, fontSize: '22px', fontWeight: 700, lineHeight: 1.3, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>气候立法获参议院全票通过</h3>
          <BodyText weight="Low" style={cn}>
            <p>历经数月党争与多轮修正，参议院昨晚以全票通过气候资源法案。法案设立专项基金，加强对低碳产业的财政支持。</p>
            <p>支持者称，这是数十年来最重要的环境立法之一；反对者则担忧地方财政承压。法案将于下月一日起施行，覆盖工业、交通、建筑等重点领域。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...cn, fontSize: '17px', fontWeight: 600, lineHeight: 1.3, margin: '0 0 0.4rem 0' }}>城市轨道交通三线获批</h4>
          <BodyText weight="Low" style={cn}>
            <p>市议会批准价值二十四亿的轨道交通扩展计划，将新增三条快线并延长既有线路服务时间。详见 A8 版。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...cn, fontSize: '17px', fontWeight: 600, lineHeight: 1.3, margin: '0 0 0.4rem 0' }}>港口治理项目正式启动</h4>
          <BodyText weight="Low" style={cn}>
            <p>工程师将在三年内完成沉积物清淤与海堤重建。地方版 A10。</p>
          </BodyText>
        </Article>

        <Article span={8} style={{ border: '1px solid var(--nui-rule-hairline)', padding: '1rem', background: 'var(--nui-bg-surface)' }}>
          <div style={{ ...cn, ...cnRed, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem' }}>经 济</div>
          <h3 style={{ ...cn, fontSize: '22px', fontWeight: 700, lineHeight: 1.3, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>制造业 PMI 创年内新高</h3>
          <BodyText weight="Low" style={cn}>
            <p>统计局今日发布数据显示，五月制造业采购经理指数升至 52.4，连续第五个月位于扩张区间，新订单与生产指数双双走强。</p>
            <p>分析人士指出，外需回暖与库存周期共同支撑制造业复苏。但中小企业景气度仍弱于大型企业，结构性矛盾尚未根本缓解。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...cn, fontSize: '17px', fontWeight: 600, lineHeight: 1.3, margin: '0 0 0.4rem 0' }}>科技板块单日涨 3.7%</h4>
          <BodyText weight="Low" style={cn}>
            <p>受人工智能商业化预期推动，科技股集体走强。半导体、云计算板块涨幅领先。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...cn, fontSize: '17px', fontWeight: 600, lineHeight: 1.3, margin: '0 0 0.4rem 0' }}>大宗商品市场普遍下行</h4>
          <BodyText weight="Low" style={cn}>
            <p>受美元走强影响，原油、铜、铁矿石主力合约日内回调，部分品种创近月新低。</p>
          </BodyText>
        </Article>

        <Article span={8} style={{ border: '1px solid var(--nui-rule-hairline)', padding: '1rem', background: 'var(--nui-bg-surface)' }}>
          <div style={{ ...cn, ...cnRed, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem' }}>文 化 · 教 育</div>
          <h3 style={{ ...cn, fontSize: '22px', fontWeight: 700, lineHeight: 1.3, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>故宫博物院新展开幕</h3>
          <BodyText weight="Low" style={cn}>
            <p>「丝路千年——中亚出土文物特展」于今日在故宫博物院文华殿开幕，展出来自八国博物馆的二百二十件珍贵文物，覆盖公元前二世纪至公元十四世纪。</p>
            <p>策展人介绍，展览分为「商路」「信仰」「艺术」「日常」四个单元，多件文物为首次出境展出。展期至九月三十日结束。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...cn, fontSize: '17px', fontWeight: 600, lineHeight: 1.3, margin: '0 0 0.4rem 0' }}>大学申请人数创新高</h4>
          <BodyText weight="Low" style={cn}>
            <p>全国统招报名人数较去年增长 18%，创历史新高。教育部表示将相应扩大录取规模。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '0.75rem 0' }} />
          <h4 style={{ ...cn, fontSize: '17px', fontWeight: 600, lineHeight: 1.3, margin: '0 0 0.4rem 0' }}>国家交响乐团新任音乐总监</h4>
          <BodyText weight="Low" style={cn}>
            <p>经过两年的全球遴选，乐团昨日宣布由旅欧指挥家张明远接任音乐总监。</p>
          </BodyText>
        </Article>
      </Section>

      {/* 简讯 + 要点提示 */}
      <Section columns={24} gap="1rem" style={{ marginTop: '1rem' }}>
        <Article span={6} style={{ background: 'var(--nui-bg-surface)', padding: '1rem', borderLeft: '3px solid var(--nui-accent-cjk-red)' }}>
          <div style={{ ...cn, ...cnRed, fontSize: '11px', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>本期要点</div>
          <ul style={{ ...cn, fontSize: '14px', lineHeight: 1.7, paddingLeft: '1.2em', margin: 0, color: 'var(--nui-text-body)' }}>
            <li>贸易协定核心要点解读 · A2</li>
            <li>气候法案全文及解读 · A4</li>
            <li>制造业数据深度分析 · B1</li>
            <li>故宫新展专题与图集 · C3</li>
            <li>文化评论：丝路新解读 · C5</li>
            <li>读者来信精选 · D2</li>
            <li>体坛快报：联赛战报 · E1</li>
            <li>天气预报与生活信息 · F4</li>
          </ul>
        </Article>

        <Article span={18}>
          <div style={{ ...cn, ...cnRed, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem' }}>简 讯 · 国 际 国 内</div>
          <BodyText weight="Low" columns={4} style={cn}>
            <p><strong>北京</strong> 交通部发布新一轮高速公路建设规划，未来五年新增里程 8000 公里，重点覆盖中西部欠发达地区。</p>
            <p><strong>上海</strong> 自贸区扩区方案获批，新增的金融服务业开放清单将于下月发布，涵盖跨境支付、保险、证券等领域。</p>
            <p><strong>深圳</strong> 创业板新规修订草案征求意见，重点完善退市机制与投资者保护制度。</p>
            <p><strong>广州</strong> 粤港澳大湾区联合科创基金正式成立，首期规模 500 亿元，重点投向人工智能、生物医药、新能源汽车三大领域。</p>
            <p><strong>东京</strong> 日本央行维持利率不变，但下调全年通胀预期，市场对宽松政策延续抱有预期。</p>
            <p><strong>布鲁塞尔</strong> 欧盟峰会就援助方案达成一致，规模较此前预案扩大三成。</p>
            <p><strong>华盛顿</strong> 联邦储备委员会会议纪要显示，多数官员支持在年内启动降息周期，但具体时点仍存分歧。</p>
            <p><strong>新德里</strong> 印度公布新一年财政预算，重点向基础设施和清洁能源倾斜。</p>
            <p><strong>首尔</strong> 韩国央行宣布技术性下调政策利率 25 个基点，为今年首次降息。</p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}

/* ============================================================
 * DEMO: English Front Page (The Daily Chronicle)
 * ============================================================ */
function EnFrontpageDemo() {
  return (
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

        {/* Center: Lead story */}
        <Article span={14}>
          <div style={{ textAlign: 'center' }}><Kicker>Capitol · Breaking</Kicker></div>
          <Headline weight="High" align="center">
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
            <p><Dateline>Brussels —</Dateline> After eleven consecutive days of negotiation that several
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
            Professor Elena Marchetti of the University of Turin, &ldquo;is that it touches every household&mdash;
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
          <Byline>By Tom&#225;s Almeida</Byline>

          <BodyText weight="Medium" style={{ marginTop: '0.75rem' }}>
            <p><Dateline>Lisbon —</Dateline> Eleven coastal nations announced a binding compact to coordinate
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
            <p><Dateline>Sacramento —</Dateline> A six-month review of more than four thousand pages of
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
  );
}

/* ============================================================
 * DEMO: Japanese Front Page (朝日新聞 · 横組み)
 * ============================================================ */
const jp = { fontFamily: 'var(--font-family-cjk-jp)' };
const jpAccent = { color: 'var(--nui-accent-ink-blue)' };

function JpFrontpageDemo() {
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