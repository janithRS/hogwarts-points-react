## hogwarts-points-react

Hogwarts Points is a small React + TypeScript application for tracking house points (Gryffindor, Slytherin, Ravenclaw, Hufflepuff). It's a learning/utility project showcasing a modern frontend stack (Vite, React 18+, TypeScript, Tailwind CSS) and a component-driven UI (shadcn/ui-inspired components).

This README explains what the project does, the main features, the tech used, and how to run and contribute locally.

### What this project does

- Tracks points for each Hogwarts house via a simple UI.
- Provides controls to add or subtract points for a house.
- Persists points in memory (and can be extended to use localStorage or a backend).
- Demonstrates a component-first structure (reusable UI primitives under `src/components/ui/`).

### Key features

- House summary cards and grid layout (`HouseCard`, `HousePointsGrid`).
- Centralized points state using React Context (`src/context/PointsContext.tsx`).
- Mobile-responsive layout and accessible UI primitives.
- Example pages (`src/pages/Index.tsx`, `NotFound.tsx`) and small utility hooks (`src/hooks/`).

### Tech stack

- Vite (dev tooling)
- React + TypeScript
- Tailwind CSS for styling
- shadcn/ui-style component primitives (in `src/components/ui/`)
- Bun-compatible lockfile present (`bun.lockb`) but project uses npm scripts defined in `package.json`.

## Run locally

Prerequisites

- Node.js 18+ (or a newer LTS). If you use Bun, Bun may also work since a `bun.lockb` is present.

Install dependencies (choose your package manager):

```bash
# npm
npm install

# or pnpm
pnpm install

# or yarn
yarn install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project layout (important files)

- `src/` — application source

  - `components/` — UI components and primitives
  - `context/PointsContext.tsx` — centralized points state
  - `pages/Index.tsx` — main page
  - `hooks/` — small reusable hooks

- `index.html`, `vite.config.ts`, `package.json` — project tooling

## Development notes

- Add features by implementing components in `src/components` and wiring updates to `PointsContext` for global state.
- Consider persisting state to `localStorage` or adding an API backend for multi-user/real-time features.

## Contributing

1. Fork the repo and create a feature branch.
2. Run the dev server and implement your change.
3. Open a pull request describing the change and why it's useful.

## License

This project doesn't include an explicit license file. Add `LICENSE` if you plan to open-source it.

---

If you'd like, I can also add a short CONTRIBUTING.md or wire up `localStorage` persistence for points—tell me which next step you prefer.

# Welcome to your Lovable project

## Project info

````markdown
# hogwarts-points-react

Minimal React + TypeScript app scaffolded with Vite. This project uses Tailwind CSS and shadcn/ui components.

## Quick start — run locally

Requirements

- Node.js 18+ (or newer LTS)

Commands

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```
````

## What technologies are used

- Vite
- TypeScript
- React
- Tailwind CSS
- shadcn-ui

## Notes

- This project no longer includes GitHub Pages deployment configuration.
- To deploy elsewhere, use any standard static host (Netlify, Vercel, Surge, etc.) and point it to the `dist/` folder produced by `npm run build`.
