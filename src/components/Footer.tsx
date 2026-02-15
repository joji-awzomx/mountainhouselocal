import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-lg font-bold">Mountain House Local</h2>
            <p className="mt-4 text-sm text-gray-200">
              Your trusted community guide to Mountain House, California. Discover local businesses, events, and stories that make our city special.
            </p>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h3 className="font-semibold">Discover</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/directory"
                  className="text-gray-200 transition-colors hover:text-white"
                >
                  Business Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-200 transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-200 transition-colors hover:text-white"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/subscribe"
                  className="text-gray-200 transition-colors hover:text-white"
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community */}
          <div>
            <h3 className="font-semibold">Community</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-200 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-200 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-200 transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-200 transition-colors hover:text-white"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h3 className="font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-200">
              Stay updated with the latest from Mountain House.
            </p>
            <form className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded px-3 py-2 text-gray-900"
                required
              />
              <button
                type="submit"
                className="rounded bg-primary-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-800 px-4 py-6 text-center text-sm text-gray-300 sm:px-6 lg:px-8">
        <p>&copy; {currentYear} Mountain House Local. All rights reserved.</p>
      </div>
    </footer>
  );
}
