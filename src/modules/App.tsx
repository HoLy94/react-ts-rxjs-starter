import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Constants
import {AppRoute} from '../constants';

// Components
import PrivateRoute from '../components/PrivateRoute';

// Pages
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
      <PrivateRoute path={AppRoute.Home}>
        <HomePage />
      </PrivateRoute>
    </Switch>
  </div>
);

export default App;
