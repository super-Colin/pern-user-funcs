import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';


const Header = () => {
  const {isLoggedIn, userName, logOut} = useContext(UserContext)
  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
      <Link to="/">Home</Link>
      {isLoggedIn ? null : <Link to="/signup">Sign Up</Link>}
      {isLoggedIn ? null : <Link to="/login">Log In</Link>}
      {isLoggedIn ? <Link to="/" onClick={()=>{logOut()}}>Log Out</Link> : null}
      {isLoggedIn ? <span>{userName}</span> : null}
    </div>
  )
}

export default Header
