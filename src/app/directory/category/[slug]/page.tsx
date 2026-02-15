import Link from 'next/link'
import { getBusinessesByCategory, getCategoriesWithCounts } from '@/data/businesses'
import BusinessCard from '@/components/BusinessCard'
import { slugify } from '../../../utils'
import { generateItemListSchema, generateBreadcrumbSchema } from '@/lib/structured-data'

const categories = [
  'Restaurants & Dining', 'Cafes & Bakeries', 'Shopping & Retail', 'Real Estate',
  'Beauty & Spas', 'Fitness & Sports', 'Health & Wellness', 'Entertainment',
  'Education', 'Professional Services', 'Home & Garden', 'Automotive'
]

const categoryEmojis: Record<string, string> = {
  'Restaurants & Dining': '🍽️',
  'Cafes & Bakeries': '☕',
  'Shopping & Retail': '🛍️',
  'Real Estate': '🏠',
  'Beauty & Spas': '💇',
  'Fitness & Sports': '💪',
  'Health & Wellness': '🏥',
  'Entertainment': '🎬',
  'Education': '📚',
  'Professional Services': '🔧',
  'Home & Garden': '🏡',
  'Automotive': '🚗',
}

const categoryDescriptions: Record<string, string> = {
  'Restaurants & Dining': 'Find the best restaurants and dining experiences in Mountain House, CA. From American farm-to-table to authentic Mexican, Indian, and Middle Eastern cuisine — discover where Mountain House locals love to eat.',
  'Cafes & Bakeries': 'Discover coffee shops, bakeries, and boba tea spots in Mountain House, California. Perfect for your morning coffee, afternoon pick-me-up, or weekend treat.',
  'Shopping & Retail': 'Browse retail stores, grocery shops, and shopping destinations in Mountain House, CA. From everyday essentials to specialty goods.',
  'Real Estate': 'Find trusted real estate agents and property services in Mountain House, California. Whether buying, selling, or renting, find the right expert for Mountain House homes.',
  'Beauty & Spas': 'Hair salons, nail spas, and beauty services in Mountain House, CA. Look and feel your best with local professionals.',
  'Fitness & Sports': 'Gyms, fitness studios, and sports facilities in Mountain House, California. Stay active with local fitness options.',
  'Health & Wellness': 'Healthcare providers, medical offices, and wellness services in Mountain House, CA. Find trusted health professionals near you.',
  'Entertainment': 'Entertainment venues, recreation spots, and fun activities in Mountain House, California. Find things to do in Mountain House.',
  'Education': 'Schools, tutoring centers, and educational services in Mountain House, CA. Mountain House schools consistently rank among California\'s best.',
  'Professional Services': 'Professional and business services in Mountain House, California. Find local experts for accounting, legal, IT, and more.',
  'Home & Garden': 'Home improvement, landscaping, and gardening services in Mountain House, CA. Maintain and beautify your Mountain House home.',
  'Automotive': 'Auto repair shops, car dealerships, and automotive services in Mountain House, California. Keep your vehicle in top shape.',
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: slugify(category),
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const categoryName = categories.find((c) => slugify(c) === params.slug)

  return {
    title: categoryName
      ? `Best ${categoryName} in Mountain House, CA | Local Directory`
      : 'Category Not Found',
    description: categoryName
      ? categoryDescriptions[categoryName] || `Find the best ${categoryName.toLowerCase()} in Mountain House, California. Browse ratings, reviews, and contact information.`
      : undefined,
    keywords: categoryName ? [
      `${categoryName} Mountain House`,
      `${categoryName} Mountain House CA`,
      `best ${categoryName.toLowerCase()} Mountain House`,
      `${categoryName.toLowerCase()} near Mountain House`,
      'Mountain House CA',
      'Mountain House California',
    ] : undefined,
    alternates: {
      canonical: `https://mountainhouselocal.com/directory/category/${params.slug}`,
    },
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = categories.find((c) => slugify(c) === params.slug)

  if (!categoryName) {
    return (
      <main>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              The category you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/directory"
              className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Back to Directory
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const businesses = getBusinessesByCategory(categoryName)
  const allCategories = getCategoriesWithCounts()

  const itemListSchema = generateItemListSchema(businesses, categoryName)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Directory', url: '/directory' },
    { name: categoryName, url: `/directory/category/${params.slug}` },
  ])

  return (
    <main>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <span className="text-gray-900 font-medium">{categoryName}</span>
          </nav>

          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{categoryEmojis[categoryName] || '📍'}</span>
            <h1 className="text-4xl font-bold text-gray-900">
              {categoryName} in Mountain House, CA
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl">
            {categoryDescriptions[categoryName] || `Discover ${categoryName.toLowerCase()} businesses in Mountain House, California`}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              {businesses.length > 0 ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {businesses.length} {categoryName} Business{businesses.length !== 1 ? 'es' : ''} in Mountain House
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businesses.map((business) => (
                      <BusinessCard
                        key={business.slug}
                        business={business}
                        variant="default"
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <p className="text-xl text-gray-600 mb-4">
                    Coming Soon
                  </p>
                  <p className="text-gray-500">
                    There are no {categoryName.toLowerCase()} businesses listed yet. Check back soon or{' '}
                    <Link href="/about" className="text-primary-600 hover:text-primary-700 underline">
                      contact us
                    </Link>{' '}
                    to get listed!
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-64 flex flex-col gap-8">
              {/* Other Categories */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Other Categories
                </h3>
                <nav className="space-y-2">
                  {allCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/directory/category/${slugify(category.name)}`}
                      className={`block text-sm font-medium transition-colors px-3 py-2 rounded ${
                        category.name === categoryName
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-600 hover:text-primary-600'
                      }`}
                    >
                      {categoryEmojis[category.name]} {category.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Own a Business CTA */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Own a Business?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get your Mountain House business listed and featured in this category.
                </p>
                <Link
                  href="/about"
                  className="block w-full px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm text-center"
                >
                  Get Listed
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
