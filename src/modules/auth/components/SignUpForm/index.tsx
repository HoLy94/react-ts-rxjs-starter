import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

// Constants
import {AppRoute} from '../../../../constants';

// HOCs
import withSignUp, {WithSignUpProps} from '../../hoc/withSignUp';

type Props = WithSignUpProps;

const SignUpForm = (props: Props) => {
  const {signingUp} = props;

  return (
    <Paper elevation={2}>
      <Typography variant="h4" gutterBottom>
        Sign up form
      </Typography>
      <Link to={AppRoute.Home}>Home page</Link>
    </Paper>
  );
};

export default withSignUp(SignUpForm);
