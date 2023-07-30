import { UserContext } from '@/contexts/UserContext'
import type { UserType } from '@/resources/types'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../Router'

type RootProps = {
  user: UserType
}

export const Root = ({ user }: RootProps) => {
  return (
    <StrictMode>
      <UserContext.Provider value={{ user }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </StrictMode>
  )
}
