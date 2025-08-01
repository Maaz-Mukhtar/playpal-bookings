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
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Hello, {session.user?.name || session.user?.email}
        </span>
        <Button
          variant="outline"
          onClick={() => signOut()}
        >
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => signIn('google')}
      >
        Sign In with Google
      </Button>
      <Button
        onClick={() => signIn()}
      >
        Sign In
      </Button>
    </div>
  )
}