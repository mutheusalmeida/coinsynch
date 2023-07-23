import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard main content</h1>

      <Link to='/analytics'>Go to Analytics</Link>
    </>
  )
}
