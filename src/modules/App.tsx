import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../constants';
import SignInPage from './auth/pages/SignInPage';
import SignUpPage from './auth/pages/SignUpPage';
import HomePage from './home/pages/HomePage';

const App = () => (
  <div className="App">
    <Switch>
      <Route path={AppRoute.SignIn}>
        <SignInPage />
      </Route>
      <Route path={AppRoute.SignUp}>
        <SignUpPage />
      </Route>
      <Route path={AppRoute.Home}>
        <HomePage />
      </Route>
    </Switch>
  </div>
);

export default App;
