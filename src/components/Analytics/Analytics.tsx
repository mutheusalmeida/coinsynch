import { Link } from 'react-router-dom'

export const Analytics = () => {
  return (
    <div className="flex flex-col p-6">
      <h1 className="mb-4">Analytics</h1>

      <Link to="/" className="w-max hover:underline">
        Go to Home
      </Link>
    </div>
  )
}
