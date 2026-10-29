# pidc-landing

Marketing site for PIDC — Pisico Data Center JSC (`pidc.vn`). Astro + Tailwind CSS v4,
static output, English (default) + Vietnamese (`/vi/`) routes. Tooling mirrors
[qnsc-landing](https://github.com/quynhonsemiconductor/qnsc-landing).

## Stack

- **Astro** — static site generation, image optimization via `astro:assets`
- **Tailwind CSS v4** — styling
- **TypeScript** — strict, `astro check` gates CI
- **Hosting** — Cloudflare Pages (separate PIDC account; deploy wiring lands later)

## Getting started

```bash
nvm use          # Node version pinned in .nvmrc
pnpm install
pnpm dev         # http://localhost:4321
```

## Scripts

| Command          | Action                               |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Local dev server                     |
| `pnpm build`     | Production build to `dist/`          |
| `pnpm preview`   | Preview the production build locally |
| `pnpm lint`      | ESLint + Prettier check              |
| `pnpm typecheck` | `astro check`                        |

## Conventions

- Conventional Commits (commitlint + husky enforce)
- PR titles follow the same convention (CI checks)
- Releases via release-please (`CHANGELOG.md`)
