'use client'

import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

// Google Consent Mode v2 default — denies all storage until user accepts.
// This MUST run before GTM loads so tags respect consent from the start.
export function ConsentModeDefaults() {
  return (
    <Script id="consent-mode-defaults" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'functionality_storage': 'granted',
          'security_storage': 'granted',
          'wait_for_update': 500
        });
      `}
    </Script>
  )
}

// Google Tag Manager — single snippet replaces direct GA4 + Clarity scripts.
// All vendor tags (GA4, Clarity, Windsor, etc.) are managed in the GTM dashboard.
// GTM loads in restricted mode until consent is granted via ConsentModeDefaults above.
export function GoogleTagManager() {
  if (!GTM_ID) return null

  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  )
}

// GTM noscript fallback — place immediately after opening <body>
export function GoogleTagManagerNoscript() {
  if (!GTM_ID) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

// Send tracking event to our server-side API (captures IP/geo from Vercel headers)
function sendToServer(data: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  navigator.sendBeacon('/api/track', JSON.stringify(data))
}

// Push event to GTM dataLayer — GTM routes to GA4, BigQuery via sGTM, etc.
function pushToDataLayer(event: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push(event)
}

// Track outbound link clicks via GTM dataLayer + server beacon
export function trackOutboundClick(
  url: string,
  businessName?: string,
  category?: string,
) {
  if (typeof window === 'undefined') return

  // Send to our server API (captures IP, geo, ISP data)
  sendToServer({
    type: 'outbound_click',
    url,
    businessName: businessName || 'unknown',
    category: category || 'unknown',
    path: window.location.pathname,
  })

  // Push to GTM dataLayer (GTM routes to GA4, sGTM → BigQuery, etc.)
  pushToDataLayer({
    event: 'outbound_click',
    site_id: 'mountainhouselocal',
    outbound_url: url,
    business_name: businessName || 'unknown',
    business_category: category || 'unknown',
    page_path: window.location.pathname,
  })
}

// Track internal click events
export function trackClick(
  elementType: string,
  elementName: string,
  additionalData?: Record<string, string>,
) {
  if (typeof window === 'undefined') return

  // Send to our server API
  sendToServer({
    type: 'event',
    elementType,
    elementName,
    path: window.location.pathname,
    metadata: additionalData,
  })

  // Push to GTM dataLayer
  pushToDataLayer({
    event: 'click',
    site_id: 'mountainhouselocal',
    element_type: elementType,
    element_name: elementName,
    page_path: window.location.pathname,
    ...additionalData,
  })
}
