import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../../constants';

type Props = {};

const SignInPage: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <div>
      <h2>Sing in page</h2>
      <Link to={AppRoute.SignUp}>Sign up</Link>
    </div>
  );
};

export default SignInPage;
