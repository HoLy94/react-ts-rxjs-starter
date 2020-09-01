import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';

// Constants
import {AppRoute} from '../../constants';

// Selectors
import {isAuthorizedSelector} from '../../../auth/store/selectors';

const UnAuthorizedRoute = (props: RouteProps) => {
  const {children, path, location, exact} = props;
  const isAuthorized = useSelector(isAuthorizedSelector);

  if (isAuthorized) {
    return (
      <Redirect
        to={{
          pathname: AppRoute.Home,
          state: {
            from: location,
          },
        }}
      />
    );
  }

  return (
    <Route path={path} location={location} exact={exact}>
      {children}
    </Route>
  );
};

export default UnAuthorizedRoute;
