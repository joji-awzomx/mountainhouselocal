import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ConsentModeDefaults, GoogleTagManager, GoogleTagManagerNoscript } from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'
import { generateWebSiteSchema, generateOrganizationSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://mountainhouselocal.com'),
  title: {
    default: 'Mountain House Local | Your Community Guide to Mountain House, CA',
    template: '%s | Mountain House Local',
  },
  description: 'Discover the best local businesses, restaurants, events, and community stories in Mountain House, California. Your trusted neighborhood guide to Mountain House, CA 95391.',
  keywords: [
    'Mountain House',
    'Mountain House CA',
    'Mountain House California',
    'Mountain House local businesses',
    'Mountain House restaurants',
    'Mountain House events',
    'Mountain House community',
    'Mountain House directory',
    'Mountain House 95391',
    'San Joaquin County',
    'Central Valley',
    'local businesses Mountain House',
    'restaurants near Mountain House',
    'things to do Mountain House CA',
    'Mountain House dining',
    'Mountain House real estate',
    'Mountain House farmers market',
  ],
  authors: [{ name: 'Mountain House Local' }],
  creator: 'Mountain House Local',
  publisher: 'Mountain House Local',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mountainhouselocal.com',
    siteName: 'Mountain House Local',
    title: 'Mountain House Local | Your Community Guide to Mountain House, CA',
    description: 'Discover the best local businesses, restaurants, events, and community stories in Mountain House, California.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Mountain House Local - Community Guide to Mountain House, CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mountain House Local | Community Guide to Mountain House, CA',
    description: 'Discover local businesses, restaurants, events, and community stories in Mountain House, California.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mountainhouselocal.com',
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'local business directory',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = generateWebSiteSchema()
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mountainhouselocal.com" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Mountain House" />
        <meta name="geo.position" content="37.7621;-121.5583" />
        <meta name="ICBM" content="37.7621, -121.5583" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <ConsentModeDefaults />
        <GoogleTagManager />
        <GoogleTagManagerNoscript />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
