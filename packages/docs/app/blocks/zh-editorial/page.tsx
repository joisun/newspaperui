'use client';
import { Layout, Section, Article, Rule, BodyText, Quote } from '@newspaperui/components';

const cn = { fontFamily: 'var(--font-family-cjk-serif)' };
const cnRed = { color: 'var(--nui-accent-cjk-red)' };

export default function ZhEditorial() {
  return (
    <Layout columns={24} maxWidth="1200px" padding="2rem 1.5rem">
      {/* 社论报头 */}
      <header style={{
        borderTop: '3px solid var(--nui-text-primary)',
        borderBottom: '1px solid var(--nui-rule-hairline)',
        padding: '0.75rem 0',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}>
        <h1 style={{ ...cn, fontSize: '28px', fontWeight: 900, margin: 0, letterSpacing: '0.1em' }}>社 论</h1>
        <div style={{ ...cn, ...cnRed, fontSize: '14px', fontWeight: 600 }}>· 时事评论 ·</div>
        <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)' }}>2026 年 5 月 19 日 · A2 版</div>
      </header>

      {/* 双栏对开 */}
      <Section columns={24} gap="2rem">
        {/* 左侧：主社论 */}
        <Article span={14} style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '2rem' }}>
          <div style={{ ...cn, ...cnRed, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.15em' }}>本报社论</div>
          <h2 style={{ ...cn, fontSize: '36px', fontWeight: 900, lineHeight: 1.2, color: 'var(--nui-text-primary)', margin: '0 0 0.75rem 0' }}>
            以规则之力重塑大陆经济秩序
          </h2>
          <h3 style={{ ...cn, fontSize: '18px', fontWeight: 500, lineHeight: 1.5, color: 'var(--nui-text-secondary)', margin: '0 0 1.5rem 0' }}>
            ——论二十三国贸易框架协议的历史意义与现实挑战
          </h3>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '1.5rem' }}>
            本报评论员
          </div>

          <BodyText weight="High" columns={2} dropCap style={cn}>
            <p>昨日签署的二十三国贸易框架协议，是近一代人以来国际经济治理领域最具雄心的制度性尝试。它不仅仅是一份关税减让清单，更是一套涵盖劳工标准、碳排放约束和争端解决机制的综合规则体系。在全球化遭遇逆风、单边主义抬头的当下，这份协议的达成本身就是一个值得珍视的信号。</p>
            <p>然而，签署只是起点。从文本到实践，从承诺到执行，中间横亘着巨大的制度落差。过去二十年的国际协议史反复证：宏大的框架如果缺乏有效的执行机制和国内政治支撑，最终往往沦为外交辞令的堆砌。</p>
            <p>本次协议的最大亮点在于其争端解决机制的硬约束力。九人仲裁小组的设置、跨区域提名的平衡设计、对超过两千万单位商业纠纷的最终裁决权——这些条款赋予了协议真正的「牙齿」。但也正因如此，它将面临来自各国国内利益集团的最强烈抵制。</p>
            <p>碳费机制是另一个关键考验。2028 年的启动时间表给了产业界三年的准备期，这在政治上是必要的妥协，但在气候科学的时间尺度上可能过于宽裕。环境团体的担忧并非没有道理：每一年的延迟都意味着更高的累积排放和更陡峭的未来减排曲线。</p>
            <p>劳工条款的落地同样充满挑战。最低假期天数和集体谈判权的扩展在纸面上令人鼓舞，但在劳动力市场高度分化的现实中，如何确保这些标准不被变通规避，需要各国劳动监察体系的实质性升级。</p>
            <p>对中小企业的影响尤需关注。协议虽然设置了三年碳费豁免期，但劳工标准的即时生效意味着合规成本的前置。如果缺乏配套的技术援助和过渡支持，中企业可能成为制度转型的最大承压者。</p>
            <p>我们认为，这份协议的历史意义不在于它解决了所有问题，而在于它建立了一个可以持续解决问题的框架。规则的力量不在于完美，而在于可预期、可执行、可修正。在这个意义上，二十三国迈出的这一步，值得审慎的乐观。</p>
            <p>但乐观必须伴随清醒。未来十八个月的批准进程将是真正的考验。两国公投的不确定性、产业游说的压力、民粹政治的干扰——任何一个环节的失败都可能让整个框架功亏一篑。各国政府需要以远超签署仪式的政治勇气，去完成从承诺到法律的最后一公里。</p>
          </BodyText>
        </Article>

        {/* 右侧：专家评论 + 读者来信 */}
        <Article span={10}>
          <div style={{ ...cn, ...cnRed, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.15em' }}>专家视点</div>
          <h3 style={{ ...cn, fontSize: '24px', fontWeight: 700, lineHeight: 1.3, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>
            碳费机制的经济学逻辑
          </h3>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '1rem' }}>
            张明远 · 清华大学公共政策学院教授
          </div>
          <BodyText weight="Medium" style={cn}>
            <p>本次协议中的碳费机制采用了「阶梯式」设计，这在经济学上是合理的。它避免了一步到位可能带来的产业冲击，同时通过逐年递增的费率向市场传递了明确的长期信号。</p>
            <p>关键在于价格底线的设定。每吨四十五单位的底价高于当前多数国内碳市场的实际成交价，这意味着协议将实质性地推高高排放行业的生产成本。但如果配合投资基金的有效运作，这些成本可以转化为低碳转型的加速器。</p>
            <p>需要警惕的是碳泄漏风险。如果协议覆盖范围之外的经济体不采取类似措施，高排放产业可能向非签约国转移，导致全球排放总量不降反升。边境碳调节机制的设计将是下一阶段谈判的核心议题。</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1.5rem 0' }} />

          <div style={{ ...cn, ...cnRed, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.15em' }}>专家视点</div>
          <h3 style={{ ...cn, fontSize: '24px', fontWeight: 700, lineHeight: 1.3, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>
            劳工条款的政治经济学
          </h3>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginBottom: '1rem' }}>
            李思琪 · 北京大学国际关系学院副教授
          </div>
          <BodyText weight="Medium" style={cn}>
            <p>劳工条款的纳入是本次协议最具政治敏感性的部分。它反映了一个深层趋势：贸易协议正从纯粹的市场准入工具，演变为社会标准的跨国协调平台。</p>
            <p>但这也带来了合法性问题。谁有权为另一个国家的工人设定最低标准？这个问题在发展水平差异显著的签约国之间尤为尖锐。协议的过渡条款试图缓解这一张力，但根本矛盾不会因为技术性安排而消失。</p>
          </BodyText>

          <Rule variant="hairline" style={{ margin: '1.5rem 0' }} />

          <div style={{ ...cn, ...cnRed, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.15em' }}>读者来信</div>
          <Quote variant="block" weight="Medium" style={cn}>
            <p>作为一名在制造业工作了二十年的工程师，我对协议中碳费条款既期待又担忧。期待的是它终于给了减排一个明确的价格信号；担忧的是我们工厂的设备更新周期至少需要五年，三年豁免期可能不够。希望政府在落实时能考虑到一线企业的实际困难。</p>
          </Quote>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginTop: '0.5rem' }}>
            —— 读者 刘建国 · 河北唐山
          </div>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Quote variant="block" weight="Medium" style={cn}>
            <p>作为一名大学生，我为这份协议感到振奋。它证明了多边主义在这个时代仍然是可能的。但我也想问：年轻人的声音在这些谈判中被听到了吗？气候问题最终影响的是我们这一代人的未来。</p>
          </Quote>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginTop: '0.5rem' }}>
            —— 读者 陈思远 · 上海
          </div>

          <Rule variant="hairline" style={{ margin: '1rem 0' }} />

          <Quote variant="block" weight="Medium" style={cn}>
            <p>社论说得好：「规则的力量不在于完美，而于可预期、可执行、可修正。」这句话同样适用于我们的国内改革。希望这份协议能成为推动国内制度建设的外部动力。</p>
          </Quote>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', marginTop: '0.5rem' }}>
            —— 读者 王芳 · 北京
          </div>
        </Article>
      </Section>
    </Layout>
  );
}
