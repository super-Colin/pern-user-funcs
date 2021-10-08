import React, {useState, useContext} from 'react'
import { UserContext } from "../Context/UserContext";

const UserLogin = () => {

  const { attemptLogin } = useContext(UserContext);
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div>
      <h1>User Login</h1>
      <input type="text" placeholder="username" onChange={(e)=>{setUser(e.target.value)}} />
      <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={() => {
        attemptLogin(user, password);
        setUser('');
        setPassword('');
        }}>Log In</button>
    </div>
  )
}

export default UserLogin
