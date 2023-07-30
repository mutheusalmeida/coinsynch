import { useUser } from '@/contexts/UserContext'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  const { user } = useUser()

  return (
    <>
      <h1>Welcome back, {user.name}</h1>

      <Link to="/analytics">Go to Analytics</Link>
    </>
  )
}
