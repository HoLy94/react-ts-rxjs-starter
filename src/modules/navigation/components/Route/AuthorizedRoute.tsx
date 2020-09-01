import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';

// Constants
import {AppRoute} from '../../constants';

// Selectors
import {isAuthorizedSelector} from '../../../auth/store/selectors';

const AuthorizedRoute = (props: RouteProps) => {
  const {children, path, location, exact} = props;
  const isAuthorized = useSelector(isAuthorizedSelector);

  if (isAuthorized) {
    return (
      <Route path={path} location={location} exact={exact}>
        {children}
      </Route>
    );
  }

  return (
    <Redirect
      to={{
        pathname: AppRoute.SignIn,
        state: {
          from: location,
        },
      }}
    />
  );
};

export default AuthorizedRoute;
