'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_CONSENT_KEY = 'mhl_cookie_consent'

type ConsentStatus = 'accepted' | 'declined' | null

function updateConsent(granted: boolean) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({
    event: 'consent_update',
    // gtag consent update via dataLayer
  })

  // Use gtag function (defined by ConsentModeDefaults script)
  const win = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (win.gtag) {
    win.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
    })
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (stored === 'accepted') {
      setConsent('accepted')
      // Restore consent for returning users who previously accepted
      updateConsent(true)
    } else if (stored === 'declined') {
      setConsent('declined')
    } else {
      // No decision yet — consent remains denied (set by ConsentModeDefaults)
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
    updateConsent(true)
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined')
    setConsent('declined')
    setVisible(false)
    updateConsent(false)
  }

  if (consent || !visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end animate-slide-up">
      {/* Dark overlay — dims the page behind */}
      <div className="flex-1 bg-black/40" />

      {/* Consent panel — takes up 50% of viewport from bottom */}
      <div className="bg-white rounded-t-3xl shadow-[0_-8px_40px_rgba(0,0,0,0.2)] min-h-[50vh] flex flex-col">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 py-6 sm:py-8 flex flex-col flex-1 justify-center items-center text-center">
          {/* Cookie icon */}
          <span className="text-5xl mb-4">🍪</span>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            We value your privacy
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 mb-3 max-w-lg leading-relaxed">
            We use cookies to understand how visitors use Mountain House Local so we can improve
            the experience for our community. Your data is never sold to third parties.
          </p>

          <p className="text-xs sm:text-sm text-gray-500 mb-6 max-w-md">
            By accepting, you help us make this site better for Mountain House residents.
            You can change your mind anytime.{' '}
            <Link href="/privacy" className="text-primary-600 underline hover:text-primary-700">
              Privacy Policy
            </Link>{' '}
            &middot;{' '}
            <Link href="/cookie-policy" className="text-primary-600 underline hover:text-primary-700">
              Cookie Policy
            </Link>
          </p>

          {/* Accept button — large, full-width on mobile */}
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-14 py-4 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 active:bg-primary-800 transition-colors shadow-lg mb-4"
          >
            Accept All Cookies
          </button>

          {/* Decline — text link, visible but secondary */}
          <button
            onClick={handleDecline}
            className="px-6 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
          >
            Decline optional cookies
          </button>
        </div>
      </div>
    </div>
  )
}
