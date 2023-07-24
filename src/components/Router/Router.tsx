import { DashboardLayout } from '@/layouts/DashboardLayout'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Analytics } from '../Analytics'
import { Dashboard } from '../Dashboard'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="analytics" element={<Analytics />} />
    </Route>
  ),
  { basename: '/dashboard' }
)
