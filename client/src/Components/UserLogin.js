import React, {useState, useContext} from 'react'
import { UserContext } from "../Context/UserContext";

const UserLogin = () => {

  const { attemptLogin } = useContext(UserContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div>
      <h1>User Login</h1>
      <input type="text" placeholder="username" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={() => {
        attemptLogin(email, password);
        setEmail('');
        setPassword('');
        }}>Log In</button>
    </div>
  )
}

export default UserLogin
