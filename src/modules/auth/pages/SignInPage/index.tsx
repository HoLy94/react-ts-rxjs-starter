import React from 'react';
import {Helmet} from 'react-helmet';
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
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <h2>Sing in page</h2>
      <Link to={AppRoute.SignUp}>Sign up</Link>
    </div>
  );
};

export default withSignIn(SignInPage);
