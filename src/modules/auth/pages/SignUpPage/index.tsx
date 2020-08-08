import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../../constants';

type Props = {};

const SignUpPage: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <div>
      <h2>Sing up page</h2>
      <Link to={AppRoute.Home}>Home page</Link>
    </div>
  );
};

export default SignUpPage;
