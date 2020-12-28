import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Constants
import {AppRoute} from './constants';

// Components
import {UnAuthorizedRoute, AuthorizedRoute} from './components/Route';

// Pages
import SignInPage from '../auth/sign-in';
import SignUpPage from '../auth/sign-up';
import MainPage from '../main';
import NotFoundPage from '../common/404';

const MainSwitch = () => (
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
    <Route>
      <NotFoundPage />
    </Route>
  </Switch>
);

export default MainSwitch;
