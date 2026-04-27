# OrtegaEats Marketing Site

Landing page for [OrtegaEats](https://ortegaeats.com) — a peer-to-peer meal swipe marketplace for UCSB students.

## Tech Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS 4
- TypeScript
- Deployed on Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build    # Outputs static site to out/
```

## Structure

```
app/
  layout.tsx        # Root layout, SEO metadata, Open Graph tags
  page.tsx          # Full landing page (hero, pricing, FAQ, etc.)
  globals.css       # Tailwind config, custom colors, animations
  admin/page.tsx    # Redirect to admin panel
public/
  icon.png          # App icon
  favicon.png       # Favicon
```

## Deployment

Static export deployed to Vercel. No environment variables required.
