# Repository Guidelines

## Project Structure & Module Organization

This repository is a pnpm/Turborepo monorepo. Reusable React components live in `packages/components/src`, grouped by `layout/`, `text/`, and `media/`; export public APIs from `packages/components/src/index.ts`. Design tokens, typography, and CSS variables belong in `packages/theme/src`, while shared grid and class-name helpers live in `packages/utils/src`. The Next.js/Fumadocs documentation site is under `packages/docs`; update its MDX content when changing documented component behavior. Unit tests sit beside package code in `src/__tests__`. Playwright suites are organized in `tests/e2e`, `tests/theme`, `tests/responsive`, and `tests/visual`. Static images and captured reference output are stored at the repository root or in `screenshots/`.

## Build, Test, and Development Commands

- `pnpm install` installs the workspace using the pinned pnpm version.
- `pnpm dev` starts package development tasks through Turbo.
- `pnpm --filter @newspaperui/docs dev` runs the docs site at `http://localhost:3000`.
- `pnpm build` builds all packages and the statically exported docs site.
- `pnpm lint` runs each package's TypeScript-focused lint check.
- `pnpm test` runs Vitest tests for components, utilities, and docs behavior.
- `pnpm package:smoke` packs `newspaperui` and verifies a clean consumer install.
- `pnpm test:e2e` runs all Playwright projects; build first so `packages/docs/out` exists.

## Coding Style & Naming Conventions

Use TypeScript with strict compiler settings and React functional components. Follow the existing 2-space indentation, semicolons, single quotes, and trailing commas; avoid formatting unrelated code. Name components and their files in PascalCase (`PullQuote.tsx`), utilities in camelCase, and public CSS classes with the `nui-` prefix. Keep component props explicit and export public additions through `packages/components/src/index.ts`.

## Testing Guidelines

Use Vitest and Testing Library for unit behavior; name files `*.test.ts` or `*.test.tsx`. Use the existing Playwright MCP browser for cross-route, responsive, theme, or visual verification. No numeric coverage threshold is configured, so cover new branches and regressions directly. Run the smallest relevant suite during development, then `pnpm test`, `pnpm package:smoke`, and focused browser checks before review.

## Commit & Pull Request Guidelines

Recent history follows Conventional Commits such as `feat:`, `fix:`, `docs:`, `refactor:`, and scoped forms like `fix(ci):`. Keep each commit focused and imperative. Pull requests should explain the change and validation performed, link related issues, and include screenshots for UI or documentation updates. Add a Changesets entry when a publishable package change affects consumers; do not include generated build output.
