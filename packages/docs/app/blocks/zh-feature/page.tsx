'use client';
import { Layout, Section, Article, BodyText, Quote, Figure, PullQuote } from 'newspaperui';

const cn = { fontFamily: 'var(--font-family-cjk-serif)' };
const cnRed = { color: 'var(--nui-accent-cjk-red)' };

export default function ZhFeature() {
  return (
    <Layout columns={24} maxWidth="1200px" padding="2rem 1.5rem">
      {/* 副刊报头 */}
      <header style={{
        borderTop: '2px solid var(--nui-text-primary)',
        borderBottom: '1px solid var(--nui-rule-hairline)',
        padding: '0.75rem 0',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}>
        <h1 style={{ ...cn, fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '0.05em' }}>副 刊</h1>
        <div style={{ ...cn, ...cnRed, fontSize: '14px', fontWeight: 600 }}>· 文化专题 ·</div>
        <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)' }}>2026 年 5 月 19 日 · C 叠</div>
      </header>

      {/* 专题主标题 */}
      <Section columns={24} gap="2rem" style={{ marginBottom: '2rem' }}>
        <Article span={24}>
          <div style={{ ...cn, ...cnRed, fontSize: '13px', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.15em', textAlign: 'center' }}>【人物访谈】</div>
          <h2 style={{ ...cn, fontSize: '52px', fontWeight: 900, lineHeight: 1.15, color: 'var(--nui-text-primary)', textAlign: 'center', margin: 0 }}>
            从敦煌到威尼斯：一位策展人的丝路三十年
          </h2>
          <h3 style={{ ...cn, fontSize: '20px', fontWeight: 500, lineHeight: 1.5, color: 'var(--nui-text-secondary)', textAlign: 'center', margin: '0.75rem 0 1rem 0', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            ——专访故宫博物院特聘研究员、丝路特展总策展人 林文渊
          </h3>
          <div style={{ ...cn, textAlign: 'center', fontSize: '13px', color: 'var(--nui-text-muted)', marginBottom: '0.5rem' }}>
            本报记者 陈雪 · 摄影 黄翔
          </div>
        </Article>
      </Section>

      {/* 主图 + 介绍 */}
      <Section columns={24} gap="2rem" style={{ marginBottom: '2rem' }}>
        <Article span={12}>
          <Figure
            src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=1200&q=80"
            alt="林文渊在工作室"
            caption="林文渊在故宫博物院文华殿筹备中。"
            credit="摄影 黄翔"
          />
        </Article>
        <Article span={12}>
          <BodyText weight="High" dropCap style={cn}>
            <p>五月初的北京，故宫文华殿外的玉兰已尽落，游客在午后的光线里缓步穿过太和门广场。林文渊背着帆布包穿过这条她走了三十年的路，停下来朝展厅深处望了一眼，脸上闪过一丝不易察觉的疲惫。</p>
            <p>「最难的不是把文物搬过来，」她说，「是让人看懂它们是怎么被人用过、被人爱过的。」</p>
            <p>这句话来自一位与丝绸之路打了三十年交道的研究者。她主持过敦煌、撒马尔罕、长安、君士坦丁堡的多次联合考古，参与过威尼斯比恩纳莱、大都会博物馆的中亚特展。本次故宫的「丝路千年」是她回国后主持的首个大型综合展。</p>
            <p>访谈在文华殿东侧的临时工作室进行，墙上贴满了文物清单和展柜布置图。她身后摆着一只复刻的唐代鎏金银壶，盖子半开，内壁还能看到当初为对照测量留下的标记线。</p>
          </BodyText>
        </Article>
      </Section>

      {/* 访谈正文（双栏） */}
      <Section columns={24} gap="2rem" style={{ marginBottom: '2rem' }}>
        <Article span={24}>
          <BodyText weight="High" columns={2} style={cn}>
            <p style={{ ...cnRed, fontWeight: 700, marginBottom: '0.5rem' }}>记者：你最初是怎么走上这条路的？</p>
            <p>林文渊（笑）：很多人以为我是因为家里有什么传承。其实没有。我父亲是中学物理老师，母亲在邮局工作。我十八岁第一次去敦煌，是因为大学历史系的暑期考察。第一天进莫高窟，我在二百二十窟里站了两个小时没出来——壁画上画的胡商、骆驼、香料、织物，全是我从来没见过的世界。从那一刻起，我就决定这辈子要研究这些东西。</p>
          </BodyText>
        </Article>

        <Article span={24}>
          <PullQuote weight="High" align="center" author="林文渊" style={{ margin: '1rem 0 2rem' }}>
            真正的丝绸之路不是一条路，是一千条小路、一万次相遇、一亿次误解之后还能继续的对话。
          </PullQuote>
        </Article>

        <Article span={24}>
          <BodyText weight="High" columns={2} style={cn}>
            <p style={{ ...cnRed, fontWeight: 700, marginBottom: '0.5rem' }}>记者：从敦煌到威尼斯，三十年间最大的变化是什么？</p>
            <p>林文渊：是「连接」的概念。九十年代我们做研究，很多东西要靠纸质书信跨大陆传递，一个细节核对要花半年。现在数据库共享了，三维扫描数据可以即时调用，二十国研究者可以同时在一个虚拟展厅里讨论同一件文物。但同时，我们也意识到——技术让我们更快接触到东西，却没让我们更慢地去理解它。</p>
            <p>过去看一件唐代鎏金银壶，研究者会用一周时间去琢磨它的纹样、铸造工艺、流转路径，今天可能五分钟读完一篇报告就「了解」了。这是个矛盾——我们拥有了从未有过的工具，却失去了过去那种与物体共处的耐心。</p>
            <p>所以我现在做展览，特别注意「停下来」的设计。每个主要展品前面都有座位，旁边墙面上是手写笔记体的释读文字，不是冷冰冰的标签。我希望观众在那里待二十分钟，而不是五秒。</p>

            <p style={{ ...cnRed, fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem' }}>记者：本次展览中你最想推荐的一件文物？</p>
            <p>林文渊：是从乌兹别克斯坦借来的一件粟特银盘，公元七世纪的作品。盘心刻着一位骑马武士，但你仔细看，他的马具是萨珊样式，盔甲是拜占庭样式，旁边的装饰是中国唐代的卷草纹。一件器物身上汇集了三个文明的痕迹。这就是丝路的真正含义——不是从 A 到 B 的物流路线，而是文明之间从未停止的对话。</p>

            <p style={{ ...cnRed, fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem' }}>记者：对年轻一代研究者，你有什么想说的？</p>
            <p>林文渊：愿意花笨功夫。这个领域诱惑很多——出国机会多、跨界合作多、被媒体关注的概率也比其他人文学科高。但所有真正有价值的研究，归根到底都是反复地、长时间地、安静地与材料相处。这是无法外包给任何工具的事情。</p>
          </BodyText>
        </Article>
      </Section>

      {/* 尾声引语 */}
      <Section columns={24} gap="2rem" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--nui-rule-hairline)' }}>
        <Article span={24}>
          <Quote variant="block" weight="High" style={{ ...cn, textAlign: 'center', maxWidth: '700px', margin: '0 auto', borderLeft: 'none' }}>
            访谈结束时，文华殿的灯渐次熄灭。她最后看了一眼那只半开盖子的银壶。「它在等明天。」她说。
          </Quote>
          <div style={{ ...cn, fontSize: '12px', color: 'var(--nui-text-muted)', textAlign: 'center', marginTop: '1rem', letterSpacing: '0.1em' }}>
            「丝路千年」特展即日起至九月三十日 · 故宫博物院文华殿
          </div>
        </Article>
      </Section>
    </Layout>
  );
}
