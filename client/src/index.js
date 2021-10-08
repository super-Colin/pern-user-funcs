import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { UserProvider } from './Context/UserContext';

import SignUp from './Routes/SignUp';
import Login from './Routes/Login';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>

      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={App} />

          <Route path="/signup" component={SignUp} />

          <Route path="/login" component={Login} />

        </Switch>
      </BrowserRouter>

    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

