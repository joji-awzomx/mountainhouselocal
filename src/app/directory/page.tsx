import SearchBar from '@/components/SearchBar'
import BusinessCard from '@/components/BusinessCard'
import Link from 'next/link'
import { businesses, getCategoriesWithCounts } from '@/data/businesses'
import { slugify } from '../utils'

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

export default function DirectoryPage() {
  const categories = getCategoriesWithCounts()
  const sortedBusinesses = [...businesses].sort((a, b) => (b.priority_score || 0) - (a.priority_score || 0))

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-sand-50 to-sand-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Business Directory
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Explore all local businesses in Mountain House, California
          </p>
          <div className="max-w-md">
            <SearchBar size="small" />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/directory/category/${slugify(category.name)}`}
                className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300 p-6 text-center"
              >
                <div className="text-4xl mb-3">{categoryEmojis[category.name] || '📍'}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-2">
                  {category.count}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Listing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Businesses Grid */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                All Businesses ({sortedBusinesses.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedBusinesses.map((business) => (
                  <BusinessCard
                    key={business.slug}
                    business={business}
                    variant="default"
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-64 flex flex-col gap-8">
              {/* Own a Business CTA */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Own a Business?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get your business listed and featured in Mountain House Local.
                </p>
                <button className="w-full px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm">
                  Get Listed
                </button>
              </div>

              {/* Featured Categories */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quick Links
                </h3>
                <nav className="space-y-2">
                  {categories.slice(0, 6).map((category) => (
                    <Link
                      key={category.name}
                      href={`/directory/category/${slugify(category.name)}`}
                      className="block text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      {categoryEmojis[category.name]} {category.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
