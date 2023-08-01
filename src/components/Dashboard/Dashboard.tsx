import { useUser } from '@/contexts/UserContext'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  const { user } = useUser()

  return (
    <div className="flex flex-col p-6">
      <h1 className="mb-4">Welcome back, {user.name}</h1>

      <Link to="/analytics" className="w-max hover:underline">
        Go to Analytics
      </Link>
    </div>
  )
}
