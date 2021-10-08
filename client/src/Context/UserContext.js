import React, { createContext, useState } from 'react';
import UserAuth from '../apis/UserAuthDev';
const crypto = require('crypto');


const UserContext = createContext();

const UserProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const attemptLogin = (user, password) => {
      // Hash password on client side so we don't send password in plain text ever
      const hashedPw = crypto.createHash('sha256').update(password).digest('hex'); 
      console.log(hashedPw);
      console.log('~~~~~~~~~~~~~~');
      try{
        const response = UserAuth.post('login', {
          username: user,
          password: hashedPw
        })
        console.log(response);
      }catch(err){
        console.log(err);
      }

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
