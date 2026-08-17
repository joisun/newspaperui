# NewspaperUI Handoff

## Current architecture

NewspaperUI is a pnpm/Turborepo monorepo with one public package:

- `packages/components`: published as `newspaperui` and includes bundled theme CSS and utility runtime code.
- `packages/theme`: private source module for variables, typography, fonts, and visual weights.
- `packages/utils`: private source module for grid validation and class-name helpers.
- `packages/docs`: private Next.js/Fumadocs site deployed to GitHub Pages.

## Verified public contract

```bash
pnpm add newspaperui
```

```tsx
import 'newspaperui/style.css';
import { Layout, Section, Article } from 'newspaperui';
```

The package smoke test checks ESM, CommonJS, declarations, CSS, absence of test artifacts, and installation without unpublished runtime packages.

## Product surfaces

- `/`: concise editorial landing page with an install command and live composition.
- `/docs/*`: route-specific H1 and metadata, horizontally recoverable code examples.
- `/create`: two-pane desktop editor and Editor/Preview tabs on Mobile.
- `/blocks`: six multilingual reference layouts with sequential headings.

## Quality gates

Run these before handoff or release:

```bash
pnpm lint
pnpm test
pnpm exec turbo run build --force
pnpm package:smoke
NEXT_PUBLIC_BASE_PATH=/newspaperui pnpm --filter @newspaperui/docs build
```

GitHub Pages runs the same lint, test, build, and package-smoke gates. npm publication is handled by `.github/workflows/release.yml` and requires the protected `npm` environment plus `NPM_TOKEN`.

## External release boundary

The repository can prove the tarball locally, but it cannot prove npm ownership or publish without credentials. Follow `docs/releasing.md`, confirm that the `newspaperui` name is owned by the intended npm account, then merge the Changesets release pull request.

## Evidence

The pre-change PC/Mobile audit and focused screenshots are stored under `.vdr-log/2026-08-16-baseline/` and intentionally ignored by Git.
