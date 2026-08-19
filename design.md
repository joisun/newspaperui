
# AI Agent Prompt: 生产级报纸组件库开发

## 任务目标
开发一个浏览器端生产级报纸布局组件库，参考 InDesign 与经典严肃风（NYT / The Times）排版传统，组件少而精、职责明确、无冗余、无歧义，支持全局 24 列栅格、跨栏、视觉权重和主题系统，提供文档网站（内嵌 demo，无需 storybook）。

视觉基调：经典严肃风（衬线为主、暖灰系、warm off-white 背景、双线分隔、首字下沉、栏间细线、真实多栏文字流）。

---

## 1. 项目 setup 与架构

- **Monorepo 管理**（pnpm workspace + Turborepo）
  - Packages:
    1. `components` → Layout / Section / Article / Layer / Masthead / Rule / Headline / Subhead / Kicker / BodyText / Quote / Byline / Dateline / Caption / Image / Figure / Video / PullQuote
    2. `theme` → 字体导入、CSS variables、视觉权重映射、Tailwind tokens、排版工具类
    3. `docs` → 文档网站（Next.js + Tailwind + MDX）
    4. `utils` → 栅格校验（`validateSpan` / `clampSpan`）、`cx` 类名合并

- **目录结构**:
```
/packages
  /components
    /src
      /layout    (Layout / Section / Article / Layer / Masthead / Rule)
      /text      (Headline / Subhead / Kicker / BodyText / Quote / Byline / Dateline / Caption)
      /media     (Image / Figure / Video / PullQuote)
  /theme
    /src
      fonts.css        (Google Fonts: Cormorant Garamond / Source Serif 4 / Inter / UnifrakturMaguntia)
      variables.css    (CSS variables: 字体 / 暖灰系颜色 / 间距 / 分隔线 / 强调色)
      typography.css   (drop-cap / small-caps / paragraph-flow / OSF / column-rule 等工具类)
      visual-weights.ts
      tailwind.config.js
  /docs
  /utils
```

- **技术栈**:
  - React 18+, TypeScript 5+
  - TailwindCSS 3+ + 文档站基础 stack
  - Vitest + React Testing Library
  - 构建：Vite + Rollup（components/theme/utils）；Next.js 14+（docs）

---

## 2. 全局栅格系统

- `<Layout>` 顶层容器：
  - `columns`（默认 24）、`maxWidth`、`padding`、`theme`（'light' | 'dark'）
  - 通过 React Context 把 columns 下传给 `<Section>`
- `<Section>` 内部使用 `display: grid; grid-template-columns: repeat(N, 1fr); gap: var(--nui-gutter)`
- Section 内对象通过 `grid-column: span N` 跨栏，统一布局机制
- 响应式：通过 CSS media query / container query 调整（不再使用 JS 路径）

---

## 3. 核心布局组件

1. `<Section>`：
   - `columns`（必填）、`gap`、`breakable`、`divider`（'none' | 'top' | 'bottom' | 'both'）
   - 内部对象 span ≤ Section.columns，超过自动 clamp 并 console.warn

2. `<Article>`：
   - `span`、`breakable`
   - 跨栏统一通过 `grid-column: span N`

3. `<Layer>`：
   - `position`（'absolute' | 'fixed' | 'sticky'）、`top/left/right/bottom`、`zIndex`

4. `<Masthead>` 报头组件：
   - `title`、`kicker`、`edition`、`date`、`price`
   - `variant`：'classic'（双线居中 + Cormorant Garamond）、'blackletter'（UnifrakturMaguntia 哥特体）、'modern'（左对齐 + accent 色）

5. `<Rule>` 分隔线组件：
   - `variant`：'hairline' | 'double' | 'thick'
   - `orientation`：'horizontal' | 'vertical'
   - `span`（横向时占多少列，默认 `1 / -1`）

---

## 4. 内容组件

- 文本类：`<Headline>` / `<Subhead>` / `<Kicker>` / `<BodyText>` / `<Quote>` / `<Byline>` / `<Dateline>` / `<Caption>`
- 媒体类：`<Image>` / `<Figure>` / `<Video>` / `<PullQuote>`
- 通用属性：`weight`、`span`（跨栏，由 Section 的 grid-column 提供）、`className`、`style`
- `<BodyText>` 核心扩展：
  - `columns?: 1 | 2 | 3 | 4` 启用 CSS multi-column 真实多栏文字流
  - `dropCap?: boolean` 首字下沉
  - 默认开启段间无空行 + 第二段起首行缩进 1em + old-style figures + hanging punctuation
- `<Quote>`：`variant: 'block' | 'inline'`，block 用左缩进 1.5em（不使用左 border）
- `<PullQuote>`：上下双 hairline + Display 字体；`spanAllColumns` 在多栏 BodyText 内自动跨所有栏
- `<Byline>` / `<Dateline>` / `<Kicker>`：使用真小帽（OpenType `font-variant-caps: small-caps`，非 `text-transform: uppercase`）

---

## 5. 视觉权重映射表（修订版）

经典严肃风修订要点：
- 字号上限放开（Headline High 48–72px，原 36–48px 太小压不住头版）
- font-weight 普遍下调（High 700 → 600，Medium 600 → 500），避免数码黑
- line-height 衬线上调（BodyText 1.55–1.6）
- 颜色使用暖灰系 token（`--nui-text-primary` `#1A1A1A` 而非 `#111`）
- 颜色 / 字体均通过 CSS variable token，不硬编码 hex
- 新增 4 档：Masthead / Kicker / Dateline / Caption credit

| 组件 | 权重 | font-family | font-size | font-weight | line-height | letter-spacing | font-variant | color | span | margin |
|---|---|---|---|---|---|---|---|---|---|---|
| Masthead | Standard | `--font-family-masthead` | 56–96px | 700 | 1.0 | 0.02em | lining-nums | `--nui-text-primary` | 24 | 0 |
| Headline | High | `--font-family-display` | 48–72px | 600 | 1.05 | -0.01em | lining-nums + balance | `--nui-text-primary` | 8–16 | `0 0 1rem 0` |
| Headline | Medium | `--font-family-headline` | 32–40px | 600 | 1.1 | -0.005em | lining-nums | `--nui-text-primary` | 6–10 | `0 0 0.75rem 0` |
| Headline | Low | `--font-family-headline` | 22–26px | 500 | 1.2 | 0 | lining-nums | `--nui-text-body` | 4–6 | `0 0 0.5rem 0` |
| Subhead | High | `--font-family-headline` italic | 18–22px | 500 | 1.3 | 0 | oldstyle-nums | `--nui-text-secondary` | 4–8 | `0 0 0.75rem 0` |
| Subhead | Medium | `--font-family-headline` italic | 16–18px | 400 | 1.35 | 0 | oldstyle-nums | `--nui-text-secondary` | 2–4 | `0 0 0.5rem 0` |
| Kicker | Standard | `--font-family-meta` small-caps | 12–13px | 600 | 1.2 | 0.08em | small-caps + lining | `--nui-accent-primary` | 1–4 | `0 0 0.25rem 0` |
| BodyText | High | `--font-family-body` | 16–17px | 400 | 1.6 | 0 | oldstyle-nums | `--nui-text-body` | 1 | `0 0 0.75rem 0` |
| BodyText | Medium | `--font-family-body` | 15px | 400 | 1.55 | 0 | oldstyle-nums | `--nui-text-body` | 1 | `0 0 0.5rem 0` |
| BodyText | Low | `--font-family-body` | 13–14px | 400 | 1.5 | 0 | oldstyle-nums | `--nui-text-secondary` | 1 | `0 0 0.5rem 0` |
| Quote (block) | High | `--font-family-body` | 17–19px | 400 | 1.55 | 0 | oldstyle-nums | `--nui-text-quote` | 2 | `1rem 0 1rem 1.5em` |
| Quote (inline) | — | `--font-family-body` italic | inherit | 400 | inherit | 0 | inherit | inherit | — | 0 |
| PullQuote | High | `--font-family-display` | 26–32px | 600 | 1.2 | -0.005em | lining-nums + balance | `--nui-text-primary` | 2–3 | `1.5rem 0` |
| PullQuote | Medium | `--font-family-display` | 20–24px | 500 | 1.25 | 0 | lining-nums | `--nui-text-body` | 1–2 | `1rem 0` |
| Caption | Standard | `--font-family-body` italic | 13px | 400 | 1.4 | 0 | oldstyle-nums | `--nui-text-secondary` | 1 | `0.5rem 0 0 0` |
| Caption credit | — | `--font-family-meta` small-caps | 11–12px | 500 | 1.4 | 0.06em | small-caps | `--nui-text-muted` | 1 | inline |
| Byline | Standard | `--font-family-meta` small-caps | 12–13px | 500 | 1.3 | 0.06em | small-caps + lining | `--nui-text-secondary` | 1 | `0 0 0.25rem 0` |
| Dateline | Standard | `--font-family-meta` small-caps | 12–13px | 600 | 1.3 | 0.08em | small-caps + lining | `--nui-text-primary` | 1 | inline |

---

## 6. 主题系统

### 6.1 字体（Google Fonts，免费可商用）
- `--font-family-masthead`：Cormorant Garamond（报头主字）
- `--font-family-blackletter`：UnifrakturMaguntia（哥特报头 preset）
- `--font-family-display` / `--font-family-headline` / `--font-family-body`：Source Serif 4（Optical Size 可变字体，覆盖头条到正文）
- `--font-family-meta`：Inter（Byline / Dateline / Kicker / Caption credit 用真小帽）

### 6.2 颜色（暖灰系，避开纯黑/纯白）

Light（默认）：
- 页面背景：`--nui-bg-page #F7F4ED`、`--nui-bg-surface #FBF9F4`
- 文字：`--nui-text-primary #1A1A1A`、`--nui-text-body #22201C`、`--nui-text-secondary #4A4742`、`--nui-text-muted #6E6A63`、`--nui-text-quote #2E2A24`
- 分隔线：`--nui-rule-hairline #C9C2B2`、`--nui-rule-decorative #1A1A1A`
- 强调色：`--nui-accent-primary #7A1F1F`（NYT 朱红）、`--nui-accent-ink-blue #1B2A4A`（The Times 蓝）、`--nui-highlight #F2E9C8`（旧报纸黄）

Dark（暖深棕黑，非冷黑）：
- 反向映射保持暖意，accent 色提亮 + 降饱和

### 6.3 间距 / 排版工具类
- 间距 token：`--nui-gutter`、`--nui-space-{1,2,3,4,6,8}`
- 排版工具类（typography.css）：
  - `.nui-drop-cap` 首字下沉（`::first-letter` + `float: left`）
  - `.nui-small-caps` 真小帽（OpenType `smcp/c2sc`）
  - `.nui-paragraph-flow` 段间无空行 + `p + p` 首行缩进 1em
  - `.nui-osf` old-style figures、`.nui-tnum` tabular figures
  - `.nui-hanging-punctuation` 悬挂引号
  - `.nui-column-rule` 栏间 hairline
  - `.nui-avoid-break` `break-inside: avoid`
  - `.nui-span-all-columns` `column-span: all`（多栏内跨栏）
  - `.nui-masthead-rule-top` / `.nui-masthead-rule-bottom` 报头双线

### 6.4 主题切换
通过 `[data-theme="dark"]` 覆盖 CSS variables，组件代码无需感知主题；提供手动切换按钮。

---

## 7. 布局规则

- Section 内对象 span ≤ Section.columns，超过自动 clamp + console.warn（不抛异常崩溃）
- 高权重对象可跨多栏（Headline High 跨 8–16 列）
- Layer 浮动/绝对定位，脱离栅格流
- `breakable` 控制打印分页断开（`break-inside: auto | avoid`）
- BodyText 多栏：`columns: 1 | 2 | 3 | 4` 启用 CSS multi-column；通过 `column-rule: 1px solid var(--nui-rule-hairline)` 渲染栏间细线；标题与 PullQuote 自动 `break-inside: avoid` 避免被切断
- 响应式：通过 CSS media query / container query 在小屏调整列数与栏宽（不使用 JS 路径）

---

## 8. 文档网站

- 技术栈：Next.js + Tailwind + MDX
- 页面：所有 demo 用真实组件渲染，非 mockup
- 路由结构：
  1. `/` 首页 = 极简产品入口（一句话价值主张 + 安装指令 + 7 份完整报纸的循环 3D Demo 画廊）；Swiper `EffectCoverflow` 统一负责连续透视、鼠标/触控 snap、trackpad、键盘与相邻卡片点击，三组静态同内容 deck 在边界零时长归一化，避免 Swiper loop 搬移 DOM；slide 与报纸同宽，使用 Coverflow `stretch` 控制重叠，保持中心最高且层级向两侧单调递减
  2. `/examples/nyt-frontpage` NYT 派完整报纸头版（Masthead + Briefs + Lead Story 含 hero image + 3 栏 BodyText + drop cap + PullQuote + Secondary + Third Story 4 栏）
  3. `/docs/grid-system` 栅格系统与 Layout/Section/Article/Layer 说明
  4. `/docs/components/masthead` Masthead 三种 variant 对照
  5. `/docs/components/article` Article + Layer 跨栏与浮动 demo
  6. `/docs/components/rule` Rule 三种 variant 对照
  7. `/docs/components/media` Image / Figure / Video / PullQuote
  8. `/docs/text` 文本组件全集 + 视觉权重映射表（实时渲染）+ 多栏文字流 demo + drop cap demo
  9. `/docs/theme` CSS variables 列表 + color swatch + 暗色主题切换按钮
  10. `/docs/examples/spanning` 跨栏布局示例
  11. `/docs/examples/responsive` 响应式布局展示
  12. `/examples/blackletter-frontpage` The Times / FAZ 派哥特体头版 preset
- 全局导航：顶部 Header（Docs / Components / Blocks / Create / GitHub）；文档区域使用固定在 Header 下方的非折叠 Sidebar 目录列，目录内容独立滚动

---

## 9. 实施顺序

1. 初始化 monorepo（pnpm workspace + Turborepo）
2. 实现 theme（字体导入 + 暖灰系 CSS variables + 视觉权重表 + 排版工具类 + Tailwind tokens）
3. 实现 utils（`validateSpan` / `clampSpan` / `cx`）
4. 实现 components 三层（layout / text / media）；统一 grid-column span 跨栏机制；BodyText 接入 CSS multi-column
5. 测试生产级头版：跨栏、多栏文字流、首字下沉、栏间 hairline、真小帽、Pull Quote 跨栏、breakable、响应式
6. 构建文档网站，首页以 Swiper Coverflow 驱动的循环 3D 画廊展示完整多语言报纸，`/examples/nyt-frontpage` 作为 NYT 派生产级标杆，章节页用真实组件 demo
7. 验收：视觉与传统报纸排版（NYT / The Times / FAZ）一致；自动化构建/测试通过；Design Agent 复评 ≥ 9/10

---

## 10. 验收标准

打开 `/examples/nyt-frontpage` 应满足：
- Masthead 是 Cormorant Garamond 衬线 + 双线分隔
- 头条字号 ≥ 48px、line-height ≤ 1.15、字重 600
- 头条下方 BodyText 真分 3 栏，栏间有 1px 暖灰 hairline
- 第一段开头有真实 drop cap（占 2–3 行）
- Byline / Dateline / Kicker 是 Inter 真小帽（不是 uppercase 伪小帽）
- PullQuote 上下双 hairline、字号 26–32px
- 配色是 warm off-white + 暖深灰，不是 `#FFFFFF` + `#000000`
- 数字是 old-style figures（3 / 5 / 7 有下伸笔）
- 段间无空行，第二段起首行缩进 1em
- 切换 `[data-theme="dark"]` 后是暖深棕黑（不是冷黑）
