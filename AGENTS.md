# Repository Guidelines

## Project Structure & Module Organization

This is a React 19 + TypeScript site built with Vite. Application entry points are `src/main.tsx` and `src/App.tsx`. Page-level content lives in section components in `src/sections/`: `HeroSection.tsx`, `ServicesSection.tsx`, `ContactSection.tsx`, `ProcessSection.tsx`, `InsightsSection.tsx`, `CaseStudySection.tsx`, `FeaturedWorkSection.tsx`, `ManifestoSection.tsx`, and `Navigation.tsx`. Reusable shadcn/Radix-style primitives are in `src/components/ui/`. Shared helpers belong in `src/lib/` with the `cn()` class merge utility in `src/lib/utils.ts`. Global styles are in `src/index.css` and `src/App.css`; Tailwind config is in `tailwind.config.js`. Static image assets are served from `public/`. Production output is in `dist/`.

## Build, Test, and Development Commands

- `npm run dev`: start the Vite development server with hot reload.
- `npm run build`: runs `tsc -b` (TypeScript compile) then `vite build`—always runs typecheck before bundling.
- `npm run lint`: run ESLint across the repository.
- `npm run preview`: serve the built `dist/` output locally.

After dependency changes, run `npm install` and commit the updated `package-lock.json`.

## Deployment

Firebase Hosting deploys from `dist/`. Configure in `firebase.json`:
- Target: `westley-group-app`
- Rewrites all routes to `index.html` (SPA mode)
- Assets get immutable cache headers

## Coding Style & Naming Conventions

Write React components in TypeScript with `.tsx` files. Use PascalCase for components and section files, camelCase for variables and functions. Prefer function components and hooks. Follow existing style: two-space indentation in JSX, semicolons in app/section files, Tailwind utilities for styling. Use `lucide-react` icons and existing UI primitives before adding new dependencies. GSAP `ScrollTrigger` animations should be scoped inside effects and cleaned up on unmount.

## Important Dependencies

- `@gsap/react` + `gsap`: animation library (use `useGSAP` hook for safe cleanup)
- `kimi-plugin-inspect-react`: dev-only React debugging plugin in vite.config.ts
- Radix UI primitives: extensive component library under `src/components/ui/`

## Testing Guidelines

No test runner configured. Validate changes with `npm run lint` and `npm run build`, then use `npm run preview` for browser checks. If tests are added, document the test command in `package.json`.

## Commit & Pull Request Guidelines

Recent history uses short, imperative messages with Conventional Commit prefixes: `feat:`, `fix:`, `chore:`. Keep commits focused. Pull requests should include a concise description, validation steps run, linked issue if applicable, and screenshots for UI changes. Note deployment-impacting changes to `firebase.json`, `vite.config.ts`, or build scripts explicitly.

## Security & Configuration Tips

Do not commit secrets, local environment files, or `node_modules/`. Keep Firebase and deployment configuration reviewable. Avoid hard-coding credentials in React source files.