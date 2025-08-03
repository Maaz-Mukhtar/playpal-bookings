'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { formatCurrency } from '@/lib/utils'

interface ContactInfo {
  phone?: string
  email?: string
  website?: string
}

interface Amenities {
  parking?: boolean
  showers?: boolean
  equipment_rental?: boolean
  cafe?: boolean
}

interface Court {
  id: string
  name: string
  courtType: string
  surfaceType: string | null
  hourlyRate: number
}

interface Venue {
  id: string
  name: string
  address: string
  contactInfo: ContactInfo | null
  amenities: Amenities | null
  courts: Court[]
}

async function getVenues(): Promise<Venue[]> {
  try {
    const response = await fetch('/api/venues')
    if (!response.ok) {
      throw new Error('Failed to fetch venues')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching venues:', error)
    return []
  }
}

export default function VenuesPage() {
  const [venues, setVenues] = useState<Venue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getVenues()
      .then(setVenues)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🎾</div>
          <p className="text-lg text-gray-600">Loading venues...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-lg text-gray-600 mb-4">Error loading venues: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Find Courts</h1>
          <p className="text-lg sm:text-xl text-gray-600">Discover and book padel courts near you</p>
        </div>

        {/* Venues Grid */}
        {venues.length > 0 ? (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {venues.map((venue) => (
              <div key={venue.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Venue Header */}
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{venue.name}</h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{venue.address}</p>
                  
                  {/* Courts Summary */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                      <span>🎾</span>
                      <span>{venue.courts.length} courts available</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  {venue.amenities && (
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Amenities:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {Object.entries(venue.amenities as Amenities).map(([key, value]) => (
                          value && (
                            <span 
                              key={key} 
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {key.replace('_', ' ')}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Courts List */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Courts:</h4>
                    <div className="space-y-2">
                      {venue.courts.map((court) => (
                        <div key={court.id} className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1 min-w-0">
                            <span className="text-sm sm:text-base font-medium">{court.name}</span>
                            <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2">({court.courtType})</span>
                          </div>
                          <span className="text-sm sm:text-base font-bold text-blue-600 ml-2">
                            {formatCurrency(Number(court.hourlyRate))}/hr
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  {venue.contactInfo && (
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Contact:</h4>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {(venue.contactInfo as ContactInfo).phone && (
                          <div>📞 {(venue.contactInfo as ContactInfo).phone}</div>
                        )}
                        {(venue.contactInfo as ContactInfo).email && (
                          <div>✉️ {(venue.contactInfo as ContactInfo).email}</div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Link 
                    href={`/venues/${venue.id}`}
                    className="block w-full bg-blue-600 text-white text-center py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Details & Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎾</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No venues found</h2>
            <p className="text-gray-600 mb-4">Check your database connection or add some venues.</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-yellow-800">
                <strong>Debug:</strong> Make sure your environment variables are set correctly in Vercel 
                and that the sample data was inserted into your Supabase database.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}