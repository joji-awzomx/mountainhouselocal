import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Mountain House Local website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-slate-300">Last updated: February 15, 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Mountain House Local (mountainhouselocal.com), you accept and agree
            to be bound by these Terms of Service. If you do not agree to these terms, please do not
            use our website.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Mountain House Local is a community directory and information platform serving Mountain House,
            California. We provide local business listings, community news, event information, and
            neighborhood guides. Our services are provided &quot;as is&quot; and &quot;as available.&quot;
          </p>

          <h2>3. User Conduct</h2>
          <p>When using our Site, you agree not to:</p>
          <ul>
            <li>Use the Site for any unlawful purpose or in violation of any applicable laws</li>
            <li>Submit false, misleading, or inaccurate information</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Interfere with or disrupt the Site or its servers</li>
            <li>Scrape, crawl, or collect data from the Site for commercial purposes without permission</li>
            <li>Post or transmit any harmful, threatening, or offensive content</li>
          </ul>

          <h2>4. Business Listings</h2>
          <p>
            Business information displayed on our Site is provided for informational purposes only.
            While we strive to keep listings accurate and up-to-date:
          </p>
          <ul>
            <li>We do not guarantee the accuracy, completeness, or timeliness of any business listing</li>
            <li>Business hours, prices, and services may change without notice</li>
            <li>Ratings and reviews represent user opinions and do not constitute endorsements</li>
            <li>We are not responsible for the products, services, or conduct of listed businesses</li>
          </ul>
          <p>
            Business owners are responsible for the accuracy of information they provide. To update
            or correct a listing, contact us at hello@mountainhouselocal.com.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on Mountain House Local, including text, graphics, logos, images, and software,
            is the property of Mountain House Local or its content suppliers and is protected by
            copyright and intellectual property laws. You may not reproduce, distribute, modify, or
            create derivative works from our content without prior written consent.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our Site contains links to third-party websites, including business websites, social media
            pages, and mapping services. These links are provided for convenience only. We do not
            endorse, control, or assume responsibility for the content, privacy policies, or practices
            of any third-party sites. You access third-party sites at your own risk.
          </p>

          <h2>7. Newsletter and Communications</h2>
          <p>
            By subscribing to our newsletter, you consent to receive periodic emails about local
            businesses, events, and community news. You may unsubscribe at any time using the link
            provided in each email.
          </p>

          <h2>8. Advertising</h2>
          <p>
            Our Site may display advertisements from third-party advertising networks. We are not
            responsible for the content of third-party advertisements or the products and services
            they promote. Featured and sponsored listings are marked as such and represent paid
            partnerships with local businesses.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
            WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR
            OTHER HARMFUL COMPONENTS.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, MOUNTAIN HOUSE LOCAL SHALL NOT BE LIABLE FOR
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF
            OR RELATED TO YOUR USE OF THE SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR
            ANY OTHER LEGAL THEORY.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Mountain House Local, its officers, directors,
            employees, and agents from any claims, liabilities, damages, losses, or expenses arising
            from your use of the Site or violation of these Terms.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective upon
            posting to the Site. Your continued use of the Site after changes constitutes acceptance
            of the modified Terms.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State
            of California, without regard to its conflict of law provisions. Any disputes shall be
            resolved in the courts of San Joaquin County, California.
          </p>

          <h2>14. Contact</h2>
          <p>
            For questions about these Terms of Service, contact us at:{' '}
            <a href="mailto:hello@mountainhouselocal.com">hello@mountainhouselocal.com</a>
          </p>
        </div>
      </section>
    </div>
  )
}
