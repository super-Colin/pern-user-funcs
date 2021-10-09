import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  )
}

export default Header
