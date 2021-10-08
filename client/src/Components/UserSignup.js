import React, {useState, useContext} from 'react'
import { UserContext } from "../Context/UserContext";

const UserSignup = () => {

  const {attemptSignup} = useContext(UserContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div>
      <h1>User Signup</h1>
      <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="text" placeholder="username" onChange={(e)=>{setUserName(e.target.value)}} />
      <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={() => {
        attemptSignup(userName, email, password);
        setUserName('');
        setPassword('');
        }}>Sign Up</button>
    </div>
  )
}

export default UserSignup
