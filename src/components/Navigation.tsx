'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import SignInButton from './auth/SignInButton'

export default function Navigation() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-lg font-bold text-gray-900">PlayPal</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
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

            {/* Desktop Auth Section */}
            <div className="hidden md:flex items-center">
              <SignInButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  href="/venues" 
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🎾 Find Courts
                </Link>
                {session && (
                  <>
                    <Link 
                      href="/bookings" 
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      📅 My Bookings
                    </Link>
                    <Link 
                      href="/profile" 
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      👤 Profile
                    </Link>
                  </>
                )}
                <div className="px-3 py-2">
                  <SignInButton />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Fixed */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-3 gap-1 p-2">
          <Link 
            href="/venues"
            className="flex flex-col items-center justify-center py-2 px-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="text-lg mb-1">🎾</div>
            <span>Find Courts</span>
          </Link>
          
          {session ? (
            <Link 
              href="/bookings"
              className="flex flex-col items-center justify-center py-2 px-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="text-lg mb-1">📅</div>
              <span>Bookings</span>
            </Link>
          ) : (
            <Link 
              href="/api/auth/signin"
              className="flex flex-col items-center justify-center py-2 px-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="text-lg mb-1">🔑</div>
              <span>Sign In</span>
            </Link>
          )}
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center justify-center py-2 px-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="text-lg mb-1">☰</div>
            <span>Menu</span>
          </button>
        </div>
      </div>
    </>
  )
}