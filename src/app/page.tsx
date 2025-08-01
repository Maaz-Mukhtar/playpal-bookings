import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Book Your Perfect
            <span className="text-blue-600"> Padel Court</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find and book padel courts instantly. Connect with players, discover venues, and never miss a game again.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/venues">
              <Button size="lg">
                Find Courts
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="outline" size="lg">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🎾
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
            <p className="text-gray-600">Book courts in real-time with instant confirmation and secure payments.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              📍
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Venues</h3>
            <p className="text-gray-600">Discover padel courts near you with detailed information and reviews.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              👥
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect Players</h3>
            <p className="text-gray-600">Find playing partners and join the padel community.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-gray-600 mb-6">Join thousands of players already using PlayPal Bookings</p>
          <Link href="/venues">
            <Button size="lg">
              Book Your First Court
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
