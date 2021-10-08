import React, {useState, useContext} from 'react'
import { UserContext } from "../Context/UserContext";

const UserLogin = () => {

  const { attemptLogin } = useContext(UserContext);
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div>
        <input type="text" placeholder="username" onChange={(e)=>{setUser(e)}} />
        <input type="text" placeholder="password" onChange={(e)=>{setPassword(e)}} />
        <button onClick={() => {
          attemptLogin(user, password)
        }}>Click me</button>
    </div>
  )
}

export default UserLogin