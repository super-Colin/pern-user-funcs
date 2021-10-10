import React, { createContext, useState } from 'react';
import UserAuth from '../apis/UserAuth';
const crypto = require('crypto');


const UserContext = createContext();

const UserProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});



    
    const attemptLogin = async (email,  password) => {
      // Hash password on client side so we don't send password in plain text ever
      const hashedPw = hashPassword(password); 
      // console.log(hashedPw);
      // console.log('~~~~~~~~~~~~~~');
      try{
        const response = await UserAuth.post('login', {
          email: email,
          password: hashedPw
        })
        console.log(response);
        if(response.data.success === true){
          console.log('Login Successful');
          setIsLoggedIn(true);
          setUser(user);
        }
      }catch(err){console.log(err);}
    }



    const attemptSignup = async (email, user, password) => {
      return sendSignupRequest(email, user, hashPassword(password))
        .then((successResults) => {
          console.log( 'success result in context: ', successResults); 
          if(successResults.data.success === true){
            console.log('Signup Successful in context');
          }else{
            console.log('Signup Failed in context');
          }
          return successResults.data;

        })
    }

    const sendSignupRequest = async (email, user, hashedPassword) => {
        return await UserAuth.post('signup', {
          email: email,
          username: user,
          password: hashedPassword
        })
    }

    const hashPassword = (password) => {
      return crypto.createHash('sha256').update(password).digest('hex'); 
    }


    return (
      <UserContext.Provider value={{
        isLoggedIn,
        user,
        attemptLogin,
        attemptSignup
      }}>
        {props.children}
      </UserContext.Provider>
    )

}

export {UserContext, UserProvider}
