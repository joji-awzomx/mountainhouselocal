import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Mountain House Local — how we use cookies and tracking technologies.',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-slate-300">Last updated: February 15, 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray max-w-none">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            websites remember your preferences, understand how you use the site, and serve relevant
            content and advertisements.
          </p>

          <h2>How We Use Cookies</h2>
          <p>Mountain House Local uses the following types of cookies:</p>

          <h3>Essential Cookies</h3>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>mhl_cookie_consent</td>
                <td>Stores your cookie consent preference</td>
                <td>Persistent (localStorage)</td>
              </tr>
            </tbody>
          </table>
          <p>
            These cookies are necessary for the Site to function and cannot be switched off.
          </p>

          <h3>Analytics Cookies</h3>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga, _ga_*</td>
                <td>Google Analytics</td>
                <td>Track page views, user interactions, traffic sources, and approximate geographic location</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_clck, _clsk</td>
                <td>Microsoft Clarity</td>
                <td>Record user interactions (clicks, scrolls, mouse movements) to create heatmaps and session recordings</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>
          <p>
            Analytics cookies help us understand how visitors interact with our Site so we can
            improve the user experience. Data collected includes:
          </p>
          <ul>
            <li>Pages visited and time spent on each page</li>
            <li>How you arrived at our Site (search engine, direct, referral)</li>
            <li>Device type, browser, and operating system</li>
            <li>Approximate geographic location (city/region level)</li>
            <li>Click patterns and scroll behavior</li>
            <li>Outbound link clicks (which business websites you visit)</li>
          </ul>

          <h3>Advertising Cookies</h3>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Various</td>
                <td>Google Ads / AdSense</td>
                <td>Serve relevant advertisements and measure ad performance</td>
                <td>Varies</td>
              </tr>
            </tbody>
          </table>
          <p>
            Advertising cookies are used to display relevant ads and track ad campaign effectiveness.
            These cookies may track your browsing activity across multiple websites.
          </p>

          <h2>Your Cookie Choices</h2>
          <p>You have several options for managing cookies:</p>
          <ul>
            <li>
              <strong>Consent Banner:</strong> When you first visit our Site, you can accept or
              decline non-essential cookies via the consent banner.
            </li>
            <li>
              <strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies
              through their settings. Note that blocking cookies may affect your experience on our Site.
            </li>
            <li>
              <strong>Google Ads Opt-Out:</strong> Visit{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>{' '}
              to opt out of personalized advertising.
            </li>
            <li>
              <strong>NAI Opt-Out:</strong> Visit the{' '}
              <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
                Network Advertising Initiative opt-out page
              </a>.
            </li>
          </ul>

          <h2>California Residents</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), California residents have the right
            to opt out of the sale of their personal information. We do not sell personal information
            collected through cookies. For more details, see our{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Changes will be posted on this page
            with an updated &quot;Last updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about our use of cookies, contact us at{' '}
            <a href="mailto:privacy@mountainhouselocal.com">privacy@mountainhouselocal.com</a>.
          </p>
        </div>
      </section>
    </div>
  )
}
