import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  const [count] = useState(0)
  const [, setName] = useState('name')

  useEffect(() => {
    setName(`${count} 1`)
  }, [count])

  return (
    <>
      <h1>Dashboard main content</h1>

      <Link to="/analytics">Go to Analytics</Link>
    </>
  )
}
