import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { UserProvider } from './Context/UserContext';

import Home from './Routes/Home';
import SignUp from './Routes/SignUp';
import SignedUp from './Routes/SignedUp';
import Login from './Routes/Login';



ReactDOM.render(
  <React.StrictMode>
    <UserProvider>

      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Home} />

          <Route path="/signup" component={SignUp} />
          
          <Route path="/signedup" component={SignedUp} />

          <Route path="/login" component={Login} />

        </Switch>
      </BrowserRouter>

    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

