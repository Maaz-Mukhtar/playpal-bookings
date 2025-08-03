import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8 sm:py-16 pb-20 md:pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Book Your Perfect
            <span className="text-blue-600"> Padel Court</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Find and book padel courts instantly. Connect with players, discover venues, and never miss a game again.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link href="/venues" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                🎾 Find Courts
              </Button>
            </Link>
            <Link href="/api/auth/signin" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                📱 Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🎾</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Instant Booking</h3>
            <p className="text-gray-600 text-sm sm:text-base">Book courts in real-time with instant confirmation and secure payments.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Find Venues</h3>
            <p className="text-gray-600 text-sm sm:text-base">Discover padel courts near you with detailed information and reviews.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Connect Players</h3>
            <p className="text-gray-600 text-sm sm:text-base">Find playing partners and join the padel community.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl p-6 sm:p-8 shadow-sm mx-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">Join thousands of players already using PlayPal Bookings</p>
          <Link href="/venues">
            <Button size="lg" className="w-full sm:w-auto">
              🚀 Book Your First Court
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
