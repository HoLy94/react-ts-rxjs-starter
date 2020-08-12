import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

// Constants
import {AppRoute} from '../../../../constants';

// HOCs
import withSignIn, {WithSignInProps} from '../../hoc/withSignIn';

type Props = WithSignInProps;

const SignInForm = (props: Props) => {
  const {signIn} = props;

  return (
    <Paper elevation={2}>
      <Typography variant="h4" gutterBottom>
        Sign in form
      </Typography>
      <Link to={AppRoute.SignUp}>Sign up</Link>
    </Paper>
  );
};

export default withSignIn(SignInForm);
