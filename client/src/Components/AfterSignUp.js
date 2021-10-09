import React from 'react'
import { Link } from 'react-router-dom'


const AfterSignUp = () => {
  return (
    <div>
      <h2>Thanks For Signing Up!</h2>
      <h3>Check your email!</h3>
      <Link to="/login">Log In</Link>
    </div>
  )
}

export default AfterSignUp
