# NewspaperUI

A newspaper-style UI component library built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
newspaperui/
├── packages/
│   ├── components/     # React components
│   ├── theme/          # CSS variables and Tailwind tokens
│   ├── utils/          # Utility functions
│   └── docs/           # Documentation site (Next.js)
├── turbo.json          # Turborepo configuration
├── pnpm-workspace.yaml # pnpm workspace configuration
└── package.json        # Root package.json
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Installation

```bash
pnpm install
```

### Development

```bash
# Run all packages in dev mode
pnpm dev

# Build all packages
pnpm build

# Run linting
pnpm lint

# Run tests
pnpm test
```

## Packages

### @newspaperui/components

React components for building newspaper-style interfaces.

**Dependencies**: `@newspaperui/theme`, `@newspaperui/utils`

### @newspaperui/theme

CSS variables and Tailwind tokens for consistent theming.

### @newspaperui/utils

Utility functions used across the component library.

### @newspaperui/docs

Documentation site built with Next.js 14+ App Router.

**Dependencies**: `@newspaperui/components`

## Tech Stack

- **React** 18+
- **TypeScript** 5+
- **Tailwind CSS** 3+
- **Next.js** 14+ (docs only)
- **Vite** 5+ (build tool for components/theme/utils)
- **Turborepo** (monorepo orchestration)
- **pnpm** (package manager)

## License

MIT
