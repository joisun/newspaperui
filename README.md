# NewspaperUI

> Production-grade newspaper layout component library for the modern web.

参考 InDesign 与经典严肃风排版传统（NYT / The Times / FAZ），基于 24 列栅格、CSS Grid + Multi-column 双层机制。支持中文、英文、日语多语言报纸排版。

## Quick Start

```bash
pnpm add @newspaperui/components @newspaperui/theme
```

```tsx
import '@newspaperui/theme';
import { Layout, Section, Article, Masthead, BodyText } from '@newspaperui/components';

<Layout columns={24}>
  <Masthead variant="classic" title="The Daily Chronicle" date="May 19, 2026" />
  <Section columns={24}>
    <Article span={14}>
      <BodyText columns={3} dropCap>
        <p>Multi-column text flow with drop cap...</p>
      </BodyText>
    </Article>
  </Section>
</Layout>
```

## Packages

| Package | Description |
|---------|-------------|
| `@newspaperui/theme` | CSS variables, visual weights, typography utilities, Google Fonts |
| `@newspaperui/utils` | Grid validation (`validateSpan`, `clampSpan`, `cx`) |
| `@newspaperui/components` | 20 React components |
| `@newspaperui/docs` | Next.js documentation site with live demos |

## Components (20)

### Layout
`Layout` · `Section` · `Article` · `Layer` · `Masthead` · `Rule` · `RelatedArticles`

### Text
`Headline` · `Subhead` · `Kicker` · `BodyText` · `Quote` · `Byline` · `Dateline` · `Caption` · `AuthorCard`

### Media
`Image` · `Figure` · `Video` · `PullQuote`

## Key Features

- **24-column CSS Grid** — unified `grid-column: span N` mechanism
- **CSS Multi-column flow** — real newspaper text reflow with `column-rule` hairlines
- **Drop cap** — `::first-letter` float, 4.2em display serif
- **True small caps** — OpenType `font-variant-caps: small-caps` (not `text-transform`)
- **Old-style figures** — `font-variant-numeric: oldstyle-nums` for body text
- **Visual weight system** — data-driven typography from a single `visualWeights` mapping
- **Warm off-white palette** — `#F7F4ED` background, warm grays, no pure black/white
- **Dark mode** — `[data-theme="dark"]` with warm deep brown-black
- **Multi-language** — Chinese (Noto Serif SC), Japanese (Noto Serif JP), English (Source Serif 4), German (UnifrakturMaguntia)

## Typography

| Role | Font | Usage |
|------|------|-------|
| Masthead | Cormorant Garamond | Newspaper title |
| Blackletter | UnifrakturMaguntia | German-style masthead preset |
| Display / Headline / Body | Source Serif 4 | Main serif family (optical size) |
| Meta (Byline, Kicker, Caption) | Inter | Sans-serif small caps |
| Chinese | Noto Serif SC | 中文报纸 |
| Japanese | Noto Serif JP | 日本語新聞 |

## Live Demos

Run the documentation site:

```bash
pnpm install
pnpm --filter @newspaperui/docs dev
# → http://localhost:3000
```

### Available Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with demo showcase |
| `/blocks` | 6 production-grade newspaper blocks |
| `/blocks/zh-frontpage` | Chinese front page (人民周报) |
| `/blocks/zh-feature` | Chinese feature article (副刊) |
| `/blocks/en-feature` | English long-form (The Atlantic style) |
| `/blocks/jp-horizontal` | Japanese horizontal (朝日新聞) |
| `/blocks/jp-vertical` | Japanese vertical (`writing-mode: vertical-rl`) |
| `/blocks/zh-editorial` | Chinese editorial (社论) |
| `/examples/nyt-frontpage` | NYT-style English front page |
| `/examples/blackletter-frontpage` | German blackletter front page |
| `/grid-system` | Grid system documentation |
| `/text` | Text components + visual weight table |
| `/theme` | Theme system + dark mode toggle |
| `/components/*` | Component API docs |

## Development

```bash
pnpm install
pnpm build           # Build all 4 packages
pnpm test            # 51 tests (utils 11 + components 40)
pnpm --filter @newspaperui/docs dev  # Dev server
```

## Design Specification

See [`design.md`](./design.md) for the full design specification including visual weight mapping table, color system, and typography rules.

## License

MIT
