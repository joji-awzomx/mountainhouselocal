import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug } from '@/data/blog'
import MarkdownContent from '@/components/MarkdownContent'
import NewsletterCTA from '@/components/NewsletterCTA'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/structured-data'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Mountain House Community`,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      'Mountain House',
      'Mountain House CA',
      post.category,
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.published_date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.featured_image,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://mountainhouselocal.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3)

  const articleSchema = generateArticleSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium line-clamp-1">{post.title}</span>
        </nav>

        <div className="mb-6">
          <span className="inline-block bg-sage-100 text-sage-800 text-sm font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 border-b border-gray-200 pb-6">
          <div>
            <span className="font-semibold">{post.author}</span>
          </div>
          <span>•</span>
          <time dateTime={post.published_date}>
            {new Date(post.published_date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.read_time} min read</span>
        </div>

        {/* Featured Image */}
        <div className="my-10 bg-gradient-to-br from-primary-300 to-primary-500 h-96 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">Featured Image</span>
        </div>

        {/* Content */}
        <MarkdownContent
          content={post.content}
          className="prose prose-lg max-w-none mb-10 text-gray-700 leading-relaxed"
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">More Stories from Mountain House</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-sage-200 to-sand-200 h-40 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">Featured Image</span>
                  </div>
                  <div className="p-5">
                    <div className="inline-block mb-3">
                      <span className="bg-sage-100 text-sage-800 text-xs font-semibold px-2 py-1 rounded">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="text-xs text-gray-500">
                      <span>{relatedPost.author}</span>
                      {' • '}
                      <span>{relatedPost.read_time} min</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <NewsletterCTA />
        </div>
      </section>
    </div>
  )
}
