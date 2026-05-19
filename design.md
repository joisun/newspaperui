
# AI Agent Prompt: 生产级报纸组件库开发

## 任务目标
开发一个浏览器端生产级报纸布局组件库，参考 InDesign，组件少而精、职责明确、无冗余、无歧义，支持全局 24 列栅格、跨栏、视觉权重和主题系统，提供文档网站（内嵌 demo，无需 storybook）。

---

## 1. 项目 setup 与架构

- **Monorepo 管理**（pnpm workspace / Turborepo）
  - Packages:
    1. `components` → Layout / Section / Article / Layer / Text / Media
    2. `theme` → 全局主题变量、字体、颜色、间距、视觉权重映射
    3. `docs` → 文档网站（shadcn stack + demo）
    4. `utils` → 栅格计算、跨栏逻辑、响应式辅助函数

- **目录结构示例**:
```

/packages
/components
/Layout
/Section
/Article
/Layer
/Text
/Media
/theme
/docs
/utils

```

- **技术栈**:
  - React 18+, TypeScript
  - TailwindCSS + shadcn 文档 stack
  - Vitest + React Testing Library
  - 构建工具：Vite + Rollup

---

## 2. 全局栅格系统

- `<Layout>` 顶层容器：
  - maxWidth, padding, gutter, theme
  - 栅格总列数 24
  - snap-to-grid 支持
- Section 内对象 span ≤ Section.columns
- 响应式调整：小屏 12–16 列

---

## 3. 核心布局组件

1. `<Section>`：
   - columns, breakable, padding/margin, priority
   - 内部对象 span ≤ Section.columns

2. `<Article>`：
   - span, priority/weight, breakable
   - 内含 Headline / Subhead / BodyText / Image / PullQuote

3. `<Layer>`：
   - position, top/left/right/bottom, zIndex
   - 用于浮动广告、拉引、浮动图片

---

## 4. 内容组件

- 文本类：Headline / Subhead / BodyText / Quote / Byline / Caption
- 媒体类：Image / Figure / Video / PullQuote
- 属性：span（跨栏）、weight（High/Medium/Low）、margin/padding
- 所有 span 基于 Section.columns

---

## 5. 视觉权重映射表（24 列）

| 组件 | 权重 | font-size | font-weight | line-height | color | span | margin/padding |
|---|---|---|---|---|---|---|---|
| Headline | High | 36–48px | 700 | 1.1 | #111 | 6–8 | 0 0 1rem 0 |
| Headline | Medium | 28–34px | 600 | 1.2 | #111 | 4–6 | 0 0 0.75rem 0 |
| Headline | Low | 22–26px | 500 | 1.3 | #222 | 2–4 | 0 0 0.5rem 0 |
| Subhead | High | 20–24px | 600 | 1.25 | #222 | 2–3 | 0 0 0.5rem 0 |
| Subhead | Medium | 16–18px | 500 | 1.3 | #333 | 1–2 | 0 0 0.25rem 0 |
| BodyText | High | 16px | 400 | 1.5 | #333 | 1 | 0 0 1rem 0 |
| BodyText | Medium | 14–15px | 400 | 1.5 | #444 | 1 | 0 0 0.75rem 0 |
| BodyText | Low | 12–14px | 400 | 1.4 | #555 | 1 | 0 0 0.5rem 0 |
| Quote | High | 20–24px | 500 | 1.4 | #222 | 2 | 0 0 0.75rem 0 |
| Quote | Medium | 16–18px | 400 | 1.4 | #333 | 1 | 0 0 0.5rem 0 |
| Image Caption | Standard | 12–14px | 400 | 1.3 | #555 | 1 | 0.25rem 0 |
| PullQuote | High | 24–28px | 600 | 1.2 | #111 | 2–3 | 0 0 0.5rem 0 |
| PullQuote | Medium | 18–20px | 500 | 1.25 | #222 | 1–2 | 0 0 0.25rem 0 |
| Byline | Standard | 12–14px | 400 | 1.3 | #555 | 1 | 0 0 0.25rem 0 |

---

## 6. 主题系统

- 全局新闻字体预设
- 颜色变量（黑/灰/强调色）
- 间距变量（gutter, margin, padding）
- 权重映射 Token
- Tailwind + CSS Variables 支持主题切换

---

## 7. 布局规则

- Section 内对象 span ≤ Section.columns
- 高权重对象可跨多栏
- Layer 可浮动/绝对定位
- breakable 控制分页断开
- 响应式：小屏 12–16 列

---

## 8. 文档网站

- 技术栈：shadcn stack + Next.js + Tailwind + MDX
- Demo 内嵌组件，展示属性、span、视觉权重、跨栏效果
- 文档章节：
  1. 概览与目标
  2. 栅格系统与 Layout/Section 说明
  3. 核心组件（Article/Image/Layer）属性说明
  4. 文本组件属性与权重映射
  5. 主题与变量使用指南
  6. 跨栏和浮动 Layer 示例
  7. 响应式布局展示

---

## 9. 实施顺序

1. 初始化 monorepo + Layout / Section 基础组件
2. 配置主题系统、视觉权重映射 CSS / Tailwind Token
3. 开发 Article / Image / Layer / PullQuote / 文本组件
4. 实现 Section 网格跨栏逻辑
5. 测试生产级报纸布局：跨栏、浮动 Layer、breakable、响应式
6. 构建文档网站，内嵌 demo 展示组件属性与效果
7. 确认生产级排版效果符合视觉权重、跨栏、主题、响应式要求
