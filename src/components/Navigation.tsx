'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import SignInButton from './auth/SignInButton'

export default function Navigation() {
  const { data: session } = useSession()

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">PlayPal</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/venues" className="text-gray-600 hover:text-blue-600 transition-colors">
              Find Courts
            </Link>
            {session && (
              <>
                <Link href="/bookings" className="text-gray-600 hover:text-blue-600 transition-colors">
                  My Bookings
                </Link>
                <Link href="/profile" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Profile
                </Link>
              </>
            )}
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            <SignInButton />
          </div>
        </div>
      </div>
    </nav>
  )
}