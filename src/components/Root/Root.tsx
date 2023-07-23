import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../Router'

export const Root = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
