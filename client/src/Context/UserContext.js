import React, { createContext, useState } from 'react';
import UserAuth from '../apis/UserAuth';
const crypto = require('crypto');


const UserContext = createContext();

const UserProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const attemptLogin = async (user, password) => {
      // Hash password on client side so we don't send password in plain text ever
      const hashedPw = hashPassword(password); 
      console.log(hashedPw);
      console.log('~~~~~~~~~~~~~~');
      try{
        const response = await UserAuth.post('login', {
          username: user,
          password: hashedPw
        })
        console.log(response);
        if(response.data.success === true){
          console.log('Login Successful');
          setIsLoggedIn(true);
          setUser(user);
        }
      }catch(err){
        console.log(err);
      }
    }

    const attemptSignup = async (email, user, password) => {
      const hashedPw = hashPassword(password);
      try{
        const response = await UserAuth.post('signup', {
          email: email,
          username: user,
          password: hashedPw
        })
        console.log(response);
      }catch(err){console.log(err);}
    }

    const hashPassword = (password) => {
      return crypto.createHash('sha256').update(password).digest('hex'); 
    }


    return (
      <UserContext.Provider value={{
        isLoggedIn,
        user,
        attemptLogin
      }}>
        {props.children}
      </UserContext.Provider>
    )

}

export {UserContext, UserProvider}
