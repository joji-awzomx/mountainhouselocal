import type { Metadata } from 'next'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Events & Happenings',
}

interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  category: 'Music' | 'Festival' | 'Celebration' | 'Parade' | 'Movies' | 'Community' | 'Market'
  free: boolean
}

const events: Event[] = [
  {
    id: '1',
    title: 'Music in the Park',
    date: 'Monthly - Jun, Jul, Aug 2026',
    location: 'Central Community Park',
    description: 'Enjoy live music performances under the stars. Family-friendly entertainment featuring local artists.',
    category: 'Music',
    free: true,
  },
  {
    id: '2',
    title: 'Mountain House Kite Festival',
    date: 'June 2026',
    location: 'Central Community Park',
    description: 'Bring your kites and enjoy a day of colorful skies. Games, contests, and prizes for all ages.',
    category: 'Festival',
    free: true,
  },
  {
    id: '3',
    title: 'Juneteenth Celebration',
    date: 'June 19, 2026',
    location: 'Central Community Park',
    description: 'Celebrate Juneteenth with food, music, and community. Learn about the significance of this important day.',
    category: 'Celebration',
    free: true,
  },
  {
    id: '4',
    title: 'Independence Day Parade',
    date: 'July 4, 2026',
    location: 'Central Parkway',
    description: 'Join the patriotic parade down Central Parkway. Floats, marching bands, and festive fun for the whole family.',
    category: 'Parade',
    free: true,
  },
  {
    id: '5',
    title: 'Movies Under the Stars',
    date: 'Monthly - Jun, Jul, Aug 2026',
    location: 'Central Community Park',
    description: 'Watch classic and family-favorite films outdoors. Bring blankets and enjoy a night of entertainment.',
    category: 'Movies',
    free: true,
  },
  {
    id: '6',
    title: 'National Night Out',
    date: 'August 2026',
    location: 'Community-wide',
    description: 'A community-wide event promoting neighborhood safety and connections. Block parties throughout Mountain House.',
    category: 'Community',
    free: true,
  },
  {
    id: '7',
    title: 'Mountain House Farmers Market',
    date: 'Every Sunday',
    location: 'Central Parkway',
    description: 'Fresh local produce, crafts, and artisan goods. Support local farmers and vendors.',
    category: 'Market',
    free: true,
  },
]

const categoryColors: Record<Event['category'], string> = {
  Music: 'border-l-4 border-purple-500',
  Festival: 'border-l-4 border-yellow-500',
  Celebration: 'border-l-4 border-red-500',
  Parade: 'border-l-4 border-blue-500',
  Movies: 'border-l-4 border-indigo-500',
  Community: 'border-l-4 border-sage-500',
  Market: 'border-l-4 border-orange-500',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Events & Happenings in Mountain House
          </h1>
          <p className="text-xl text-slate-200">
            Don't miss out on community events and celebrations
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 ${
                  categoryColors[event.category]
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="inline-block mb-3">
                      <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  </div>
                  {event.free && (
                    <span className="bg-sage-100 text-sage-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2">
                      Free Event
                    </span>
                  )}
                </div>

                <div className="mb-4 text-gray-600">
                  <div className="flex items-start mb-2">
                    <span className="text-blue-600 font-semibold mr-2">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to list your event?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Have an upcoming event in Mountain House? We'd love to help you spread the word to the community.
            Contact us to get your event featured on our events calendar.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Submit an Event
          </button>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <NewsletterCTA />
        </div>
      </section>
    </div>
  )
}
