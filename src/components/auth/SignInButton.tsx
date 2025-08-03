'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/Button'

export default function SignInButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <Button disabled>Loading...</Button>
  }

  if (session) {
    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <span className="text-xs sm:text-sm text-gray-600 truncate max-w-32 sm:max-w-none">
          Hello, {session.user?.name || session.user?.email}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => signOut()}
          className="w-full sm:w-auto"
        >
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <Button
        variant="outline"
        size="sm"
        onClick={() => signIn('google')}
        className="w-full sm:w-auto text-xs sm:text-sm"
      >
        🔑 Sign In with Google
      </Button>
      <Button
        size="sm"
        onClick={() => signIn()}
        className="w-full sm:w-auto text-xs sm:text-sm"
      >
        📧 Sign In
      </Button>
    </div>
  )
}