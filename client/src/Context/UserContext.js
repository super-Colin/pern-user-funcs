import React, { createContext, useState } from 'react';
import UserAuth from '../apis/UserAuth';
const crypto = require('crypto');


const UserContext = createContext();

const UserProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const attemptLogin = (user, password) => {
      // crypto.pbkdf2(password, user.salt, 100000, 64, 'sha512', (err, derivedKey) => {
      //   if (derivedKey.toString('hex') === user.password) {
      //     setIsLoggedIn(true);
      //     setUser(user);
      //   }
      // }
      const hashedPw = crypto.createHash('sha256').update(password).digest('hex');
      console.log(hashedPw);
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
