import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
    <>
      <h1>Dashboard header</h1>

      <Outlet />
    </>
  )
}
