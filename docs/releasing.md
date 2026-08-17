# Releasing NewspaperUI

NewspaperUI publishes one public npm package: `newspaperui`. The theme and utility workspaces are private build inputs.

## Prerequisites

- The npm account or organization must own the `newspaperui` package name.
- The GitHub `npm` environment must contain an `NPM_TOKEN` secret with publish permission.
- npm trusted publishing or token policy must allow provenance from this repository.
- The `main` branch and release environment should require the desired reviews.

## Local dry run

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm test
pnpm exec turbo run build --force
pnpm package:smoke
pnpm --filter newspaperui pack --pack-destination ./package-artifacts
```

Inspect the tarball before publishing. It must include `dist/index.js`, `dist/index.cjs`, `dist/index.d.ts`, and `dist/style.css`; it must not contain test declarations or runtime dependencies on `newspaperui-theme` or `newspaperui-utils`.

## Version and publish

1. Run `pnpm changeset` for every consumer-visible package change.
2. Merge the feature pull request into `main`.
3. The release workflow opens or updates a Changesets version pull request.
4. Review the version, changelog, package smoke output, and npm ownership.
5. Merge the version pull request. The same workflow runs `pnpm release` and publishes with provenance.

Normal pushes do not bypass Changesets or publish an unversioned tarball. Do not run `npm publish` from the repository root.

## GitHub Pages

The Pages workflow runs lint, unit tests, a forced build, and package smoke before uploading `packages/docs/out`. It sets `NEXT_PUBLIC_BASE_PATH=/newspaperui`; verify that generated asset URLs retain that prefix.
