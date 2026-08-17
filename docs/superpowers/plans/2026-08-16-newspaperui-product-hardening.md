# NewspaperUI Product Hardening Implementation Plan

> Execute in the current workspace without committing. Preserve unrelated user changes, especially the existing untracked `AGENTS.md`.

**Goal:** Deliver a single-package NewspaperUI library with a publication-ready build, a conversion-focused GitHub Pages homepage, usable documentation, responsive theme creation, and verified install/release workflows.

**Architecture:** Keep theme and utility modules internal to the pnpm workspace, bundle their runtime output into the public `newspaperui` package, and treat the Next/Fumadocs application as the product website and verification consumer. Use CSS modules for page-specific responsive design and small client components only where interaction requires them.

**Stack:** React 18, TypeScript, Vite 5, Vitest, Next.js 15, Fumadocs, pnpm 9, Turbo, GitHub Actions.

---

## Task 1: Lock the public package contract

**Files:** `packages/components/package.json`, `packages/components/vite.config.ts`, `packages/components/src/index.ts`, `packages/theme/package.json`, `packages/utils/package.json`, `scripts/package-smoke.mjs`, root `package.json`.

1. Add a failing package-smoke check for the declared CSS export, test declarations, and internal runtime dependencies.
2. Import the theme CSS from the public entry and configure declarations to exclude tests.
3. Mark theme/utils private and remove them from the packed runtime dependency contract.
4. Add `pnpm package:smoke` and run it until a clean consumer can import JS and CSS.

## Task 2: Restore quality gates and CI sequencing

**Files:** root `package.json`, `packages/docs/package.json`, `.github/workflows/deploy.yml`, `.github/workflows/release.yml`.

1. Replace the broken root glob lint with recursive package linting.
2. Replace deprecated docs `next lint` with TypeScript validation.
3. Gate Pages build on lint, unit tests, forced build, and package smoke.
4. Add an explicit release workflow that requires an npm environment secret and never runs on an ordinary push.
5. Verify workflow YAML and local command parity.

## Task 3: Rebuild the landing experience

**Files:** `packages/docs/app/page.tsx`, `packages/docs/app/page.module.css`, `packages/docs/components/InstallCommand.tsx`, its CSS module, `packages/docs/app/globals.css`, `packages/docs/app/layout.tsx`.

1. Add focused static assertions for one H1/main and the verified install command.
2. Replace the long demo stack with an asymmetric hero, real component preview, capability proof, component families, and workflow CTA.
3. Add copy feedback with a native button and accessible live status.
4. Apply continuous light/dark page surfaces, responsive type/spacing, focus-visible states, and reduced-motion support.
5. Improve metadata and route language defaults.

## Task 4: Repair header and documentation semantics

**Files:** `packages/docs/components/Header.tsx`, matching styles, `packages/docs/app/docs/[[...slug]]/page.tsx`, `packages/docs/components/CodeBlock.tsx`, `packages/docs/mdx-components.tsx`.

1. Increase owned navigation, theme, search, sidebar, and copy hit areas.
2. Replace character glyph controls with a consistent accessible icon treatment.
3. Render one frontmatter-derived H1 and route-specific metadata.
4. Make code containers horizontally scrollable.
5. Verify heading outline, landmarks, keyboard focus, and Mobile menu behavior.

## Task 5: Make CREATE usable on Mobile

**Files:** `packages/docs/app/create/page.tsx`, `packages/docs/app/create/create.module.css`.

1. Add a focused assertion for all field label associations and Mobile view controls.
2. Associate each label and field with stable IDs.
3. Move fixed inline layout rules into responsive CSS.
4. Add Editor/Preview tabs below the Mobile breakpoint while preserving two-pane PC behavior.
5. Increase primary control hit areas and retain exact preset/export behavior.
6. Verify initial and Modern Dark states at both viewports.

## Task 6: Normalize BLOCKS hierarchy

**Files:** `packages/docs/app/blocks/page.tsx`, `packages/docs/app/blocks/blocks.module.css`.

1. Wrap the route in `main`.
2. Change card headings to H2 and preserve one page H1.
3. Replace inline two-column card layout with responsive CSS and 44px links.
4. Verify all six blocks, consistent rhythm, and no Mobile overflow.

## Task 7: Synchronize public documentation

**Files:** `README.md`, existing `AGENTS.md` only if its facts are stale, `HANDOFF.md` if present, `docs/releasing.md`, and matching Markdown discovered by the required documentation scan.

1. Document the single installation command and CSS import.
2. Correct package names, component count, routes, and development commands.
3. Document dry-run, changeset, npm provenance/token requirements, and Pages deployment.
4. Run the full Markdown reference scan and update every stale public contract.

## Task 8: Final verification and visual regression

1. Run `pnpm lint`, `pnpm test`, `pnpm exec turbo run build --force`, and `pnpm package:smoke`.
2. Confirm tarball contents and clean consumer installation.
3. Build Pages with `NEXT_PUBLIC_BASE_PATH=/newspaperui` and inspect exported asset paths.
4. Run focused Playwright MCP checks at 375x812 and 1440x900.
5. Capture post-change screenshots and compare them with `.vdr-log/2026-08-16-baseline`.
6. Run the required docs tree scan and report synchronization.
7. Report changed files and remaining external release action without committing.
