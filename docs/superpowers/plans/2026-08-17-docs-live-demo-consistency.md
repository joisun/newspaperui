# NewspaperUI Documentation Live Demo Consistency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Do not use subagents for this execution.

**Goal:** Make every component/API, Grid, and Spanning documentation route show a real live preview before complete, copyable source.

**Architecture:** Keep `ComponentDemo` as the single presentation primitive, register every documented public component in MDX, and migrate content in three coherent groups. Enforce the route inventory and minimum Demo counts from the approved spec through source-level Vitest regression tests.

**Tech Stack:** Next.js 15, React 18, Fumadocs 14, MDX, NewspaperUI components, CSS Modules, Vitest, Testing Library, Playwright MCP.

## Global Constraints

- Govern exactly the 16 routes listed in `docs/superpowers/specs/2026-08-17-docs-live-demo-consistency-design.md`.
- Leave `theme`, `examples/nyt-frontpage`, and `examples/blackletter` outside the Demo inventory.
- Add no UI dependency and do not change unrelated navigation or runtime APIs.
- Use complete source strings whose props and content match rendered children.
- Use explicit JSX string expressions where MDX could create nested paragraph hydration errors.
- Keep document-level width within 375 CSS pixels; source may scroll inside its own container.
- Preserve unrelated working-tree changes. Do not commit or push without explicit user authorization.

---

### Task 1: Add the repository-wide Demo coverage contract

**Files:**

- Modify: `packages/docs/content/docs/live-demos.test.ts`
- Modify: `packages/docs/mdx-components.test.ts`

**Interfaces:**

- Consumes: MDX source files under `packages/docs/content/docs` and `useMDXComponents()`.
- Produces: a table-driven route contract with exact minimum Demo counts and MDX registry assertions.

- [x] **Step 1: Add failing inventory tests**

Add the exact inventory below and parameterize tests so each route can be run by its path:

```ts
const requiredDemoCounts = {
  'grid-system.mdx': 3,
  'components/layout.mdx': 2,
  'components/article.mdx': 2,
  'components/masthead.mdx': 3,
  'components/rule.mdx': 2,
  'components/media.mdx': 5,
  'components/footer.mdx': 3,
  'components/data.mdx': 4,
  'text/index.mdx': 8,
  'text/headline.mdx': 1,
  'text/bodytext.mdx': 2,
  'text/kicker.mdx': 1,
  'text/quote.mdx': 2,
  'text/byline.mdx': 2,
  'examples/spanning.mdx': 5,
  'examples/responsive.mdx': 1,
} as const;

test.each(Object.entries(requiredDemoCounts))(
  '%s renders every documented example before source',
  (relativePath, expectedCount) => {
    const source = readDoc(relativePath);
    expect(countDemos(source)).toBe(expectedCount);
    expect(source).not.toContain('```tsx');
    expect(extractDemoBodies(source)).toHaveLength(expectedCount);
    for (const body of extractDemoBodies(source)) {
      expect(body).toMatch(/<[A-Z][A-Za-z0-9]*\b/);
    }
    expectNoMdxParagraphInsideTextComponents(source);
  },
);
```

Implement `extractDemoBodies()` by splitting on `<ComponentDemo` and `</ComponentDemo>`, then locating the final standalone opening-tag boundary `\n>\n` inside each block. Do not search for the first `>` because JSX stored inside the `code` prop contains the same character.

- [x] **Step 2: Add failing registry assertions**

Extend `mdx-components.test.ts`:

```ts
expect(components.NewsSidebar).toBeDefined();
expect(components.JumpLine).toBeDefined();
```

- [x] **Step 3: Verify RED**

Run:

```bash
pnpm --filter @newspaperui/docs test -- content/docs/live-demos.test.ts mdx-components.test.ts
```

Expected: failures name the incomplete routes and the two missing registry components; existing Masthead, Text overview, and Responsive assertions remain green.

---

### Task 2: Register missing components and migrate layout foundations

**Files:**

- Modify: `packages/docs/mdx-components.tsx`
- Modify: `packages/docs/content/docs/grid-system.mdx`
- Modify: `packages/docs/content/docs/components/layout.mdx`
- Modify: `packages/docs/content/docs/components/article.mdx`
- Modify: `packages/docs/content/docs/components/rule.mdx`
- Modify: `packages/docs/content/docs/examples/spanning.mdx`

**Interfaces:**

- Consumes: `ComponentDemo`, `Layout`, `Section`, `Article`, `Layer`, `Rule`, `Headline`, `Kicker`, and `BodyText` from the existing MDX registry.
- Produces: 14 live layout demos and MDX access to `NewsSidebar` and `JumpLine`.

- [x] **Step 1: Register the two public components**

Import `NewsSidebar` and `JumpLine` from `./lib/nui-client` and include both keys in the object returned by `useMDXComponents()`.

- [x] **Step 2: Migrate Grid System**

Replace its three standalone code fences with demos titled `Eight + sixteen`, `Six + twelve + six`, and `Full-width feature`. Each preview uses `Layout padding="0"`, `Section columns={24}`, explicit `Article span`, semantic `Headline as="h3"` or lower, and full paragraph content.

- [x] **Step 3: Migrate Layout and Article**

Add two Layout demos: a 24-column lead/sidebar composition and a bounded relative container with an absolute Layer label. Convert Article's span and Layer pullout examples into two matching demos without placeholder text.

- [x] **Step 4: Migrate Rule**

Wrap the three horizontal variants in one vertically spaced preview and the vertical divider in a second flex preview with two complete editorial paragraphs.

- [x] **Step 5: Migrate Spanning**

Create one Demo for each documented 8+16, 6+12+6, 12+12, 4+16+4, and 24-wide pattern. Use concise real headlines/body copy and heading levels `h3` through `h5`.

- [x] **Step 6: Verify the group turns GREEN**

Run the registry test plus targeted inventory names for `grid-system`, `components/layout`, `components/article`, `components/rule`, and `examples/spanning`. Confirm these route cases pass even while later groups remain red.

---

### Task 3: Migrate media, footer, and data components

**Files:**

- Modify: `packages/docs/content/docs/components/media.mdx`
- Modify: `packages/docs/content/docs/components/footer.mdx`
- Modify: `packages/docs/content/docs/components/data.mdx`

**Interfaces:**

- Consumes: `Figure`, `PullQuote`, `BodyText`, `Layout`, `Section`, `Article`, `Footer`, `NewsSidebar`, `BreakingNewsBanner`, `Folio`, `IndexBox`, `Factbox`, and `RelatedArticles`.
- Produces: twelve live supporting-component demos with source parity.

- [x] **Step 1: Consolidate Media's split preview/source pattern**

Add separate Image and Video demos, wrap the existing Figure preview, wrap the standalone PullQuote preview, and wrap the multi-column PullQuote preview. Keep the real Unsplash image URLs and complete article text in both `code` and children. Remove the three old fences.

- [x] **Step 2: Add Footer-family demos**

Create separate demos for:

```tsx
<Footer
  copyright="© 2026 The Daily Chronicle"
  edition="Late City Edition"
  links={[{ label: 'Archive', href: '#archive' }, { label: 'Contact', href: '#contact' }]}
/>
```

an 18+6 Section with `NewsSidebar divider`, and a `BreakingNewsBanner` with a complete breaking headline.

- [x] **Step 3: Add Data-family demos**

Create separate demos for Folio, IndexBox, Factbox, and RelatedArticles. Use complete arrays directly in the source strings and rendered props, keep internal links local (`#story-*`), and wrap grid-aware components in `Layout`/`Section` where needed.

- [x] **Step 4: Verify the group turns GREEN**

Run targeted inventory cases for `components/media`, `components/footer`, and `components/data`, then run the full docs test file to ensure no source-fidelity or MDX paragraph regression was introduced.

---

### Task 4: Migrate every Text detail page

**Files:**

- Modify: `packages/docs/content/docs/text/headline.mdx`
- Modify: `packages/docs/content/docs/text/bodytext.mdx`
- Modify: `packages/docs/content/docs/text/kicker.mdx`
- Modify: `packages/docs/content/docs/text/quote.mdx`
- Modify: `packages/docs/content/docs/text/byline.mdx`

**Interfaces:**

- Consumes: `Headline`, `BodyText`, `Kicker`, `Quote`, `Byline`, `Dateline`, `Caption`, `AuthorCard`, `JumpLine`, and existing `ComponentDemo`.
- Produces: eight live Text-detail demos while preserving API tables.

- [x] **Step 1: Add the Headline and Kicker demos**

Headline renders High/Medium/Low examples with `as="h3"`, `as="h4"`, and `as="h5"`. Kicker renders a section label immediately above a Low headline so its editorial role is visible.

- [x] **Step 2: Add two BodyText demos**

The first shows balanced three-column text at wide widths; the second shows a two-column opening with `dropCap`. Each contains at least three complete `<p>` children written as JSX string expressions.

- [x] **Step 3: Add Block and Inline Quote demos**

Block Quote is rendered in a standalone composition. Inline Quote is embedded inside a readable paragraph so its inline semantics are visible.

- [x] **Step 4: Add attribution and continuation demos**

The first combines Byline, Dateline within BodyText, and Caption inside a semantic `figure`. The second combines AuthorCard with `avatar` omitted and paired `JumpLine direction="from"` / `direction="to"` markers.

- [x] **Step 5: Verify all inventory tests turn GREEN**

Run:

```bash
pnpm --filter @newspaperui/docs test -- content/docs/live-demos.test.ts mdx-components.test.ts
```

Expected: all 16 inventory rows and both registry checks pass; no governed file contains a `tsx` fence.

---

### Task 5: Static, semantic, and source-fidelity verification

**Files:**

- Modify only if a failing check reveals a defect in the files already listed.

**Interfaces:**

- Consumes: migrated MDX, generated Fumadocs source, existing build and package scripts.
- Produces: verified static HTML and publishable package artifacts.

- [x] **Step 1: Run focused and repository tests**

```bash
pnpm --filter @newspaperui/docs test
pnpm test
pnpm lint
git diff --check
```

- [x] **Step 2: Build all packages and smoke-test the tarball**

```bash
pnpm exec turbo run build --force
pnpm package:smoke
```

- [x] **Step 3: Verify GitHub Pages export**

```bash
NEXT_PUBLIC_BASE_PATH=/newspaperui pnpm --filter @newspaperui/docs build
```

Check all 16 governed output HTML files for rendered Demo content and `/newspaperui/` asset prefixes.

- [x] **Step 4: Scan related documentation**

Run the required changed-file and Markdown-tree scans. Update the approved spec and this plan only if implementation behavior diverges; otherwise report that no additional docs sync is required.

---

### Task 6: PC and Mobile visual regression

**Files:**

- Write evidence only under `.vdr-log/2026-08-17-docs-demo-consistency/`.

**Interfaces:**

- Consumes: a stable local docs production or development target.
- Produces: original-resolution screenshots, deterministic DOM/console/network evidence, Markdown report, and HTML report.

- [x] **Step 1: Read the required Visual-Driven Review references and lock `playwright-headless`**

Use PC `1440×900` and Mobile `375×812`, already authorized by the approved spec.

- [x] **Step 2: Review all changed routes**

Capture initial full pages and overlapping segments for the 13 newly migrated routes. Inspect preview/source order, repeated card consistency, tables, bottom content, document overflow, and touch target size.

- [x] **Step 3: Review material interaction states**

On representative layout, media, text, and data routes, expand source and activate Copy. Verify visible feedback, `aria-live`, code recoverability, console errors, hydration errors, and failed requests.

- [x] **Step 4: Aggregate evidence**

Write `report.md` and `report.html` with one unique `STEP_PASS`, `STEP_FAIL`, or `STEP_SKIP` marker per planned check and one `VISUAL_CLEAR`, `VISUAL_FINDING`, or `VISUAL_SKIP` row per reviewed state.

- [x] **Step 5: Run final verification and handoff**

Re-run the smallest command set affected by any review fixes, synchronize Tasks Recorder, list changed files, report verification counts, state the remaining GitHub Pages external deployment action, and do not commit.
