import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
    <div className="grid min-h-full grid-rows-[auto_1fr_auto]">
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}
