# NewspaperUI Product Hardening Design

## Product outcome

NewspaperUI should become a dependable editorial React component library, not only a visual demo. A developer must be able to discover the library on GitHub Pages, install one package, import one stylesheet, build a newspaper layout, adjust its theme, and verify the result without learning the monorepo's internal package structure.

Success is proven by a fresh consumer installation, complete package artifacts, stable documentation builds, usable Mobile and PC workflows, and consistent public documentation.

## Evidence and constraints

The repository currently builds and its 51 tests pass, but the public package contract is broken. The `newspaperui` manifest exports `dist/style.css`, while the tarball does not contain that file. It also depends at runtime on `newspaperui-theme` and `newspaperui-utils`, neither of which is published. README examples still use obsolete `@newspaperui/*` names.

The visual baseline covers five routes and 15 material states at `375x812` and `1440x900`. It identified a 95px Mobile CREATE preview, clipped Mobile code examples, missing document H1s, unlabeled CREATE controls, small interactive targets, invalid landmarks/headings, and light gutters around the PC dark homepage.

Real npm publication is an external action and remains outside automatic execution. The repository will be made publication-ready and validated through tarball installation.

## Package architecture

Only `newspaperui` is public. `packages/theme` and `packages/utils` remain workspace modules used to organize source and tests, but become private and are bundled into the public package.

The component entry imports the theme stylesheet so Vite emits `dist/style.css`. React and ReactDOM remain peer dependencies and external build inputs. Theme and utility code must not appear as runtime dependencies in the packed manifest. Declaration generation excludes test sources.

The public contract is:

    pnpm add newspaperui

    import 'newspaperui/style.css';
    import { Layout, Section, Article, Headline } from 'newspaperui';

A package-smoke script packs the public package, installs it into an isolated temporary consumer together with React, checks ESM/CJS/type/CSS exports, and builds a minimal app. CI runs lint, test, build, and package smoke before GitHub Pages deployment.

## Experience architecture

### Homepage

The homepage becomes a concise editorial landing page with one semantic `main` and one H1. Its asymmetric hero includes a factual value proposition, a copyable install command, primary documentation and secondary theme-builder actions, and a real responsive component preview.

Below the fold, the page presents verified capabilities: 28 exported components, a 24-column grid, multilingual typography, theme tokens, selected component families, and a short install-to-compose workflow. It links to full blocks rather than embedding three extremely long newspapers.

The visual language keeps warm paper, oxblood accent, high-contrast editorial typography, square borders, and deliberate rules. Layout asymmetry comes from scale and column balance, not decorative cards. Motion is limited to state feedback and respects `prefers-reduced-motion`.

### Documentation and navigation

The global header uses consistent iconography, 44px minimum hit areas, visible focus states, and an accessible Mobile menu. Documentation routes render their frontmatter title as a single H1 and expose route-specific metadata. Code blocks scroll horizontally instead of clipping.

HOME and BLOCKS use a `main` landmark. BLOCKS uses sequential H1/H2 hierarchy. Dark mode applies the page surface continuously, including outer gutters.

### Theme creator

PC retains a two-pane editor and preview. Below the Mobile breakpoint, CREATE becomes a single-column interface with an Editor/Preview segmented control. The current view occupies the full width instead of rendering two unusable panes.

Every visible field label is associated through `htmlFor` and a stable `id`. Color controls, selects, presets, tab controls, and export buttons receive at least 44px hit areas. Presets retain exact token behavior.

## Responsive and accessibility requirements

- No document-level horizontal overflow at 375px or 1440px.
- Code examples provide horizontal scrolling.
- Interactive controls are at least 44x44 CSS pixels.
- Each route has one primary H1 and one `main` landmark.
- Visible form labels have programmatic associations.
- Keyboard focus remains visible and Mobile navigation preserves focus behavior.
- Color contrast and theme semantics use existing design tokens.
- Responsive behavior is implemented with CSS, not viewport checks during render.

## Release and documentation

README, package manifests, contributor guidance, and release instructions use the single-package contract and the verified component count. Changesets remains the versioning mechanism. A release workflow may publish on an explicit release trigger using `NPM_TOKEN`; normal pushes never publish.

GitHub Pages deployment depends on quality checks and continues to build with `NEXT_PUBLIC_BASE_PATH=/newspaperui`. Metadata supplies a useful product title, description, canonical path, and social preview configuration that works under the Pages base path.

## Verification

1. Root lint succeeds.
2. All unit tests succeed.
3. Forced monorepo build succeeds.
4. The public tarball contains JS, CJS, declarations, and CSS but no test declarations.
5. A clean consumer installs and imports only `newspaperui`.
6. GitHub Pages static export contains expected base-path assets.
7. Focused browser regression passes at 375x812 and 1440x900 for HOME, docs, CREATE, and BLOCKS.
8. The post-change visual review compares against the saved baseline.

## Johari review

- **Open Area:** package failures and visual findings are measured and reproducible.
- **Hidden Area:** npm ownership and release secrets remain user-controlled.
- **Blind Spot:** changing public names again would create needless migration cost, so the design preserves `newspaperui`.
- **Unknown Area:** registry publication is not assumed; tarball consumer verification is the local proof until credentials are authorized.
