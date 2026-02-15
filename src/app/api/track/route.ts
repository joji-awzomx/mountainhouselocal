import { NextRequest, NextResponse } from 'next/server'

interface TrackEvent {
  type: 'outbound_click' | 'page_view' | 'event'
  url?: string
  businessName?: string
  category?: string
  path?: string
  elementType?: string
  elementName?: string
  metadata?: Record<string, string>
}

export async function POST(request: NextRequest) {
  try {
    const event: TrackEvent = await request.json()

    // Capture visitor info from Vercel headers
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const country = request.headers.get('x-vercel-ip-country') || ''
    const region = request.headers.get('x-vercel-ip-country-region') || ''
    const city = request.headers.get('x-vercel-ip-city') || ''
    const userAgent = request.headers.get('user-agent') || ''
    const referer = request.headers.get('referer') || ''

    // Structured log — Vercel Runtime Logs will capture this
    console.log(JSON.stringify({
      type: event.type,
      timestamp: new Date().toISOString(),
      ip,
      geo: { country, region, city: decodeURIComponent(city) },
      userAgent,
      referer,
      ...(event.url && { url: event.url }),
      ...(event.businessName && { businessName: event.businessName }),
      ...(event.category && { category: event.category }),
      ...(event.path && { path: event.path }),
      ...(event.elementType && { elementType: event.elementType }),
      ...(event.elementName && { elementName: event.elementName }),
      ...(event.metadata && { metadata: event.metadata }),
    }))

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
