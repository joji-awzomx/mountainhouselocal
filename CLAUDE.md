# Mountain House Local — AI Content Management Guide

## Project Overview
Mountain House Local is a community directory and news platform for Mountain House, California (95391). It is a Next.js 14 static site using TypeScript and Tailwind CSS.

## Content Architecture
All content lives in TypeScript files — there is no database or CMS. Edit these files directly:

| Content Type | File | How to Add |
|---|---|---|
| **Businesses** | `src/data/businesses.ts` | Add a `Business` object to the `businesses` array |
| **Blog Posts** | `src/data/blog.ts` | Add a `BlogPost` object to the `blogPosts` array |
| **Events** | `src/app/events/page.tsx` | Add an `Event` object to the `events` array (inline) |
| **Categories** | `src/data/businesses.ts` | Add to the `categories` array |

## Adding a Business

Add a new object to the `businesses` array in `src/data/businesses.ts`. Follow this template exactly:

```typescript
{
  id: '<next sequential number>',
  name: 'Business Name',
  slug: 'business-name-slug', // lowercase, hyphens, no special chars
  category: 'Restaurants & Dining', // must match a category in the categories array
  subcategory: 'American',
  tagline: 'Short catchy tagline under 60 chars',
  description: 'One paragraph (2-3 sentences). Include business name and "Mountain House" for SEO.',
  long_description: 'Detailed 2-4 paragraph description. Mention Mountain House, CA. Include menu items, services, atmosphere, what makes it special. Rich, engaging, magazine-style writing.',
  address: 'Street Address',
  city: 'Mountain House',
  state: 'CA',
  zip: '95391',
  phone: '(209) XXX-XXXX',
  website: 'https://example.com',
  email: 'contact@example.com',
  hours: {
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    // ... include all 7 days, use 'Closed' if closed
  },
  image: '/images/businesses/business-name.jpg', // place image in public/images/businesses/
  gallery: [],
  logo: '',
  rating: 4.5, // 1-5, one decimal place
  review_count: 100,
  partnership_tier: 'free', // 'free' | 'bronze' | 'silver' | 'gold' | 'platinum'
  priority_score: 50, // 0-100, higher = more prominent placement
  featured: false, // true to show on homepage
  social_media: { instagram: '@handle', facebook: 'page', yelp: 'slug' },
  tags: ['tag1', 'tag2', 'tag3'], // 3-5 lowercase tags
  amenities: ['WiFi', 'Takeout', 'Dine-in'],
  price_range: '$$', // '$' | '$$' | '$$$' | '$$$$'
  year_established: 2024,
  owner_name: '',
  verified: true,
  neighborhood: 'Central',
}
```

### Business Content Rules
- **Always mention "Mountain House"** in description and long_description for SEO
- Slugs: lowercase, hyphens only, no trailing hyphens (e.g., `eight-acres-kitchen-bar`)
- Category must exactly match one in the `categories` array (e.g., `'Restaurants & Dining'`, not `'Restaurants'`)
- Partnership tiers affect display order: platinum > gold > silver > bronze > free
- `priority_score` determines sort order within category (higher = first)
- Set `featured: true` only for paid partners (silver+ tier)
- Tags should be lowercase, descriptive search terms
- Include real phone numbers in (209) XXX-XXXX format
- Hours should be in "HH:MM AM - HH:MM PM" format

## Adding a Blog Post

Add to `blogPosts` array in `src/data/blog.ts`:

```typescript
{
  id: '<next sequential number>',
  title: 'Compelling Title About Mountain House',
  slug: 'url-friendly-slug',
  excerpt: '1-2 sentence preview. Include "Mountain House" for SEO.',
  content: `Full article content with multiple paragraphs.

Use **bold** for emphasis. Mention specific business names, neighborhoods, and landmarks in Mountain House.

Each blog post should be 400-800 words.`,
  author: 'Mountain House Local',
  category: 'Community News', // 'Community News' | 'Business Spotlight' | 'People' | 'Events' | 'Neighborhood Guide' | 'New in Town'
  tags: ['relevant', 'search', 'terms'],
  featured_image: '/images/blog/slug-name.jpg',
  published_date: '2026-02-15', // YYYY-MM-DD format
  read_time: 5, // estimated minutes
  featured: true, // show on homepage
}
```

### Blog Content Rules
- Always include "Mountain House" in title or first paragraph
- Mention specific local businesses by name when relevant (drives SEO for those businesses)
- Reference neighborhoods: Wicklund, Bethany, Altamont, Questa, Hansen, Cordes, College Park
- Use engaging, magazine-style writing — not corporate or generic
- Include local landmarks: Central Community Park, Central Parkway, Mountain House Pkwy

## Available Categories

These are the valid business categories (must match exactly):
- Restaurants & Dining
- Cafes & Bakeries
- Shopping & Retail
- Health & Wellness
- Real Estate
- Professional Services
- Beauty & Spas
- Education
- Home & Garden
- Entertainment
- Fitness & Sports
- Automotive

## Images

- Business images: `/public/images/businesses/` — use `business-slug.jpg` naming
- Blog images: `/public/images/blog/` — use `post-slug.jpg` naming
- Recommended size: 1200x800 for featured images, 800x600 for cards
- Always add images to the `public/` directory, reference from root (`/images/...`)

## Validation

After making content changes, always run:
```bash
npm run validate
```
This checks TypeScript types and builds the site to confirm everything compiles.

## SEO Notes

- Every business page auto-generates JSON-LD LocalBusiness schema
- Every blog post auto-generates JSON-LD Article schema
- FAQ sections are auto-generated on business pages for AEO
- Homepage FAQ is manually maintained in `src/app/page.tsx` (`homepageFAQs` array)
- Category descriptions are in `src/app/directory/category/[slug]/page.tsx`

## Analytics Architecture

Analytics uses **Google Tag Manager (GTM)** as the single collection point. All vendor tags (GA4, Clarity, Windsor, etc.) are managed in the GTM dashboard — not hardcoded in the site.

| Component | File | What It Does |
|---|---|---|
| GTM Web Container | `src/components/Analytics.tsx` | Loads GTM snippet, pushes events to `dataLayer` |
| GTM Noscript | `src/components/Analytics.tsx` | `<noscript>` fallback for GTM |
| Server Beacon | `src/components/Analytics.tsx` | `sendToServer()` sends events to `/api/track` (captures IP/geo) |
| Outbound Tracking | `src/components/OutboundLink.tsx` | Tracks outbound clicks via `dataLayer` + server beacon |
| Server Middleware | `src/middleware.ts` | Captures IP, geo, user agent per request via Vercel headers |
| Tracking API | `src/app/api/track/route.ts` | Server-side click tracking endpoint |

**Key:** All `dataLayer.push()` events include `site_id: 'mountainhouselocal'` for multi-site BigQuery analysis.

**Environment variable:** `NEXT_PUBLIC_GTM_ID` (set in Vercel dashboard)

## Deployment

The site auto-deploys via Vercel when changes are pushed to the connected git branch. The workflow is:
1. Edit content files
2. Run `npm run validate` to verify
3. Commit and push
4. Vercel builds and deploys automatically

## Do NOT Modify

Unless specifically asked, do not change:
- `src/lib/structured-data.ts` — SEO schema generators
- `src/components/Analytics.tsx` — GTM + tracking setup
- `src/middleware.ts` — Server-side visitor tracking
- `src/app/layout.tsx` — Root layout and global metadata
- Legal pages (`privacy`, `terms`, `cookie-policy`)
