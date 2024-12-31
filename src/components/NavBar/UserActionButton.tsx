
import Link from 'next/link'
import React from 'react'
import {authUserSession} from "@/app/services/auth-libs"

const UserActionButton = async () => {
  const user = await authUserSession()
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"
  return (
    <div className='flex gap-2 justify-between'>
      { user ? <Link href={'/users/dashboard'}>Dashboard</Link> : null }
      <Link href={actionUrl} className='' >{actionLabel}</Link>
    </div>
  )
}

export default UserActionButton