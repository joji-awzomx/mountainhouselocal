import Link from 'next/link';

export default function NewsletterCTA() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Stay Connected with Mountain House
          </h2>
          <p className="mt-4 text-lg text-primary-50">
            Join our community newsletter and never miss out on the latest local news, events, and business updates from Mountain House.
          </p>

          {/* Newsletter Signup Form */}
          <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Subscribe
            </button>
          </form>

          {/* Link to full subscribe form */}
          <p className="mt-6 text-sm text-primary-100">
            Want more options?{' '}
            <Link
              href="/subscribe"
              className="underline transition-colors hover:text-white"
            >
              Visit our full subscription page
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
