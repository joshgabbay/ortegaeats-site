# CLAUDE.md - OrtegaEats Marketing Site

## What is this?
Landing page / marketing website for OrtegaEats (ortegaeats.com). Static site deployed via Vercel. Links to the iOS app on the App Store.

## Tech Stack
- **Framework**: Next.js 16 (App Router) with static export (`output: "export"`)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Vercel (static)

## Project Structure
```
app/
  layout.tsx          # Root layout with metadata, SEO, Open Graph
  page.tsx            # Main landing page (single-page with scroll sections)
  globals.css         # Tailwind + custom animations/colors
  admin/page.tsx      # Redirects to app.ortegaeats.com/admin
public/
  icon.png            # App icon
  favicon.png         # Favicon
```

## Key Commands
- `npm run dev` — Start dev server
- `npm run build` — Static export to `out/`
- `npm run start` — Serve production build

## Page Sections
Hero, Social Proof Bar, Price Comparison (vs DoorDash/UberEats), Trust Badges, How It Works, Pricing, Earn Money (seller CTA), FAQ, Final CTA, Footer

## Design System (Tailwind custom colors in globals.css)
- navy, navy-light, gold, gold-light, aqua, sea-green, coral, charcoal, mist, off-white

## Key URLs
- Site: https://ortegaeats.com
- App Store: https://apps.apple.com/gh/app/ortegaeats/id6760243825
- Instagram: https://www.instagram.com/ortega.eats/
- Contact: ortegaeatscontact@gmail.com
- Admin redirect: /admin → https://app.ortegaeats.com/admin

## Conventions
- Single-page design with scroll-reveal animations (IntersectionObserver)
- All sections use consistent spacing/rounding patterns
- Responsive: mobile-first with sm/md/lg breakpoints
- No environment variables needed (fully static)
