import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Mountain House Local',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Mountain House Local</h1>
          <p className="text-xl text-slate-200">
            Connecting residents and businesses in Mountain House, CA
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mountain House Local is dedicated to helping residents connect with local businesses,
            discover community events, and stay informed about what's happening in our growing community.
            We believe in the power of community and want to make it easy for Mountain House residents
            to support local businesses and participate in neighborhood activities.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Mountain House was officially incorporated in July 2024 as California&apos;s 483rd city, located in San Joaquin County.
              With a population of over 30,000 residents and growing, Mountain House is one of the fastest-growing cities in Northern California.
            </p>
            <p>
              As Mountain House continues to develop and thrive, we recognized the need for a centralized resource
              that connects community members with local businesses, events, and news. Mountain House Local was created
              to fill that gap and serve as the go-to destination for everything happening in our community.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Business Directory</h3>
              <p className="text-gray-700">
                Discover local restaurants, shops, services, and professionals in Mountain House.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Community Stories</h3>
              <p className="text-gray-700">
                Read stories about local businesses, people, and what's new in our community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Events Calendar</h3>
              <p className="text-gray-700">
                Stay updated on upcoming community events, festivals, and celebrations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Newsletter</h3>
              <p className="text-gray-700">
                Subscribe to our newsletter for curated news and highlights delivered to your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Business Owners Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">For Business Owners</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Are you a business in Mountain House? We offer partnership tiers to help you reach
            local customers and grow your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Partnership Options
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-gray-700 mb-4">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <Link
                href="mailto:hello@mountainhouselocal.com"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                hello@mountainhouselocal.com
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-gray-700 mb-4">
                Subscribe to our newsletter for the latest Mountain House news, business spotlights, and community events.
              </p>
              <Link
                href="/subscribe"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Subscribe to Newsletter →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
