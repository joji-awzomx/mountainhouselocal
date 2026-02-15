import Link from 'next/link'
import { notFound } from 'next/navigation'
import { businesses, getBusinessBySlug, getBusinessesByCategory } from '@/data/businesses'
import BusinessCard from '@/components/BusinessCard'
import MarkdownContent from '@/components/MarkdownContent'
import StarRating from '@/components/StarRating'
import OutboundLink from '@/components/OutboundLink'
import { slugify } from '../../utils'
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data'

export function generateStaticParams() {
  return businesses.map((business) => ({
    slug: business.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const business = getBusinessBySlug(params.slug)

  if (!business) {
    return {
      title: 'Business Not Found',
    }
  }

  return {
    title: `${business.name} - ${business.category} in Mountain House, CA`,
    description: `${business.description} Visit ${business.name} in Mountain House, California. ${business.rating} stars · ${business.review_count} reviews.`,
    keywords: [
      business.name,
      `${business.name} Mountain House`,
      `${business.subcategory} Mountain House CA`,
      `${business.category} Mountain House`,
      'Mountain House CA',
      ...business.tags,
    ],
    openGraph: {
      title: `${business.name} | Mountain House Local`,
      description: business.description,
      type: 'website',
      url: `https://mountainhouselocal.com/directory/${business.slug}`,
    },
    alternates: {
      canonical: `https://mountainhouselocal.com/directory/${business.slug}`,
    },
  }
}

export default function BusinessPage({ params }: { params: { slug: string } }) {
  const business = getBusinessBySlug(params.slug)

  if (!business) {
    notFound()
  }

  const relatedBusinesses = getBusinessesByCategory(business.category)
    .filter((b) => b.slug !== business.slug)
    .slice(0, 3)

  const categoryEmojis: Record<string, string> = {
    'Restaurants': '🍽️',
    'Cafes': '☕',
    'Shopping': '🛍️',
    'Real Estate': '🏠',
    'Beauty': '💇',
    'Fitness': '💪',
    'Health': '🏥',
    'Entertainment': '🎬',
    'Education': '📚',
    'Services': '🔧',
    'Home & Garden': '🏡',
    'Automotive': '🚗',
  }

  const businessSchema = generateLocalBusinessSchema(business)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Directory', url: '/directory' },
    { name: business.category, url: `/directory/category/${slugify(business.category)}` },
    { name: business.name, url: `/directory/${business.slug}` },
  ])

  // Generate FAQ for this business (AEO)
  const businessFAQs = [
    {
      question: `Where is ${business.name} located?`,
      answer: `${business.name} is located at ${business.address}, ${business.city}, ${business.state} ${business.zip}.`,
    },
    {
      question: `What are the hours for ${business.name}?`,
      answer: business.hours
        ? Object.entries(business.hours).map(([day, hours]) => `${day}: ${hours}`).join('. ')
        : `Please contact ${business.name} directly for current hours.`,
    },
    {
      question: `What is the rating for ${business.name}?`,
      answer: `${business.name} has a rating of ${business.rating} out of 5 stars based on ${business.review_count} reviews.`,
    },
  ]
  if (business.phone) {
    businessFAQs.push({
      question: `What is the phone number for ${business.name}?`,
      answer: `You can reach ${business.name} at ${business.phone}.`,
    })
  }

  const faqSchema = generateFAQSchema(businessFAQs)

  return (
    <main>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-sand-50 to-sand-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/directory" className="hover:text-primary-600">
              Directory
            </Link>
            <span>/</span>
            <Link
              href={`/directory/category/${slugify(business.category)}`}
              className="hover:text-primary-600"
            >
              {business.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{business.name}</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {business.name}
              </h1>
              <p className="text-lg text-gray-700 mb-4">{business.tagline}</p>

              {/* Category and Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-900">
                  {categoryEmojis[business.category]} {business.category}
                </span>
                {business.verified && (
                  <span className="inline-block px-3 py-1 bg-sage-100 border border-sage-300 rounded-full text-sm font-semibold text-sage-900">
                    ✓ Verified
                  </span>
                )}
              </div>

              {/* Rating */}
              {business.rating > 0 && (
                <div className="flex items-center gap-2">
                  {business.subcategory.includes('School') || business.subcategory === 'School District' ? (
                    <>
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sage-600 text-white text-sm font-bold">
                        {business.rating}
                      </span>
                      <span className="text-sm text-gray-600">/10 GreatSchools Rating</span>
                      <a href="https://www.greatschools.org/california/mountain-house/" target="_blank" rel="noopener noreferrer" className="relative group">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-gray-500 text-xs font-bold cursor-help">i</span>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          Source: greatschools.org
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      <StarRating rating={business.rating} />
                      <span className="text-sm text-gray-600">
                        {business.rating.toFixed(1)} ({business.review_count || 0} reviews)
                      </span>
                      <span className="relative group">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-gray-500 text-xs font-bold cursor-help">i</span>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          Based on Google Reviews
                        </span>
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:w-full md:w-auto">
              {business.phone && (
                <a
                  href={`tel:${business.phone}`}
                  className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-center"
                >
                  Call Now
                </a>
              )}
              {business.website && (
                <OutboundLink
                  href={business.website}
                  businessName={business.name}
                  category={business.category}
                  className="inline-block px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-center"
                >
                  Visit Website
                </OutboundLink>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About */}
              {business.long_description && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {business.name}</h2>
                  <MarkdownContent
                    content={business.long_description}
                    className="text-gray-700 leading-relaxed"
                  />
                </div>
              )}

              {/* Amenities */}
              {business.amenities && business.amenities.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {business.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-xl">✓</span>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {business.tags && business.tags.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {business.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ for AEO */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {businessFAQs.map((faq, index) => (
                    <details
                      key={index}
                      className="group border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors font-medium text-gray-900">
                        {faq.question}
                        <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform text-sm">
                          ▼
                        </span>
                      </summary>
                      <div className="p-4 text-gray-700">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Info</h3>

                {/* Address */}
                {business.address && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 font-semibold mb-2">ADDRESS</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(`${business.name} ${business.address} ${business.city} ${business.state}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-primary-600 transition-colors"
                    >
                      {business.address}, {business.city}, {business.state} {business.zip}
                    </a>
                  </div>
                )}

                {/* Phone */}
                {business.phone && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 font-semibold mb-2">PHONE</p>
                    <a
                      href={`tel:${business.phone}`}
                      className="text-gray-900 hover:text-primary-600 transition-colors font-mono"
                    >
                      {business.phone}
                    </a>
                  </div>
                )}

                {/* Email */}
                {business.email && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 font-semibold mb-2">EMAIL</p>
                    <a
                      href={`mailto:${business.email}`}
                      className="text-gray-900 hover:text-primary-600 transition-colors break-all"
                    >
                      {business.email}
                    </a>
                  </div>
                )}

                {/* Website */}
                {business.website && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 font-semibold mb-2">WEBSITE</p>
                    <OutboundLink
                      href={business.website}
                      businessName={business.name}
                      category={business.category}
                      className="text-primary-600 hover:text-primary-700 transition-colors break-all"
                    >
                      Visit Website
                    </OutboundLink>
                  </div>
                )}

                {/* Hours */}
                {business.hours && (
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-3">HOURS</p>
                    <div className="space-y-1 text-sm text-gray-700">
                      {Object.entries(business.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="font-medium capitalize">{day}</span>
                          <span>{typeof hours === 'string' ? hours : 'Closed'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Businesses */}
      {relatedBusinesses.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More {business.category} in Mountain House, CA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBusinesses.map((b) => (
                <BusinessCard
                  key={b.slug}
                  business={b}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
