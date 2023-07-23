import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('name')

  useEffect(() => {
    setName(`${count} 1`)
  }, [])

  return (
    <>
      <h1>Dashboard main content</h1>

      <Link to="/analytics">Go to Analytics</Link>
    </>
  )
}
