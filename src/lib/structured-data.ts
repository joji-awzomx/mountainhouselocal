import { Business } from '@/data/businesses'
import { BlogPost } from '@/data/blog'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mountainhouselocal.com'
const SITE_NAME = 'Mountain House Local'

// WebSite schema for homepage
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Discover the best local businesses, restaurants, events, and community stories in Mountain House, California.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/directory?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mountain House',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  }
}

// Organization schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: 'Your trusted community guide to Mountain House, California. Discover local businesses, events, and stories.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mountain House',
      addressRegion: 'CA',
      postalCode: '95391',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@mountainhouselocal.com',
      contactType: 'customer service',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mountain House',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    sameAs: [],
  }
}

// LocalBusiness schema for individual business pages
export function generateLocalBusinessSchema(business: Business) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': getSchemaType(business.category),
    name: business.name,
    description: business.description,
    url: `${SITE_URL}/directory/${business.slug}`,
    telephone: business.phone || undefined,
    email: business.email || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7621,
      longitude: -121.5583,
    },
    priceRange: business.price_range,
    aggregateRating: business.rating ? {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      reviewCount: business.review_count,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
    areaServed: {
      '@type': 'City',
      name: 'Mountain House',
      addressRegion: 'CA',
    },
  }

  if (business.website) {
    schema.sameAs = [business.website]
  }

  if (business.hours && Object.keys(business.hours).length > 0) {
    schema.openingHoursSpecification = generateOpeningHours(business.hours)
  }

  if (business.image) {
    schema.image = `${SITE_URL}${business.image}`
  }

  return schema
}

// Article schema for blog posts
export function generateArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.published_date,
    dateModified: post.published_date,
    author: {
      '@type': 'Organization',
      name: post.author || SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    image: post.featured_image ? `${SITE_URL}${post.featured_image}` : undefined,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.content.split(/\s+/).length,
    about: {
      '@type': 'City',
      name: 'Mountain House',
      addressRegion: 'CA',
    },
  }
}

// BreadcrumbList schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

// FAQPage schema for AEO
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ItemList schema for directory/category pages
export function generateItemListSchema(businesses: Business[], categoryName?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: categoryName
      ? `Best ${categoryName} in Mountain House, CA`
      : 'Local Businesses in Mountain House, CA',
    description: categoryName
      ? `Find the best ${categoryName.toLowerCase()} in Mountain House, California`
      : 'Complete directory of local businesses in Mountain House, California',
    numberOfItems: businesses.length,
    itemListElement: businesses.map((business, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: business.name,
      url: `${SITE_URL}/directory/${business.slug}`,
    })),
  }
}

// Event schema
export function generateEventSchema(event: {
  title: string
  date: string
  location: string
  description: string
  free: boolean
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mountain House',
        addressRegion: 'CA',
        postalCode: '95391',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    isAccessibleForFree: event.free,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  }
}

// Helper: Map business categories to Schema.org types
function getSchemaType(category: string): string {
  const typeMap: Record<string, string> = {
    'Restaurants & Dining': 'Restaurant',
    'Cafes & Bakeries': 'CafeOrCoffeeShop',
    'Shopping & Retail': 'Store',
    'Real Estate': 'RealEstateAgent',
    'Beauty & Spas': 'BeautySalon',
    'Health & Wellness': 'MedicalBusiness',
    'Fitness & Sports': 'SportsActivityLocation',
    'Education': 'EducationalOrganization',
    'Home & Garden': 'HomeAndConstructionBusiness',
    'Entertainment': 'EntertainmentBusiness',
    'Professional Services': 'ProfessionalService',
    'Automotive': 'AutoRepair',
  }
  return typeMap[category] || 'LocalBusiness'
}

// Helper: Convert business hours to Schema.org format
function generateOpeningHours(hours: Record<string, string>) {
  const dayMap: Record<string, string> = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  }

  return Object.entries(hours)
    .filter(([, value]) => value && value.toLowerCase() !== 'closed')
    .map(([day, value]) => {
      const timeMatch = value.match(/(\d{1,2}:\d{2}\s*[AP]M)\s*-\s*(\d{1,2}:\d{2}\s*[AP]M)/i)
      if (!timeMatch || !dayMap[day]) return null

      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[day],
        opens: convertTo24Hour(timeMatch[1]),
        closes: convertTo24Hour(timeMatch[2]),
      }
    })
    .filter(Boolean)
}

function convertTo24Hour(time12h: string): string {
  const [time, modifier] = time12h.trim().split(/\s+/)
  const parts = time.split(':')
  let hours = parseInt(parts[0], 10)
  const minutes = parts[1]

  if (modifier?.toUpperCase() === 'PM' && hours !== 12) {
    hours += 12
  }
  if (modifier?.toUpperCase() === 'AM' && hours === 12) {
    hours = 0
  }

  return `${hours.toString().padStart(2, '0')}:${minutes}`
}
