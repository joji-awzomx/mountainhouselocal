import type { Metadata } from 'next'
import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import { blogPosts, getFeaturedPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Stories & News',
}

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stories & News</h1>
          <p className="text-xl text-slate-200 mb-8">
            Discover what's happening in Mountain House
          </p>
          <div className="max-w-md">
            <SearchBar size="small" />
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-48 flex items-center justify-center">
                    <span className="text-white text-sm">Featured Image</span>
                  </div>
                  <div className="p-6">
                    <div className="inline-block mb-4">
                      <span className="bg-sage-100 text-sage-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div>
                        <span className="font-semibold">{post.author}</span>
                        {' • '}
                        <span>{post.read_time} min read</span>
                      </div>
                      <span>
                        {new Date(post.published_date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">All Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-slate-300 to-slate-400 h-40 flex items-center justify-center">
                  <span className="text-slate-700 text-xs">Featured Image</span>
                </div>
                <div className="p-5">
                  <div className="inline-block mb-3">
                    <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="text-xs text-gray-500">
                    <span>{post.author}</span>
                    {' • '}
                    <span>{post.read_time} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
