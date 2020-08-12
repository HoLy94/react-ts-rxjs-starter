import React from 'react';
import {Link} from 'react-router-dom';

// Constants
import {AppRoute} from '../../../../constants';

// HOCs
import withSignIn, {WithSignInProps} from '../../hoc/withSignIn';

type Props = WithSignInProps;

const SignInPage = (props: Props) => {
  const {} = props;

  return (
    <div>
      <h2>Sing in page</h2>
      <Link to={AppRoute.SignUp}>Sign up</Link>
    </div>
  );
};

export default withSignIn(SignInPage);
