import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Mountain House Local — how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-slate-300">Last updated: February 15, 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray max-w-none">
          <h2>Introduction</h2>
          <p>
            Mountain House Local (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website mountainhouselocal.com
            (the &quot;Site&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our Site. Please read this policy carefully.
          </p>

          <h2>Information We Collect</h2>

          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Newsletter Subscription:</strong> Email address, first name, last name, zip code, age group, and interests when you subscribe to our newsletter.</li>
            <li><strong>Contact Information:</strong> Name and email address when you contact us.</li>
            <li><strong>Business Listings:</strong> Business owners may provide business name, address, phone number, website, hours of operation, and other business details.</li>
          </ul>

          <h3>Server-Side Analytics (Collected Automatically)</h3>
          <p>
            When you visit our Site, our servers automatically collect certain technical information
            as part of standard web operations. This data is collected server-side by our hosting
            infrastructure (Vercel) and does not use cookies or client-side tracking scripts. This
            data is collected regardless of your cookie preferences because it is necessary for the
            operation, security, and improvement of our Site:
          </p>
          <ul>
            <li><strong>IP Address:</strong> Your Internet Protocol address, used for security, fraud prevention, and approximate geographic analysis. IP addresses are not stored long-term or linked to personal profiles.</li>
            <li><strong>Page Requests:</strong> The URLs of pages you visit on our Site, including the date and time of each request.</li>
            <li><strong>Referral Source:</strong> The URL of the website that referred you to our Site (e.g., a search engine or social media link).</li>
            <li><strong>Browser and Device Information:</strong> Your browser type, operating system, and device type as transmitted in the HTTP User-Agent header.</li>
            <li><strong>Approximate Location:</strong> City, region, and country derived from your IP address. We do not collect precise GPS-level location data.</li>
            <li><strong>Outbound Link Clicks:</strong> When you click a link to an external website (such as a local business website), we record the click and destination URL server-side for analytics purposes.</li>
          </ul>
          <p>
            This server-side data is stored in our hosting provider&apos;s log infrastructure and is used
            solely for aggregate analytics (e.g., which pages are most popular, which businesses receive
            the most interest), security monitoring, and Site improvement. It is not sold, shared with
            third parties for their own purposes, or used to build personal profiles.
          </p>

          <h3>Cookie-Based Analytics (Requires Your Consent)</h3>
          <p>
            With your consent, we use third-party analytics services that set cookies on your device.
            These services are only activated after you click &quot;Accept Cookies&quot; on our consent banner.
            If you decline or do not interact with the banner, these services remain disabled:
          </p>
          <ul>
            <li><strong>Google Analytics 4 (GA4):</strong> Collects information about how you interact with our Site, including pages visited, time spent on pages, scroll depth, click patterns, and traffic sources. Data is processed by Google. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</li>
            <li><strong>Microsoft Clarity:</strong> Records anonymized session replays and heatmaps to help us understand how visitors use our Site. Data is processed by Microsoft. <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer">Microsoft Privacy Statement</a>.</li>
            <li><strong>Advertising Cookies:</strong> We may use advertising networks that set cookies to measure ad effectiveness and deliver relevant ads. You can opt out at any time.</li>
          </ul>
          <p>
            All cookie-based analytics are managed through Google Tag Manager and respect your consent
            choice via Google Consent Mode v2. See our <Link href="/cookie-policy">Cookie Policy</Link> for
            full details on the cookies we use.
          </p>

          <h3>Information from Third Parties</h3>
          <ul>
            <li><strong>Advertising Partners:</strong> With your consent, we may receive information from advertising networks to measure ad effectiveness.</li>
            <li><strong>Analytics Providers:</strong> With your consent, Google Analytics and Microsoft Clarity provide aggregated usage data about Site interactions.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our Site and services</li>
            <li>To send you our newsletter and community updates (with your consent)</li>
            <li>To understand aggregate Site usage through server-side analytics (e.g., most-visited pages, popular business listings, geographic distribution of visitors)</li>
            <li>To improve our Site through cookie-based analytics and user behavior analysis (with your consent)</li>
            <li>To display relevant advertisements (with your consent)</li>
            <li>To communicate with you about inquiries or business listings</li>
            <li>To detect, prevent, and address security threats and technical issues</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Advertising</h2>
          <p>
            We may use third-party advertising companies (such as Google AdSense) to serve ads on our Site.
            These companies may use cookies and similar technologies to collect information about your visits
            to this and other websites to provide relevant advertisements. You can opt out of personalized
            advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>{' '}
            or the{' '}
            <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
              Network Advertising Initiative opt-out page
            </a>.
          </p>

          <h2>Sharing Your Information</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li><strong>Hosting Provider (Vercel):</strong> Our Site is hosted on Vercel, which processes server requests and provides the infrastructure for server-side analytics. Vercel acts as a data processor on our behalf. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.</li>
            <li><strong>Analytics Providers (with consent):</strong> Google (Analytics, Ads) and Microsoft (Clarity) receive data only when you accept cookies. These services are disabled by default.</li>
            <li><strong>Email Service Providers:</strong> If you subscribe to our newsletter, your email and subscriber information are shared with our email platform to deliver communications.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
          </ul>

          <h2>Your Cookie Choices</h2>
          <p>
            When you first visit our Site, a consent banner allows you to accept or decline cookie-based
            tracking. Your choices and their effects:
          </p>
          <ul>
            <li><strong>Accept Cookies:</strong> Google Analytics, Microsoft Clarity, and advertising cookies are activated. You receive the full site experience with personalized content.</li>
            <li><strong>Decline Cookies:</strong> All third-party analytics and advertising cookies remain disabled. No tracking cookies are set on your device. Server-side analytics (described above) continue to operate.</li>
            <li><strong>No Action (Banner Ignored):</strong> All third-party cookies remain disabled by default. The consent banner will continue to appear on subsequent visits until you make a choice.</li>
          </ul>
          <p>
            You can change your cookie preferences at any time by clearing your browser&apos;s local storage
            for mountainhouselocal.com and revisiting the Site. The consent banner will reappear.
          </p>

          <h2>Your California Privacy Rights (CCPA/CPRA)</h2>
          <p>
            If you are a California resident, you have the following rights under the California Consumer
            Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
          </p>
          <ul>
            <li><strong>Right to Know:</strong> You can request information about the categories and specific pieces of personal information we have collected about you, including server-side analytics data.</li>
            <li><strong>Right to Delete:</strong> You can request that we delete your personal information, subject to certain exceptions (such as data required for security or legal compliance).</li>
            <li><strong>Right to Opt-Out of Sale/Sharing:</strong> You can opt out of the sale or sharing of your personal information with third parties. We do not sell personal information. Third-party sharing (via analytics cookies) is controlled by our consent banner.</li>
            <li><strong>Right to Correct:</strong> You can request correction of inaccurate personal information we hold about you.</li>
            <li><strong>Right to Limit Use of Sensitive Information:</strong> We do not collect sensitive personal information as defined under CPRA.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
          </ul>
          <p>
            To exercise your rights, contact us at{' '}
            <a href="mailto:privacy@mountainhouselocal.com">privacy@mountainhouselocal.com</a>.
            We will respond to verifiable requests within 45 days.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your
            information. However, no method of transmission over the Internet or electronic storage
            is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes
            described in this policy, unless a longer retention period is required or permitted by law.
            Newsletter subscriber data is retained until you unsubscribe.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our Site is not intended for children under 13 years of age. We do not knowingly collect
            personal information from children under 13. If you believe we have collected information
            from a child under 13, please contact us immediately.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our Site contains links to third-party websites, including local business websites.
            We are not responsible for the privacy practices or content of these external sites.
            We encourage you to review their privacy policies.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your privacy rights,
            contact us at:
          </p>
          <ul>
            <li>Email: <a href="mailto:privacy@mountainhouselocal.com">privacy@mountainhouselocal.com</a></li>
            <li>General: <a href="mailto:hello@mountainhouselocal.com">hello@mountainhouselocal.com</a></li>
          </ul>
        </div>
      </section>
    </div>
  )
}
