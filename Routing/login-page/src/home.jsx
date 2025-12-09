import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
    const location=useLocation();
    const user=location.state?.data
  return (
    <div><h2>Hello, {user}</h2></div>
  )
}

export default Home