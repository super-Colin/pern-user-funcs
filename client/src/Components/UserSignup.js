import React, {useState, useContext} from 'react'
import { UserContext } from "../Context/UserContext";
import { useHistory } from "react-router-dom";

const UserSignup = () => {

  const history = useHistory();
  
  const {attemptSignup} = useContext(UserContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if(password !== confirmationPassword){
      setSignupError("Passwords do not match");
      return;
    }
    attemptSignup( email, userName, password)
      .then((successResults) => {
        console.log( 'handle sign up then results: ', successResults);
        if( successResults.success === true ){
          history.push('/signedup');
        }else{
          setEmail('');
          setUserName('');
          setPassword('');
          setConfirmationPassword('');
          setSignupError(successResults.message);
        }
      });
  }

  return (
    <div>
      <h1>User Signup</h1>

      <form onSubmit={handleSignup}>
        <label>Email:
          <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </label><br />
        <label>User Name:
          <input type="text" placeholder="Username" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
        </label><br />
        <label>Password:
          <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </label><br />
        <label>Confirm Password:
          <input type="password" placeholder="Confirm Password" value={confirmationPassword} onChange={(e)=>{setConfirmationPassword(e.target.value)}} />
        </label><br />
        {/* <button onClick={handleSignup}>Sign Up</button> */}
        <input type='submit' value="Sign Up" />
      </form>

      {signupError ? <h3>{signupError}</h3> : null}

    </div>
  )
}

export default UserSignup