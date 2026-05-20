# NewspaperUI 交接文档

## 当前完成进度

### ✅ 已完成

1. **Stage 1**：theme + utils 基础设施重写
2. **Stage 2**：18 个组件全部重写（Layout / Section / Article / Layer / Masthead / Rule / Headline / Subhead / Kicker / BodyText / Quote / Byline / Dateline / Caption / Image / Figure / Video / PullQuote）
3. **Stage 3**：生产级头版 demo（NYT + Blackletter）
4. **Stage 4**：9 个文档章节
5. **Stage 5**：验证（29/29 测试通过，Design Agent 复评 9/10）
6. **同步 design.md**
7. **#17**：修复首页 + Blackletter 头版的空白问题（Briefs 增加新闻条目，BodyText 增加段落）
8. **#18**：修复 TypeScript lint warnings（重新 build 生成 .d.ts）
9. **#16**：Landing Page + Header 重构
   - 新建 `packages/docs/components/Header.tsx`（全局 sticky Header，包含 Docs/Components/Themes/Blocks/GitHub 导航）
   - 重写 `packages/docs/app/layout.tsx` 引入 Header
   - 调整 `packages/docs/app/(docs)/layout.tsx` 适配 Header 高度（65px）
   - 调整 `packages/docs/components/Sidebar.tsx` sticky `top: 65px`
   - **NYT 头版迁移到 `/examples/nyt-frontpage`**
   - 新建 `packages/docs/app/page.tsx` 作为报纸风格 Landing Page，使用 Masthead + 7 个 demo 卡片垂直分布

### ⏳ 未完成

10. **#15**：Blocks 页面 6 个完整 demo（**核心剩余工作**）
11. **#13**：Stage 6 — JSDoc + README

---

## 系统现状

### Monorepo 结构

```
/Users/joi-com/Desktop/space/newspaperui
├── packages/
│   ├── theme/          # CSS variables + 视觉权重表 + 字体 + 排版工具类
│   ├── utils/          # validateSpan / clampSpan / cx
│   ├── components/     # 18 个 React 组件
│   └── docs/           # Next.js 15 文档站
├── design.md           # 设计规范（已同步修订版）
├── HANDOFF.md          # 本文档
└── SKILL.md            # 工作流方法论
```

### 工具链版本

- pnpm workspace + Turborepo
- React 18.3 / TypeScript 5.7 / Next.js 15.5 / Vite 5.4 / Tailwind 3.4
- Vitest + React Testing Library

### 关键命令

```bash
cd /Users/joi-com/Desktop/space/newspaperui

# 全量构建
pnpm build

# 测试
pnpm --filter @newspaperui/utils test       # 11 tests
pnpm --filter @newspaperui/components test  # 18 tests

# 开发服务器
pnpm --filter @newspaperui/docs dev         # http://localhost:3000
```

### 已通过验证

- `pnpm build` 4 packages 全部通过，0 warning
- `pnpm test` 29/29 通过
- Playwright 实测 13 项视觉清单全 PASS
- Design Agent 复评 9.0/10

---

## 已实现的组件 API

### 布局组件

```typescript
import { Layout, Section, Article, Layer, Masthead, Rule } from '@newspaperui/components';

<Layout columns={24} maxWidth="1280px" padding="2rem" theme="light">
<Section columns={24} gap="2rem" breakable divider="bottom">
<Article span={8} breakable>
<Layer position="absolute" top="1rem" right="1rem" zIndex={10}>
<Masthead variant="classic" | "blackletter" | "modern" title kicker edition date price>
<Rule variant="hairline" | "double" | "thick" orientation="horizontal" | "vertical" span={N}>
```

### 文本组件

```typescript
import {
  Headline, Subhead, Kicker, BodyText, Quote, Byline, Dateline, Caption,
} from '@newspaperui/components';

<Headline weight="High" | "Medium" | "Low" span={N} as="h1"|"h2"|"h3" align="left"|"center"|"right">
<Subhead weight="High" | "Medium" span={N}>
<Kicker>STANDARD SMALL CAPS RED</Kicker>
<BodyText weight="High"|"Medium"|"Low" columns={1|2|3|4} columnWidth="18em" columnFill="auto"|"balance" dropCap span={N}>
  <p>段间无空行，第二段起首行缩进 1em</p>
</BodyText>
<Quote variant="block" | "inline" weight="High" | "Medium">
<Byline>BY ALICE SMITH</Byline>
<Dateline>LONDON —</Dateline>
<Caption credit="Photograph by ...">说明文字</Caption>
```

### 媒体组件

```typescript
<Image src alt span>
<Figure src alt caption credit span>
<Video src poster controls caption credit span>
<PullQuote weight="High" | "Medium" span spanAllColumns author align="left"|"center">
```

### Theme tokens

```css
/* CSS variables 已定义在 theme/src/variables.css */
--font-family-masthead, --font-family-blackletter, --font-family-display,
--font-family-headline, --font-family-body, --font-family-meta
--font-family-cjk-serif, --font-family-cjk-jp  /* 新增：中日字体 */

--nui-bg-page #F7F4ED, --nui-bg-surface #FBF9F4
--nui-text-primary #1A1A1A, --nui-text-body #22201C, --nui-text-secondary, --nui-text-muted, --nui-text-quote
--nui-rule-hairline #C9C2B2, --nui-rule-decorative #1A1A1A
--nui-accent-primary #7A1F1F (NYT 朱红), --nui-accent-ink-blue #1B2A4A, --nui-highlight #F2E9C8
--nui-accent-cjk-red #CC2929  /* 新增：中文报纸朱红 */

/* 排版工具类（typography.css） */
.nui-drop-cap, .nui-small-caps, .nui-paragraph-flow, .nui-osf, .nui-tnum,
.nui-hanging-punctuation, .nui-column-rule, .nui-avoid-break, .nui-span-all-columns,
.nui-masthead-rule-top, .nui-masthead-rule-bottom, .nui-rule-hairline
```

---

## 待实现：#15 Blocks 页面 6 个 demo

### 目标

参考 https://ui.shadcn.com/blocks，新建 `/blocks` 路由展示 6 个完整报纸 demo：

1. **中文头版**（`/blocks/zh-frontpage`）
2. **中文副刊专题**（`/blocks/zh-feature`）
3. **英文长篇专题**（`/blocks/en-feature`）（NYT 头版已存在于 `/examples/nyt-frontpage`，本 Block 是不同类型）
4. **日语横排头版**（`/blocks/jp-horizontal`）
5. **日语竖排头版**（`/blocks/jp-vertical`）
6. （第 6 个根据需要自行决定，可以是中文政论或日语副刊）

### 用户已确认的设计决策

- **中文字体**：Noto Serif SC（思源宋体），已加入 `theme/src/fonts.css` 和 `--font-family-cjk-serif` token
- **中文配色**：克制用红——仅报头 + Kicker 用 `--nui-accent-cjk-red #CC2929`，正文仍是暖灰系
- **中文排版**：紧凑、板块多、信息密度高
- **日语排版**：横排 + 竖排两种都做。竖排用 `writing-mode: vertical-rl`
- **日语字体**：Noto Serif JP，已加入 token

### 用户反馈的核心痛点

> demo 应该要缜密，紧凑。当然如果有必要，也是可以有适当的留白。不过总体来说，传统时代，报纸区域是存土存金的。

**关键**：6 个 demo 都要充分利用空间，**不能有大片空白**，否则用户会再次不满意。

### Blocks 索引页

新建 `packages/docs/app/blocks/page.tsx`，参考 shadcn Blocks 页面结构：

```tsx
'use client';
import Link from 'next/link';
import { Layout, Section, Article, Headline, Subhead, Kicker } from '@newspaperui/components';

const blocks = [
  { href: '/blocks/zh-frontpage', lang: 'CHINESE · 中文', title: '人民周报 · 头版', preview: '/zh-frontpage-thumb.png' },
  { href: '/blocks/zh-feature',   lang: 'CHINESE · 中文', title: '副刊 · 文化专题' },
  { href: '/blocks/en-feature',   lang: 'ENGLISH',        title: 'The Daily Chronicle · Long-form Feature' },
  { href: '/blocks/jp-horizontal', lang: 'JAPANESE · 日本語', title: '朝日新聞 · 横組み' },
  { href: '/blocks/jp-vertical',   lang: 'JAPANESE · 日本語', title: '朝日新聞 · 縦組み（traditional）' },
  { href: '/blocks/zh-editorial',  lang: 'CHINESE · 中文', title: '社论 · 时事评论' },  // 第 6 个
];

export default function BlocksIndex() {
  // 类似 Landing Page 的卡片网格，每个卡片链接到对应 block
}
```

**注意**：每个 Block 是 **完整一页**（不要嵌套在 Sidebar 内），所以 `/blocks` 和 `/blocks/[slug]` 都应该放在 `app/blocks/` 而不是 `app/(docs)/blocks/`，类似 `/examples/nyt-frontpage` 的处理方式。

### Block 1：中文头版 `/blocks/zh-frontpage`

完整代码模板（要求紧凑、信息密度高）：

```tsx
import { Layout, Section, Article, Masthead, Rule, Headline, Subhead, Kicker, BodyText, Byline, Dateline, Figure, PullQuote } from '@newspaperui/components';

const cnStyle = { fontFamily: 'var(--font-family-cjk-serif)' };
const cnKickerStyle = { fontFamily: 'var(--font-family-cjk-serif)', color: 'var(--nui-accent-cjk-red)' };

export default function ZhFrontPage() {
  return (
    <Layout columns={24} maxWidth="1280px" padding="2rem 1.5rem" style={cnStyle}>
      {/* 中文报头：朱红粗黑标题 + 双线 */}
      <header style={{ textAlign: 'center', borderTop: '4px solid var(--nui-accent-cjk-red)', borderBottom: '1px solid var(--nui-rule-decorative)', paddingTop: '1rem', paddingBottom: '0.5rem' }}>
        <div style={{ fontFamily: 'var(--font-family-meta)', fontSize: '11px', color: 'var(--nui-text-muted)', letterSpacing: '0.2em', marginBottom: '0.25rem' }}>RENMIN ZHOUBAO · 人民周报</div>
        <h1 style={{ ...cnStyle, fontSize: '88px', fontWeight: 900, color: 'var(--nui-accent-cjk-red)', margin: '0', letterSpacing: '0.1em', lineHeight: 1 }}>人民周报</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--nui-text-secondary)', padding: '0.5rem 1rem', borderTop: '1px solid var(--nui-rule-hairline)', marginTop: '0.5rem', ...cnStyle }}>
          <span>第 2026 期 · 总第 5891 期</span>
          <span>2026年5月19日 星期二</span>
          <span>每份 5 元</span>
        </div>
      </header>

      {/* 头条区：跨 24 列大标题 + 副标 + 双栏正文 */}
      <Section columns={24} gap="1.5rem" style={{ marginTop: '1.5rem', paddingBottom: '1.5rem', borderBottom: '2px solid var(--nui-rule-decorative)' }}>
        <Article span={24}>
          <div style={{ ...cnKickerStyle, fontSize: '13px', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>【本报北京电】</div>
          <h2 style={{ ...cnStyle, fontSize: '56px', fontWeight: 900, lineHeight: 1.1, color: 'var(--nui-text-primary)', textAlign: 'center', margin: '0' }}>
            历史性贸易协定签署
          </h2>
          <h3 style={{ ...cnStyle, fontSize: '24px', fontWeight: 500, lineHeight: 1.4, color: 'var(--nui-text-secondary)', textAlign: 'center', margin: '0.5rem 0 1rem 0' }}>
            ——二十三国代表历经十一日谈判，达成关税、劳工、减排三大领域综合框架
          </h3>
          <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--nui-text-muted)', ...cnStyle, marginBottom: '1rem' }}>
            本报记者 王思源 李明 联合报道
          </div>
          <BodyText weight="Medium" columns={3} dropCap style={cnStyle}>
            <p>本报布鲁塞尔电 经过连续十一天的紧张磋商，二十三国代表于昨日深夜就一项涵盖关税、劳工标准与减排目标的综合框架协议达成最终一致。该协议尚需各成员国议会批准，但分析人士普遍认为，这是近一代人以来最具深远意义的国际经济协调成果。</p>
            <p>协议核心条款涵盖三个层面：一是统一关税表，二是设立共同劳工最低标准，三是约束各方至 2040 年前的减排路径。重工业领域将自 2028 年起执行阶梯碳费，所得款项将注入大陆投资基金，专项支持低碳制造业升级。</p>
            <p>消息公布后，市场反应温和乐观。大陆综合指数收涨 1.2%，欧元兑美元上涨 0.7%。债券收益率从协议谈判期间高位回落至会前水平。资本货物板块领涨，被视为最大受益者。</p>
            <p>国内政界反应不一。协议中关于带薪休假和集体谈判权的劳工条款获工会联盟支持，但商会担忧中小企业难以承担合规成本。工业联合会主席表示，需要过渡期支持以缓解冲击。</p>
            <p>三国议会领袖暗示，可能在夏季休会前完成批准程序。但另有两国政府表示，将先行举行公投，预计审议过程将延续至秋季。贸易研究中心估算，即便按最快时间表，全面落实仍需至少十八个月。</p>
            <p>对普通旅客和消费者而言，短期内变化有限。边境流程和产品标准在批准前仍按现行规定执行。但更深远的意义在于：历史上彼此分裂的邻国，正首次就最关键十年的共同规则达成一致。</p>
          </BodyText>
        </Article>
      </Section>

      {/* 二条区：3 栏并列（要闻 / 经济 / 文化） */}
      <Section columns={24} gap="1.5rem" style={{ marginTop: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--nui-rule-decorative)' }}>
        <Article span={8} style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '1rem' }}>
          <div style={{ ...cnKickerStyle, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem' }}>要闻</div>
          <h3 style={{ ...cnStyle, fontSize: '22px', fontWeight: 700, lineHeight: 1.3, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>气候立法获参议院全票通过</h3>
          <BodyText weight="Low" style={cnStyle}>
            <p>历经数月党争与多轮修正，参议院昨晚以全票通过气候资源法案。法案设立专项基金，加强对低碳产业的财政支持。</p>
            <p>支持者称，这是数十年来最重要的环境立法之一；反对者则担忧地方财政承压。法案将于下月一日起施行，覆盖工业、交通、建筑等重点领域。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '1rem 0' }} />
          <h4 style={{ ...cnStyle, fontSize: '17px', fontWeight: 600, lineHeight: 1.3, margin: '0 0 0.4rem 0' }}>城市轨道交通三线获批</h4>
          <BodyText weight="Low" style={cnStyle}>
            <p>市议会批准价值二十四亿的轨道交通扩展计划，将新增三条快线并延长既有线路服务时间。</p>
          </BodyText>
        </Article>

        <Article span={8} style={{ borderRight: '1px solid var(--nui-rule-hairline)', paddingRight: '1rem' }}>
          <div style={{ ...cnKickerStyle, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem' }}>经济</div>
          <h3 style={{ ...cnStyle, fontSize: '22px', fontWeight: 700, lineHeight: 1.3, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>制造业 PMI 创年内新高</h3>
          <BodyText weight="Low" style={cnStyle}>
            <p>统计局今日发布数据显示，五月制造业采购经理指数升至 52.4，连续第五个月位于扩张区间，新订单与生产指数双双走强。</p>
            <p>分析人士指出，外需回暖与库存周期共同支撑制造业复苏。但中小企业景气度仍弱于大型企业，结构性矛盾尚未根本缓解。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '1rem 0' }} />
          <h4 style={{ ...cnStyle, fontSize: '17px', fontWeight: 600, lineHeight: 1.3, margin: '0 0 0.4rem 0' }}>科技板块单日涨 3.7%</h4>
          <BodyText weight="Low" style={cnStyle}>
            <p>受人工智能商业化预期推动，科技股集体走强。半导体、云计算板块涨幅领先。</p>
          </BodyText>
        </Article>

        <Article span={8}>
          <div style={{ ...cnKickerStyle, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem' }}>文化 · 教育</div>
          <h3 style={{ ...cnStyle, fontSize: '22px', fontWeight: 700, lineHeight: 1.3, color: 'var(--nui-text-primary)', margin: '0 0 0.5rem 0' }}>故宫博物院新展开幕</h3>
          <BodyText weight="Low" style={cnStyle}>
            <p>「丝路千年——中亚出土文物特展」于今日在故宫博物院文华殿开幕，展出来自八国博物馆的二百二十件珍贵文物，覆盖公元前二世纪至公元十四世纪。</p>
            <p>策展人介绍，展览分为「商路」「信仰」「艺术」「日常」四个单元，多件文物为首次出境展出。展期至九月三十日结束。</p>
          </BodyText>
          <Rule variant="hairline" style={{ margin: '1rem 0' }} />
          <h4 style={{ ...cnStyle, fontSize: '17px', fontWeight: 600, lineHeight: 1.3, margin: '0 0 0.4rem 0' }}>大学申请人数创新高</h4>
          <BodyText weight="Low" style={cnStyle}>
            <p>全国统招报名人数较去年增长 18%，创历史新高。教育部表示将相应扩大录取规模。</p>
          </BodyText>
        </Article>
      </Section>

      {/* 三条区：4 栏短讯 + 1 列要点提示 */}
      <Section columns={24} gap="1rem" style={{ marginTop: '1.5rem' }}>
        <Article span={6} style={{ background: 'var(--nui-bg-surface)', padding: '1rem', borderLeft: '3px solid var(--nui-accent-cjk-red)' }}>
          <div style={{ ...cnKickerStyle, fontSize: '11px', fontWeight: 700, marginBottom: '0.5rem' }}>本期要点</div>
          <ul style={{ ...cnStyle, fontSize: '14px', lineHeight: 1.6, paddingLeft: '1.2em', margin: 0, color: 'var(--nui-text-body)' }}>
            <li>贸易协定核心要点解读 · 见 A2</li>
            <li>气候法案全文 · 见 A4</li>
            <li>制造业数据深度分析 · 见 B1</li>
            <li>故宫新展专题 · 见 C3</li>
            <li>文化评论：丝路新解读 · 见 C5</li>
            <li>读者来信精选 · 见 D2</li>
          </ul>
        </Article>

        <Article span={18}>
          <div style={{ ...cnKickerStyle, fontSize: '12px', fontWeight: 700, marginBottom: '0.5rem' }}>简讯 · 国际国内</div>
          <BodyText weight="Low" columns={3} style={cnStyle}>
            <p><strong>北京</strong> 交通部发布新一轮高速公路建设规划，未来五年新增里程 8000 公里，重点覆盖中西部欠发达地区。</p>
            <p><strong>上海</strong> 自贸区扩区方案获批，新增的金融服务业开放清单将于下月发布，涵盖跨境支付、保险、证券等领域。</p>
            <p><strong>深圳</strong> 创业板新规修订草案征求意见，重点完善退市机制与投资者保护制度。</p>
            <p><strong>东京</strong> 日本央行维持利率不变，但下调全年通胀预期，市场对宽松政策延续抱有预期。</p>
            <p><strong>布鲁塞尔</strong> 欧盟峰会就援助方案达成一致，规模较此前预案扩大三成。</p>
            <p><strong>华盛顿</strong> 联邦储备委员会会议纪要显示，多数官员支持在年内启动降息周期，但具体时点仍存分歧。</p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}
```

### Block 2-6 实施要点

#### Block 2：中文副刊专题 `/blocks/zh-feature`

- 风格：人物访谈 / 文化评论
- 结构：大幅人物图片（左侧 12 列）+ 长篇访谈正文（右侧 12 列双栏）
- 报头较小，强调内容深度
- 多用 Quote 组件呈现采访对话
- 字体仍是 Noto Serif SC，配色克制（仅小标签用朱红）

#### Block 3：英文长篇专题 `/blocks/en-feature`

- The Atlantic / The New Yorker 风格的 long-form
- 单栏阅读模式（窄栏宽 ≤ 700px）
- 大幅 hero image，下方居中标题 + drop cap
- 多个 PullQuote 穿插在正文中
- 用 Source Serif 4 + 经典严肃风配色

#### Block 4：日语横排头版 `/blocks/jp-horizontal`

- 朝日新闻 Web 版风格
- 横排，使用 Noto Serif JP
- 24 列栅格保持
- Masthead 用 Noto Serif JP 大字
- 关键：日语 Headline 没有英文 small caps，Kicker 改用普通粗体或方括号【速報】
- 段落首行不缩进（日语传统）

```tsx
const jpStyle = { fontFamily: 'var(--font-family-cjk-jp)' };
const jpKicker = { fontFamily: 'var(--font-family-cjk-jp)', color: 'var(--nui-accent-cjk-red)', fontSize: '13px', fontWeight: 700 };

// 日语 BodyText 不要用 dropCap（日文不适合）
// 不要用 nui-paragraph-flow 的 text-indent: 1em（日语传统首行不缩进）
// 改用普通 div 包 p
```

#### Block 5：日语竖排头版 `/blocks/jp-vertical`

- 关键：`writing-mode: vertical-rl;`
- Layout 容器需要 `height` 而不只是 `width`
- 不使用 BodyText 的 columns prop（CSS columns 与 vertical writing-mode 不兼容），改用多个独立 BodyText 块横向排列模拟栏
- 文字方向、border 方向都翻转
- 这是最难的一个，建议简化结构：报头 + 1 个头条 + 3-4 个并列竖排栏

```tsx
<div style={{
  writingMode: 'vertical-rl',
  height: '90vh',
  fontFamily: 'var(--font-family-cjk-jp)',
  display: 'flex',
  flexDirection: 'row-reverse',
  gap: '1.5rem',
  padding: '2rem',
}}>
  {/* 每个区块都是竖排 */}
</div>
```

#### Block 6：第 6 个 demo

建议做 **中文社论 / 时事评论**（`/blocks/zh-editorial`）：
- 双栏对开（左侧主社论 + 右侧专家评论）
- 引用密集，多用 Quote variant="block"
- 末尾署名

或换成 **韩文 / 阿拉伯文报纸** 都可以（用户没指定，自由发挥但要保证质量）。

### 实施建议

1. **拆 3 个 agent，每个做 2 个 demo**（每个 prompt 控制在 8000 token 以内）
   - Agent A：Block 1 中文头版 + Block 2 中文副刊
   - Agent B：Block 3 英文专题 + Block 6 中文社论
   - Agent C：Block 4 日语横排 + Block 5 日语竖排
2. **每个 demo 完成后跑 `pnpm --filter @newspaperui/docs build`** 验证
3. **建立 `/blocks` 索引页**：参考 Landing Page 的卡片网格结构
4. **关键约束**：每个 demo 必须填满，不能有大片空白。栏数多、信息密度高、紧凑

### 路由结构最终目标

```
app/
  page.tsx                              # Landing Page (报纸风格)
  layout.tsx                            # 根 layout (含 Header)
  globals.css
  blocks/                               # NEW
    page.tsx                            # Blocks 索引
    zh-frontpage/page.tsx               # NEW
    zh-feature/page.tsx                 # NEW
    en-feature/page.tsx                 # NEW
    jp-horizontal/page.tsx              # NEW
    jp-vertical/page.tsx                # NEW
    zh-editorial/page.tsx               # NEW
  examples/
    nyt-frontpage/page.tsx              # 已有：NYT 头版（迁移自原首页）
    blackletter-frontpage/page.tsx      # 已有：FAZ 头版
  (docs)/
    layout.tsx                          # 已有：Sidebar + Header 余高
    grid-system/page.tsx
    text/page.tsx
    theme/page.tsx
    components/{article,masthead,media,rule}/page.tsx
    examples/{spanning,responsive}/page.tsx
```

---

## 待实现：#13 Stage 6 — JSDoc + README

### JSDoc 补全（18 个组件）

为 `packages/components/src/{layout,text,media}/*.tsx` 的每个组件补 JSDoc：

```typescript
/**
 * BodyText — 报纸正文组件
 *
 * 核心特性：
 * - 多栏文字流：`columns={2|3|4}` 启用 CSS multi-column
 * - 首字下沉：`dropCap` 触发 ::first-letter 4.2em float
 * - 段落规则：默认开启段间无空行 + 首行缩进 1em + old-style figures + 悬挂引号
 *
 * @example
 * <BodyText weight="High" columns={3} dropCap>
 *   <p>第一段...</p>
 *   <p>第二段（首行自动缩进 1em）...</p>
 * </BodyText>
 */
export const BodyText: React.FC<BodyTextProps> = ...
```

每个组件至少包含：
- 一句话描述
- 核心 prop 说明
- 一个使用示例

### README 更新

更新根目录 `README.md`：

```markdown
# NewspaperUI

> Production-grade newspaper layout component library for the modern web.

参考 InDesign 与经典严肃风排版传统（NYT / The Times / FAZ），基于 24 列栅格、CSS Grid + Multi-column 双层机制。

## Quick Start

```bash
pnpm add @newspaperui/components @newspaperui/theme
```

```tsx
import '@newspaperui/theme';
import { Layout, Section, Article, Masthead, BodyText } from '@newspaperui/components';

<Layout columns={24}>
  <Masthead variant="classic" title="The Daily Chronicle" date="..." />
  <Section columns={24}>
    <Article span={14}>
      <BodyText columns={3} dropCap>...</BodyText>
    </Article>
  </Section>
</Layout>
```

## Packages

- `@newspaperui/theme` — CSS variables, visual weights, typography utilities
- `@newspaperui/utils` — Grid validation utilities
- `@newspaperui/components` — 18 React components
- `@newspaperui/docs` — Next.js documentation site

## Components (18)

### Layout
- Layout, Section, Article, Layer, Masthead, Rule

### Text
- Headline, Subhead, Kicker, BodyText, Quote, Byline, Dateline, Caption

### Media
- Image, Figure, Video, PullQuote

## Visual Design

- Typography: Cormorant Garamond (masthead), Source Serif 4 (display/body), Inter (meta), UnifrakturMaguntia (blackletter), Noto Serif SC/JP (CJK)
- Colors: warm off-white #F7F4ED background, #1A1A1A primary text, #7A1F1F NYT-style accent
- Layout: CSS Grid + Multi-column hybrid

## Development

```bash
pnpm install
pnpm build           # build all packages
pnpm test            # 29 tests
pnpm --filter @newspaperui/docs dev  # http://localhost:3000
```

See `design.md` for full design specification.
See `SKILL.md` for the agent-driven workflow methodology used to build this project.
```

---

## 已知问题与陷阱

1. **'use client' 指令**：所有用了 `createContext` / `useState` 的组件必须有 `'use client'`，且页面 import 它们时如果整个页面调用了 React 客户端 API，页面也要加 `'use client'`。已知页面：所有有 `<Link>` 或 client-side state 的页面已加。

2. **Vite dts 偶尔不生成**：如果 components 包构建后 `dist/index.d.ts` 缺失，重跑 `pnpm --filter @newspaperui/components build` 就好。

3. **TypeScript strict mode**：`noUnusedLocals` 严格，未使用的 import 会报错。新建 page 时记得清理。

4. **CSS columns 与 vertical-rl 不兼容**：日语竖排 demo 不能用 BodyText 的 columns prop。

5. **Sidebar 路径**：`(docs)/layout.tsx` import Sidebar 用 `'../../components/Sidebar'`（路由组括号不算路径层级）。

6. **Theme 包导出**：`packages/theme/package.json` 的 `exports` 字段需要 `./dist/style.css`（已加），否则 docs 包 import 会报 ERR_PACKAGE_PATH_NOT_EXPORTED。

7. **Next 15 的 metadata 会让 client component 失败**：root layout 中 `export const metadata` 必须在 server component 文件中。client component 用 `'use client'` 后不能 export metadata。

---

## 验收清单（让接手 AI 验证完成度）

执行以下命令，全部通过即视为完成：

```bash
cd /Users/joi-com/Desktop/space/newspaperui

# 1. 全量构建
pnpm build
# 期望：4 packages 全部 successful

# 2. 测试
pnpm --filter @newspaperui/utils test       # 11 tests pass
pnpm --filter @newspaperui/components test  # 18 tests pass

# 3. 启动 dev server
pnpm --filter @newspaperui/docs dev

# 浏览器访问验证：
# http://localhost:3000                                    Landing Page
# http://localhost:3000/blocks                             Blocks 索引
# http://localhost:3000/blocks/zh-frontpage                中文头版
# http://localhost:3000/blocks/zh-feature                  中文副刊
# http://localhost:3000/blocks/en-feature                  英文专题
# http://localhost:3000/blocks/jp-horizontal               日语横排
# http://localhost:3000/blocks/jp-vertical                 日语竖排（writing-mode: vertical-rl）
# http://localhost:3000/blocks/zh-editorial                第 6 个 demo
# http://localhost:3000/examples/nyt-frontpage             NYT 头版
# http://localhost:3000/examples/blackletter-frontpage     FAZ 头版
# http://localhost:3000/grid-system, /text, /theme         文档章节

# 4. 视觉检查
# - 6 个 Blocks demo 不能有大片空白
# - 中文用 Noto Serif SC，仅报头 + Kicker 用朱红
# - 日语竖排 writing-mode: vertical-rl 真实生效
# - Header 在所有页面 sticky 顶部
# - Sidebar 仅在 (docs) 路由组下显示
```

---

## 文件位置速查

```
/Users/joi-com/Desktop/space/newspaperui/
├── HANDOFF.md                                    本文档
├── SKILL.md                                      工作流方法论
├── design.md                                     设计规范（修订版）
├── packages/
│   ├── theme/src/
│   │   ├── fonts.css                            含 Noto Serif SC/JP 字体引入
│   │   ├── variables.css                        --font-family-cjk-serif/-jp、--nui-accent-cjk-red 已加
│   │   ├── visual-weights.ts                    18 档视觉权重映射
│   │   ├── typography.css                       排版工具类
│   │   └── tailwind.config.js
│   ├── utils/src/
│   │   ├── grid.ts                              validateSpan / clampSpan
│   │   ├── cx.ts                                类名合并
│   │   └── index.ts
│   ├── components/src/
│   │   ├── layout/                              Layout/Section/Article/Layer/Masthead/Rule
│   │   ├── text/                                Headline/Subhead/Kicker/BodyText/Quote/Byline/Dateline/Caption
│   │   ├── media/                               Image/Figure/Video/PullQuote
│   │   └── index.ts
│   └── docs/
│       ├── app/
│       │   ├── page.tsx                         Landing Page
│       │   ├── layout.tsx                       含 <Header />
│       │   ├── globals.css
│       │   ├── (docs)/                          Sidebar 包裹的章节
│       │   │   ├── layout.tsx
│       │   │   ├── grid-system/page.tsx
│       │   │   ├── text/page.tsx
│       │   │   ├── theme/page.tsx
│       │   │   ├── components/{article,masthead,media,rule}/page.tsx
│       │   │   └── examples/{spanning,responsive}/page.tsx
│       │   └── examples/                        全宽页面（不在 Sidebar 内）
│       │       ├── nyt-frontpage/page.tsx       NYT 头版（已迁移）
│       │       └── blackletter-frontpage/page.tsx  FAZ 头版
│       └── components/
│           ├── Header.tsx                       全局 sticky 顶部导航
│           ├── Sidebar.tsx                      sticky top: 65px
│           ├── Demo.tsx, CodeBlock.tsx, PropsTable.tsx, ThemeToggle.tsx
```

---

## 接手 AI 的工作步骤建议

1. **读这个文档全文** + `design.md` + `SKILL.md`
2. **跑 `pnpm build` + `pnpm dev`** 确认现状
3. **访问 Landing Page http://localhost:3000** 看到当前布局
4. **从 #15 Block 1 中文头版开始**，按上面的代码模板落地
5. **每完成 1 个 demo 跑一次 build** 确认无 error
6. **用浏览器肉眼或 Playwright 截图验收**：是否紧凑、无空白
7. **6 个 Blocks 完成后做 #13**：JSDoc + README
8. **最后跑一次 Design Agent 复评**（参考 SKILL.md 里的方法）

预计剩余工作量：
- #15 Blocks（6 个 demo + 索引页）：4-6 小时（拆 3 个 agent 并行可压缩到 1.5 小时）
- #13 JSDoc + README：1 小时
- 总计：约 2-3 小时（用 agent 并行）
