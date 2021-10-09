import React, {useState, useContext} from 'react'
import { UserContext } from "../Context/UserContext";
import { useHistory } from "react-router-dom";

const UserSignup = () => {

  const history = useHistory();
  
  const {attemptSignup} = useContext(UserContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    const result = attemptSignup(userName, email, password);
    history.push('/signedup');
  }

  return (
    <div>
      <h1>User Signup</h1>
      <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="text" placeholder="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
      <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}

export default UserSignup
