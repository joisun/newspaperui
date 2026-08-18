# NewspaperUI Docs Theme and Demo Implementation Plan

> **For agentic workers:** Execute inline in the current workspace. Do not commit. Preserve unrelated user changes.

**Goal:** Unify the documentation theme and ship accessible live component previews with source and copy interactions.

**Architecture:** Disable the unused Fumadocs `next-themes` layer, keep NewspaperUI `data-theme` as the single theme source, map Fumadocs tokens to the editorial palette, and register one reusable `ComponentDemo` client component for MDX. Keep routes and content architecture stable.

**Tech Stack:** Next.js 15, React 18, Fumadocs 14, MDX, CSS Modules, Vitest, Testing Library, Playwright MCP.

## Global constraints

- Preserve route slugs, nav labels, component semantics, and live-demo behavior while allowing the documentation chrome to use its own cool Swiss palette and geometry.
- Do not add shadcn or another visual dependency.
- Use test-first Red-Green-Refactor for behavior and bug fixes.
- Keep controls at least 44 by 44 CSS pixels and body contrast at least 4.5:1.
- Support 375px and 1440px without document-level horizontal overflow.
- Do not commit changes without explicit user authorization.

### Task 1: Single theme contract

**Files:**

- Create: `packages/docs/lib/theme.test.ts`
- Create: `packages/docs/lib/theme.ts`
- Modify: `packages/docs/app/layout.tsx`
- Modify: `packages/docs/app/globals.css`

- [x] Write tests requiring the Fumadocs theme layer to be disabled and its semantic colors to be mapped for `data-theme` Light/Dark states.
- [x] Run focused tests and verify the expected failures.
- [x] Disable the RootProvider theme layer while preserving the NewspaperUI pre-hydration script and Header state.
- [x] Map Fumadocs background, card, foreground, border, accent, and code tokens for both themes.
- [x] Run focused tests and docs type-check.

### Task 2: Accessible ComponentDemo

**Files:**

- Create: `packages/docs/components/Demo.test.tsx`
- Modify: `packages/docs/components/Demo.tsx`
- Create: `packages/docs/components/Demo.module.css`
- Modify: `packages/docs/mdx-components.tsx`

- [x] Write tests for always-visible preview, collapsed source, `aria-expanded`, complete source expansion, clipboard copy, visible feedback, and polite live announcement.
- [x] Run the test and verify it fails because the component is missing.
- [x] Implement the minimal component and editorial CSS.
- [x] Register `ComponentDemo` in MDX.
- [x] Run the focused component and MDX tests.

### Task 3: Migrate live documentation examples

**Files:**

- Create: `packages/docs/content/docs/live-demos.test.ts`
- Modify: `packages/docs/content/docs/components/masthead.mdx`
- Modify: `packages/docs/content/docs/text/index.mdx`
- Modify: `packages/docs/content/docs/examples/responsive.mdx`

- [x] Write source assertions requiring live demos on all three routes.
- [x] Run the test and verify the current source-only pages fail.
- [x] Wrap each Masthead and Text example in `ComponentDemo` with real children and exact source.
- [x] Add Desktop, Tablet, and Mobile visual comparison previews to Responsive.
- [x] Run focused tests, generated-MDX validation, and type-check.

### Task 4: Pages and semantic polish

**Files:**

- Modify: `packages/docs/components/Header.test.tsx`
- Modify: `packages/docs/components/Header.tsx`
- Create: `packages/docs/app/examples/nyt-frontpage/page.test.tsx`
- Modify: `packages/docs/app/examples/nyt-frontpage/page.tsx`

- [x] Add failing assertions for disabled speculative home prefetch, one `main`, and one `h1`.
- [x] Verify the tests fail for the audited behavior.
- [x] Disable brand-link prefetch, wrap the NYT edition in `main`, and make the lead story `h2`.
- [x] Run focused tests and docs type-check.

### Task 5: Verification and documentation sync

- [x] Run docs tests and lint.
- [x] Run root test, lint, forced build, and package smoke.
- [x] Build Pages with `NEXT_PUBLIC_BASE_PATH=/newspaperui` and verify exported paths.
- [x] Run the required Markdown reference scan and update matching docs.
- [x] Use `visual-driven-review` at 1440x900 and 375x812 for Light, Dark, demo/source/copy, menu, and NYT states.
- [x] Report evidence, changed files, remaining external deployment action, and no commit.
