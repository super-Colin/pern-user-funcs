import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Components/Header'


const Home = () => {

  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push("/" + e.target.name);
  }

  return (
    <div>
      <Header />
      <button name="signup" onClick={handleClick} >Sign Up</button>
      <button name="login" onClick={handleClick} >Log In</button>
    </div>
  )
}

export default Home
