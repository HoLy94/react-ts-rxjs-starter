import React from 'react';
import {Link} from 'react-router-dom';
import {Paper, Typography} from '@material-ui/core';

// Constants
import {AppRoute} from '../../../../constants';
import {signInFormConfig} from '../../constants';

// Components
import SignInForm from '../../../../components/FormBuilder';

// HOCs
import withSignIn, {WithSignInProps} from '../../hoc/withSignIn';

// Validation
import {signInSchema} from '../../../../utils/validationSchemas';

// Styles
import useStyles from './style';

const SignInFormPlate = (props: WithSignInProps) => {
  const {signIn} = props;
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.container}>
      <Typography variant="h5" gutterBottom align="center">
        Sign in
      </Typography>
      <SignInForm
        className={classes.form}
        onSubmit={signIn}
        fields={signInFormConfig.fields}
        initialValues={signInFormConfig.initialValues}
        submitText="Sign in"
        validationSchema={signInSchema}
      />
      <div className={classes.footer}>
        <Typography variant="caption">Dont have account?</Typography>
        <Link className={classes.footerLink} to={AppRoute.SignUp}>
          Sign up
        </Link>
      </div>
    </Paper>
  );
};

export default withSignIn(SignInFormPlate);
