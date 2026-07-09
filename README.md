# عيادات أفضل كلينك | Afdal Clinic

Static marketing website for Afdal Clinic — a dermatology, cosmetics, and laser clinic in Riyadh.

Built with Next.js App Router, React, Tailwind CSS, and Framer Motion. Configured for static export and Cloudflare Pages deployment.

## Tech Stack

- **Framework**: Next.js 16 App Router
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Deployment**: Static export → Cloudflare Pages

## Structure

```
src/
  app/           Pages, layouts, and route-level components
  components/    UI components (layout/, sections/, ui/, motion/)
  data/          Domain data (site.ts, services.ts, doctors.ts, etc.)
  lib/           Business logic (booking, validation, etc.)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to the `out/` directory.

## Lint

```bash
npm run lint
```
