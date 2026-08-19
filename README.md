# NewspaperUI

> Editorial React components for production newspaper layouts.

NewspaperUI combines a 24-column CSS Grid system, multi-column text flow, multilingual typography, and publishing details such as folios, factboxes, captions, and pull quotes. The visual system uses warm paper tones, deliberate rules, and semantic theme tokens rather than a fixed page template.

[Live documentation](https://joisun.github.io/newspaperui/) · [Browse blocks](https://joisun.github.io/newspaperui/blocks/) · [Create a theme](https://joisun.github.io/newspaperui/create/)

## Install

```bash
pnpm add newspaperui
```

### Agent skill

Install the bundled NewspaperUI skill to give coding agents the library's
component usage and editorial layout guidance:

```bash
npx skills add joisun/newspaperui
```

```tsx
import 'newspaperui/style.css';
import { Article, BodyText, Headline, Layout, Section } from 'newspaperui';

export function FrontPage() {
  return (
    <Layout columns={24}>
      <Section columns={24}>
        <Article span={16}>
          <Headline as="h1" weight="High">The morning edition</Headline>
          <BodyText columns={2} dropCap>
            <p>Compose the story with a real editorial reading flow.</p>
          </BodyText>
        </Article>
      </Section>
    </Layout>
  );
}
```

React 18 and ReactDOM 18 are peer dependencies. Theme CSS and runtime utilities are bundled into the single public package.

## What is included

- 28 exported React components across layout, text, and media.
- A 24-column grid with validated spans and responsive composition.
- CSS Multi-column body text, drop caps, small caps, old-style figures, and hairline rules.
- Typography tokens for English, Chinese, Japanese, and German editorial styles.
- Light and dark semantic theme variables plus a browser-based theme creator.
- Six complete blocks for studying multilingual front pages and long-form editions.

### Component families

- **Layout:** `Layout`, `Section`, `Article`, `Layer`, `Masthead`, `Rule`, `Footer`, `NewsSidebar`, `BreakingNewsBanner`, `RelatedArticles`, `Folio`, `IndexBox`, `Factbox`.
- **Text:** `Headline`, `Subhead`, `Kicker`, `BodyText`, `Quote`, `Byline`, `Dateline`, `Caption`, `AuthorCard`, `JumpLine`.
- **Media:** `Image`, `Figure`, `Video`, `PullQuote`.

## Workspace

```text
packages/
├── components/  # Public newspaperui package
├── theme/       # Private design tokens and typography source
├── utils/       # Private grid and class-name utilities
└── docs/        # Next.js + Fumadocs website
```

Only `newspaperui` is published. Theme and utility workspaces are internal build modules.

## Development

```bash
pnpm install
pnpm dev
pnpm lint
pnpm test
pnpm exec turbo run build --force
pnpm package:smoke
```

`pnpm dev` first builds the internal theme, utility, and component packages, then starts their watch processes and the documentation site at `http://localhost:3000`.

`pnpm package:smoke` packs the public package, checks its JS/CJS/types/CSS contract, installs it into an isolated consumer, and verifies both import systems.

## Documentation routes

| Route | Purpose |
| --- | --- |
| `/` | Minimal product overview with a Swiper Coverflow gallery of seven complete newspaper editions |
| `/docs/grid-system` | Grid concepts and API |
| `/docs/components/article` | Article and layer primitives |
| `/create` | Theme editor and responsive preview |
| `/blocks` | Six complete editorial layouts |

## Releases

Changesets manages versions and the GitHub release workflow publishes with npm provenance. See [docs/releasing.md](docs/releasing.md) for dry-run checks, required secrets, and the release sequence.

## License

MIT
