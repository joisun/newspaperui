# NewspaperUI Docs Theme and Demo Design

## Product outcome

The documentation should let a developer see a real component, understand its variants, inspect the source, and copy it without leaving the page. The same workflow must remain readable and operable on PC and Mobile in both Light and Dark themes.

This spec formalizes the visual review accepted by the user's instruction to continue. It preserves the current routes, component semantics, and editorial demo content while allowing the global navigation to remove redundant entries. The documentation chrome uses a restrained neutral palette, sans-serif product typography, and soft modular geometry.

## First principles

- **Goal:** make rendered output the primary evidence and source code the secondary implementation detail.
- **Facts:** Fumadocs writes `class="light|dark"`; NewspaperUI writes `data-theme`; key MDX pages show source without output; `Demo.tsx` is not registered or used.
- **Constraints:** keep Fumadocs, use the existing component library, add no second design system, preserve GitHub Pages base path behavior, support 375px and 1440px.
- **Success:** one theme state, one page canvas, AA text contrast, live previews on Masthead/Text/Responsive, deterministic Copy feedback, valid landmarks/headings, and no Pages prefetch 404.

## Chosen architecture

### Theme contract

Fumadocs `RootProvider` remains responsible for direction and sidebar context; its unused search and `next-themes` layers are disabled. The NewspaperUI Header and pre-hydration script keep `data-theme="dark"` plus storage key `nui-theme` as the single theme source. Fumadocs only reads the mapped CSS tokens and never writes a competing `class="light|dark"`.

Documentation CSS maps Fumadocs semantic colors to a unified neutral light and dark palette. Page, docs bar, sidebar, and article share one canvas without a blue accent. Separate surfaces remain only for tables, code, and component previews, while the published NewspaperUI package retains its own default editorial tokens. The custom Header owns a borderless theme control. The docs sidebar follows a plain, non-collapsible directory-column model: its auto height follows its content without an internal scrollbar, it starts below the 68px desktop or 64px mobile site header, and adjacent items retain a small vertical gap. Desktop and responsive `On this page` controls remain sticky directly below the same Header.

### ComponentDemo

`ComponentDemo` is one client component with a CSS module. It receives a title, optional description, source string, and rendered React children. Documentation omits descriptions when the title and preview already explain the example; descriptions are reserved for non-obvious constraints.

- The preview is always visible and comes first in DOM and visual order.
- A compact source preview remains visible below a stable divider.
- `View source` expands the complete source without navigating away.
- Copy is available in the expanded state and announces success through visible text and `aria-live="polite"`.
- The frame uses the existing square editorial language, one-pixel rules, no shadow, and locally scrollable source.
- All controls are at least 44 by 44 CSS pixels and support keyboard focus.

The component is registered in `mdx-components.tsx`. Masthead, Text, and Responsive become the first migrated routes. Media remains the positive reference and can be migrated later without changing the API.

### Responsive preview

The Responsive page renders one real composition inside three labeled preview frames: Desktop, Tablet, and Mobile. These are visual scale models, not nested browser emulators. Each frame shows the same content at a different container width so users can compare stacking and hierarchy without horizontal page overflow.

### Publishing and semantics

The global brand link disables speculative prefetch on the static Pages home route, removing the failing `.txt?_rsc` request while preserving normal navigation. The NYT example gains one `main` landmark and one `h1`; the lead story becomes `h2`.

## Alternatives rejected

1. **Adopt `next-themes` directly in Header.** A valid option, but it adds a direct dependency and a second state API when no consumed Fumadocs component needs it.
2. **Remove Fumadocs or import shadcn.** Gives full visual control, but creates an unnecessary framework migration or a second design system.
3. **Keep separate highlighted MDX code blocks.** Preserves Shiki output, but duplicates the preview/source relationship and cannot guarantee one consistent interaction model.

## Verification

- Unit tests cover provider configuration, Header theme actions, ComponentDemo disclosure/copy feedback, MDX registration, migrated live examples, home prefetch behavior, and NYT landmarks/headings.
- `pnpm --filter @newspaperui/docs test`, lint, and build pass.
- GitHub Pages export uses `NEXT_PUBLIC_BASE_PATH=/newspaperui`.
- Playwright MCP checks PC 1440x900 and Mobile 375x812 in Light, Dark, collapsed source, expanded source, Copy feedback, menu-open, and NYT demo states.

## Johari review

- **Open:** the audit measurements, desired reference interaction, source architecture, and brand tokens are verified.
- **Hidden:** no analytics identify which component route has the highest adoption impact.
- **Blind:** rendering many interactive demos can increase page height, so source stays compact by default.
- **Unknown:** full screen-reader behavior requires post-implementation browser verification; unit tests only prove DOM semantics.
