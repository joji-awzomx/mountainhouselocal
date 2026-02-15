import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Vercel provides geo/IP data through headers at the edge
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const country = request.headers.get('x-vercel-ip-country') || ''
  const region = request.headers.get('x-vercel-ip-country-region') || ''
  const city = request.headers.get('x-vercel-ip-city') || ''
  const latitude = request.headers.get('x-vercel-ip-latitude') || ''
  const longitude = request.headers.get('x-vercel-ip-longitude') || ''
  const timezone = request.headers.get('x-vercel-ip-timezone') || ''

  // Pass visitor data to the page via headers (accessible in server components)
  response.headers.set('x-visitor-ip', ip)
  response.headers.set('x-visitor-country', country)
  response.headers.set('x-visitor-region', region)
  response.headers.set('x-visitor-city', decodeURIComponent(city))
  response.headers.set('x-visitor-lat', latitude)
  response.headers.set('x-visitor-lng', longitude)
  response.headers.set('x-visitor-timezone', timezone)

  // Log visitor data server-side (Vercel captures console.log in runtime logs)
  if (!request.nextUrl.pathname.startsWith('/api/') &&
      !request.nextUrl.pathname.startsWith('/_next/') &&
      !request.nextUrl.pathname.includes('.')) {
    console.log(JSON.stringify({
      type: 'page_view',
      timestamp: new Date().toISOString(),
      path: request.nextUrl.pathname,
      ip,
      geo: { country, region, city, latitude, longitude, timezone },
      userAgent: request.headers.get('user-agent') || '',
      referer: request.headers.get('referer') || '',
    }))
  }

  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes we want to skip
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
}
