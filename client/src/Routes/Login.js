import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Components/Header'
import UserLogin from '../Components/UserLogin'

const Login = () => {
  return (
    <div>
      <Header />
      <UserLogin />
      <span>Not a member yet? <Link to="/signup">Sign Up!</Link> </span>
    </div>
  )
}

export default Login
