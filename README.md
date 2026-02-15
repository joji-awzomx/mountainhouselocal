# Mountain House Local

A community directory and news platform for Mountain House, California — connecting residents with local businesses, events, and community stories.

**Live site:** [mountainhouselocal.com](https://mountainhouselocal.com)

## Tech Stack

- **Framework:** Next.js 14 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static site (compatible with Vercel, Netlify, Cloudflare Pages, etc.)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (metadata, analytics, structured data)
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── blog/               # Blog listing + [slug] detail pages
│   ├── directory/          # Business directory + [slug] detail + category pages
│   ├── events/             # Community events calendar
│   ├── subscribe/          # Newsletter subscription form
│   ├── privacy/            # Privacy Policy
│   ├── terms/              # Terms of Service
│   ├── cookie-policy/      # Cookie Policy
│   └── utils.ts            # Utility functions (slugify)
├── components/             # Reusable React components
│   ├── Header.tsx          # Site navigation
│   ├── Footer.tsx          # Site footer
│   ├── BusinessCard.tsx    # Business card display
│   ├── SearchBar.tsx       # Client-side search
│   ├── StarRating.tsx      # Star rating display
│   ├── NewsletterCTA.tsx   # Newsletter call-to-action
│   ├── CookieConsent.tsx   # CCPA/GDPR cookie consent banner
│   ├── Analytics.tsx       # Google Analytics 4 + tracking
│   └── OutboundLink.tsx    # Outbound click tracking component
├── data/                   # Static data (no database)
│   ├── businesses.ts       # Business directory data + interfaces
│   └── blog.ts             # Blog post content + interfaces
└── lib/                    # Shared utilities
    └── structured-data.ts  # JSON-LD schema generators for SEO/AEO
```

## Data Architecture

This is a **fully static site** with no database. All content is stored in TypeScript files:

| Data | Location | Description |
|------|----------|-------------|
| Businesses | `src/data/businesses.ts` | 12 local businesses with full profiles |
| Blog Posts | `src/data/blog.ts` | Community news articles |
| Events | `src/app/events/page.tsx` | Community event listings (inline) |
| Categories | `src/data/businesses.ts` | 12 business categories |

### Business Data Fields
Each business record contains: name, slug, category, subcategory, tagline, descriptions (short + long), address, city, state, zip, phone, website, email, hours, images, rating, review count, partnership tier, social media links, tags, amenities, price range, year established, owner name, verification status, neighborhood.

### Partnership Tiers
Businesses can be listed at: Free, Bronze, Silver, Gold, or Platinum tiers. Higher tiers get priority placement (via `priority_score`) and featured status.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### Production Build
```bash
npm run build
```
Static files are output to the `out/` directory.

### Linting
```bash
npm run lint
```

## Analytics & Tracking

The site integrates:

1. **Google Analytics 4** — Page views, user demographics, traffic sources, geo location
2. **Microsoft Clarity** (optional) — Heatmaps, session recordings, click maps
3. **Custom outbound click tracking** — Measures clicks to business websites by business name, category, and destination URL
4. **Cookie consent** — CCPA-compliant consent banner

### Setup

Add your tracking IDs to `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx
```

## SEO & AEO

- **JSON-LD structured data** on all pages (WebSite, LocalBusiness, BreadcrumbList, Article, FAQPage)
- **Open Graph** and **Twitter Card** meta tags
- **robots.txt** and **sitemap.xml** for crawler guidance
- **FAQ sections** on key pages for Answer Engine Optimization (AEO)
- Semantic HTML with proper heading hierarchy
- Location-optimized content for "Mountain House, CA" queries

## Legal & Privacy

- **Privacy Policy** (`/privacy`) — CCPA-compliant, covers data collection practices
- **Terms of Service** (`/terms`) — Usage terms and disclaimers
- **Cookie Policy** (`/cookie-policy`) — Cookie usage disclosure
- **Cookie Consent Banner** — Opt-in/opt-out for analytics cookies

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID | For analytics |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity project ID | Optional |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | For sitemap |

## Deployment

This site exports as static HTML. Deploy to any static host:

```bash
npm run build
# Upload the `out/` directory
```

Or deploy directly to Vercel:
```bash
npx vercel
```

## Contributing

1. Create a feature branch from `dev`
2. Make your changes
3. Test with `npm run build`
4. Submit a pull request to `dev`

## License

Copyright Mountain House Local. All rights reserved.
