import React from 'react';
import {Link} from 'react-router-dom';

// Constants
import {AppRoute} from '../../../constants';

type Props = {};

const HomePage = (props: Props) => {
  const {} = props;

  return (
    <div>
      <h2>Home page</h2>
      <Link to={AppRoute.SignIn}>Sign in</Link>
    </div>
  );
};

export default HomePage;
