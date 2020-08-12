import React from 'react';
import {Link} from 'react-router-dom';

// Constants
import {AppRoute} from '../../../../constants';

// HOCs
import withSignUp, {WithSignUpProps} from '../../hoc/withSignUp';

type Props = WithSignUpProps;

const SignUpPage = (props: Props) => {
  const {} = props;

  return (
    <div>
      <h2>Sing up page</h2>
      <Link to={AppRoute.Home}>Home page</Link>
    </div>
  );
};

export default withSignUp(SignUpPage);
