'use client';
import { Layout, Section, Article, Rule, BodyText, Figure } from 'newspaperui';

const cn = { fontFamily: 'var(--font-family-cjk-serif)' };
const cnRed = { color: 'var(--nui-accent-cjk-red)' };

export default function ZhFrontPage() {
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
