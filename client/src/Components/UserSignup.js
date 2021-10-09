import React, {useState, useContext} from 'react'
import { UserContext } from "../Context/UserContext";
import { useHistory } from "react-router-dom";

const UserSignup = () => {

  const history = useHistory();
  
  const {attemptSignup} = useContext(UserContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleSignup = async () => {
    attemptSignup( email, userName, password)
      .then((successResults) => {
        console.log( 'handle sign up then results: ', successResults);
        if( successResults.success === true ){
          history.push('/signedup');
        }else{
          setUserName('');
          setPassword('');
          setEmail('');
          setSignupError(successResults.message);
        }
      });
  }

  return (
    <div>
      <h1>User Signup</h1>

      <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="text" placeholder="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
      <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      {/* <input type="password" placeholder="Confirm Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> */}
      <button onClick={handleSignup}>Sign Up</button>

      {signupError ? <h3>{signupError}</h3> : null}

    </div>
  )
}

export default UserSignup