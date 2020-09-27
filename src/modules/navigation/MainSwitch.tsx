import React from 'react';
import {Switch} from 'react-router-dom';

// Constants
import {AppRoute} from './constants';

// Components
import {UnAuthorizedRoute, AuthorizedRoute} from './components/Route';

// Pages
import SignInPage from '../auth/sign-in';
import SignUpPage from '../auth/sign-up';
import MainPage from '../main';

const MainSwitch = () => (
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

export default MainSwitch;
