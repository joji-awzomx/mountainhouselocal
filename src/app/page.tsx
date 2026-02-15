import SearchBar from '@/components/SearchBar'
import BusinessCard from '@/components/BusinessCard'
import NewsletterCTA from '@/components/NewsletterCTA'
import Link from 'next/link'
import { getFeaturedBusinesses, getCategoriesWithCounts } from '@/data/businesses'
import { getFeaturedPosts } from '@/data/blog'
import { slugify } from './utils'
import { generateFAQSchema } from '@/lib/structured-data'

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

const homepageFAQs = [
  {
    question: 'What is Mountain House Local?',
    answer: 'Mountain House Local is a free community directory and guide for Mountain House, California (ZIP 95391). We help residents discover local businesses, restaurants, events, and community news in Mountain House, CA.',
  },
  {
    question: 'Where is Mountain House, California?',
    answer: 'Mountain House is a city in San Joaquin County, California, located in the Central Valley. It is situated near Tracy and Livermore, approximately 60 miles east of San Francisco. Mountain House was officially incorporated as a city in July 2024.',
  },
  {
    question: 'What are the best restaurants in Mountain House, CA?',
    answer: 'Popular restaurants in Mountain House include Eight Acres Kitchen & Bar (American farm-to-table), Taqueria La Mexicana (authentic Mexican), Aappakadai Indian Chettinad (South Indian), Sourdough & Co (deli sandwiches), Fatt Catt Pizza, Tandoori Pizza (Indian-fusion), and Fremont Kabob Restaurant (Middle Eastern). Browse our full directory for all dining options.',
  },
  {
    question: 'How do I list my business on Mountain House Local?',
    answer: 'To get your Mountain House business listed, visit our directory page and click "Get Listed," or contact us at hello@mountainhouselocal.com. Listings are free for all Mountain House businesses.',
  },
  {
    question: 'What events happen in Mountain House?',
    answer: 'Mountain House hosts many community events including the weekly Farmers Market (every Sunday), Music in the Park, Kite Festival, Independence Day Parade, Movies Under the Stars, and National Night Out. Visit our Events page for the full calendar.',
  },
  {
    question: 'What neighborhoods are in Mountain House?',
    answer: 'Mountain House is organized into village-style neighborhoods including Wicklund, Bethany, Altamont, Questa, Hansen, Cordes, College Park, and the newest development — The Lakes (featuring Lakeshore, Lakeview, and Lakehaven sub-communities). Each village centers around a K-8 school and community parks.',
  },
]

export default function Home() {
  const featuredBusinesses = getFeaturedBusinesses()
  const categories = getCategoriesWithCounts()
  const blogPosts = getFeaturedPosts()
  const faqSchema = generateFAQSchema(homepageFAQs)

  return (
    <main>
      {/* FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-primary-50 via-sand-50 to-sand-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Discover Mountain House, CA
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Your guide to the best local businesses, restaurants, events, and stories in Mountain House, California — San Joaquin County&apos;s fastest-growing community.
          </p>
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar size="large" />
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Browse Local Businesses in Mountain House
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore restaurants, shops, services, and more in Mountain House, CA 95391
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/directory/category/${slugify(category.name)}`}
                className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="text-4xl mb-3">{categoryEmojis[category.name] || '📍'}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {category.count} {category.count === 1 ? 'business' : 'businesses'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Top-Rated Local Businesses in Mountain House
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover Mountain House&apos;s favorite restaurants, shops, and services — trusted by the community
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBusinesses.map((business, index) => (
              <BusinessCard
                key={business.slug}
                business={business}
                variant={index < 2 ? 'featured' : 'default'}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/directory"
              className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Businesses in Mountain House
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Latest from the Mountain House Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="flex flex-col rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-sage-200 to-sand-200 flex items-center justify-center">
                  <span className="text-4xl">📰</span>
                </div>

                <div className="flex-1 flex flex-col p-6">
                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-sage-100 text-sage-800 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{new Date(post.published_date).toLocaleDateString()}</span>
                    <span>{post.read_time || '5'} min read</span>
                  </div>

                  {/* Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mountain House by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">30,000+</div>
              <p className="text-lg opacity-90">Residents in Mountain House, CA</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">34+</div>
              <p className="text-lg opacity-90">Local Businesses & Schools Listed</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">Growing</div>
              <p className="text-lg opacity-90">Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions About Mountain House
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Everything you need to know about Mountain House, California
          </p>
          <div className="space-y-6">
            {homepageFAQs.map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-gray-900">
                  {faq.question}
                  <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="p-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <NewsletterCTA />
        </div>
      </section>
    </main>
  )
}
