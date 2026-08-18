# NewspaperUI Documentation Live Demo Consistency Design

## Goal

Every component or API-oriented documentation page must let a reader see the rendered result before inspecting and copying the exact source. The documentation should teach by direct visual evidence, not by isolated API tables or code fences.

## First-principles contract

- A component cannot be understood from props alone; its visual output is part of its public behavior.
- A source example is useful only when the displayed result and the copied snippet describe the same composition.
- Consistency is a repository-level rule, so coverage must be enforced by tests rather than maintained by memory.
- Conceptual reference pages and links to dedicated full-page examples should use the content form that best serves them; they do not need a decorative Demo wrapper.

## Page classification and coverage

The following 16 routes are governed by the Live Demo contract:

| Route | Required demos | Coverage intent |
| --- | ---: | --- |
| `grid-system` | 3 | 8+16, 6+12+6, and full-width grids |
| `components/layout` | 2 | Core grid composition and positioned Layer |
| `components/article` | 2 | Article spans and Layer pullout |
| `components/masthead` | 3 | Existing Classic, Blackletter, Modern variants |
| `components/rule` | 2 | Horizontal variants and vertical divider |
| `components/media` | 5 | Image, Figure, Video, standalone PullQuote, multi-column PullQuote |
| `components/footer` | 3 | Footer, NewsSidebar, BreakingNewsBanner |
| `components/data` | 4 | Folio, IndexBox, Factbox, RelatedArticles |
| `text/index` | 8 | Existing text-system overview |
| `text/headline` | 1 | Three visual weights |
| `text/bodytext` | 2 | Multi-column flow and drop cap |
| `text/kicker` | 1 | Kicker with editorial context |
| `text/quote` | 2 | Block and inline variants |
| `text/byline` | 2 | Attribution stack and author/continuation components |
| `examples/spanning` | 5 | Each documented span pattern |
| `examples/responsive` | 1 | Existing desktop/tablet/mobile comparison |

`theme`, `examples/nyt-frontpage`, and `examples/blackletter` are explicit exceptions. Theme is a token reference without copyable component snippets; the two example pages link to dedicated full-page rendered routes that are already the demo itself.

## Demo presentation

All governed pages use the existing `ComponentDemo` component:

1. A concise title and one-sentence explanation establish the intended use.
2. The live preview is always visible and appears first.
3. Source is collapsed by default, expandable with a 44px minimum control.
4. Copy acts on the complete displayed snippet and reports visible plus `aria-live` success feedback.
5. Preview content uses real NewspaperUI components and semantic heading levels that do not disrupt the document outline.
6. Source containers may scroll horizontally; the document itself must not overflow at 375px.

`NewsSidebar` and `JumpLine` will be added to the MDX component registry so every documented public component can render in MDX.

## Source fidelity and content rules

- Remove standalone `tsx` fences from governed pages after migration.
- Keep API tables adjacent to the examples they explain.
- Demo snippets contain complete representative content rather than `...` placeholders.
- The `code` prop and rendered children use the same props, text, order, and hierarchy.
- Repeated examples may share editorial copy, but each distinct visual variant gets its own Demo.
- JSX text that MDX could wrap incorrectly uses explicit expressions to prevent nested paragraph hydration mismatches.

## Automated enforcement

Extend the documentation source regression suite with one inventory map containing every governed route and its minimum Demo count. Tests will verify:

- each governed file exists and meets its required `ComponentDemo` count;
- no governed file contains a standalone `tsx` fence;
- each Demo has rendered child markup in addition to a source string;
- `NewsSidebar` and `JumpLine` are registered in `mdx-components.tsx`;
- MDX text patterns known to produce nested paragraphs are rejected.

Focused tests follow Red-Green-Refactor: the inventory test must first fail against the incomplete routes, then the pages are migrated in coherent groups until it passes.

## Visual verification

After unit, lint, and static builds pass, run `visual-driven-review` with `playwright-headless` at PC `1440×900` and Mobile `375×812`. Cover every changed route's initial state and representative source-expanded/copy states. Inspect full pages plus overlapping segments, control sizes, document overflow, code recoverability, semantic landmarks, hydration console messages, and failed network requests.

## Boundaries

- Do not introduce shadcn or another UI dependency; the requested interaction model is implemented by the existing NewspaperUI `ComponentDemo`.
- Do not redesign unrelated navigation, theme tokens, or full-page example compositions.
- Do not change component runtime APIs unless a real demo exposes a defect that cannot be corrected in documentation.
- Preserve unrelated working-tree changes and do not commit or push without explicit authorization.

## Success criteria

- All 16 governed routes satisfy the checked Demo inventory.
- A reader sees output before source on every governed page.
- No governed page retains source-only `tsx` fences.
- PC and Mobile review completes with no unresolved clipping, overflow, hydration, accessibility, console, or network defects in the migrated states.
- Docs tests, root tests, lint, forced build, package smoke, and GitHub Pages `/newspaperui` export all finish with exit code 0.
