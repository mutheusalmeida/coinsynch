import type { UserType } from '@/resources/types'
import { createContext, useContext } from 'react'

type UserContextType = {
  user: UserType
}

export const UserContext = createContext({} as UserContextType)

export const useUser = () => useContext(UserContext)
