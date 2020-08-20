import React from 'react';
import {Link} from 'react-router-dom';
import {Paper, Typography} from '@material-ui/core';

// Constants
import {AppRoute} from '../../../../constants';
import {signUpFormConfig} from '../../constants';

// Components
import SignUpForm from '../../../../components/FormBuilder';

// HOCs
import withSignUp, {WithSignUpProps} from '../../hoc/withSignUp';

// Validation
import {signUpSchema} from '../../../../utils/validationSchemas';

// Styles
import useStyles from './style';

const SignUpFormPlate = (props: WithSignUpProps) => {
  const {signUp} = props;
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.container}>
      <Typography variant="h5" gutterBottom align="center">
        Sign up
      </Typography>
      <SignUpForm
        className={classes.form}
        validationSchema={signUpSchema}
        submitText="Sign up"
        fields={signUpFormConfig.fields}
        onSubmit={signUp}
        initialValues={signUpFormConfig.initialValues}
      />
      <div className={classes.footer}>
        <Typography variant="caption">Already have account?</Typography>
        <Link className={classes.footerLink} to={AppRoute.SignIn}>
          Sign in
        </Link>
      </div>
    </Paper>
  );
};

export default withSignUp(SignUpFormPlate);
