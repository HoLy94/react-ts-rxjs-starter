import React from 'react';
import {Switch} from 'react-router-dom';

// Constants
import {AppRoute} from '../constants';

// Components
import AuthorizedRoute from '../components/Route/AuthorizedRoute';
import UnAuthorizedRoute from '../components/Route/UnAuthorizedRoute';

// Pages
import SignInPage from './auth/pages/SignInPage';
import SignUpPage from './auth/pages/SignUpPage';
import MainPage from './main/pages/MainPage';

const App = () => (
  <>
    <Switch>
      <UnAuthorizedRoute path={AppRoute.SignIn}>
        <SignInPage />
      </UnAuthorizedRoute>
      <UnAuthorizedRoute path={AppRoute.SignUp}>
        <SignUpPage />
      </UnAuthorizedRoute>
      <AuthorizedRoute path={AppRoute.Home}>
        <MainPage />
      </AuthorizedRoute>
    </Switch>
  </>
);

export default App;
