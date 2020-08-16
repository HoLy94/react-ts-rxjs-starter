import React from 'react';
import {Link} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers';
import {useForm, Controller} from 'react-hook-form';
import {Paper, Typography, TextField, Button} from '@material-ui/core';

// Models
import {SignInCredentials} from '../../models';

// Constants
import {AppRoute} from '../../../../constants';

// HOCs
import withSignIn, {WithSignInProps} from '../../hoc/withSignIn';

// Validation
import {signInSchema} from '../../../../utils/validationSchemas';

// Styles
import useStyles from './style';

const SignInForm = (props: WithSignInProps) => {
  const {signIn} = props;
  const classes = useStyles();
  const {handleSubmit, errors, control} = useForm<SignInCredentials>({
    resolver: yupResolver(signInSchema),
    defaultValues: {email: '', password: ''},
  });

  return (
    <Paper elevation={2} className={classes.container}>
      <Typography variant="h5" gutterBottom align="center">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(signIn)}>
        <Controller
          as={TextField}
          name="email"
          control={control}
          label="Email"
          required
          margin="dense"
          error={Boolean(errors?.email)}
          helperText={errors?.email?.message}
        />
        <Controller
          as={TextField}
          name="password"
          control={control}
          label="Password"
          type="password"
          required
          margin="dense"
          error={Boolean(errors?.password)}
          helperText={errors?.password?.message}
        />
        <Button
          className={classes.submitButton}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
      </form>
      <div className={classes.footer}>
        <Typography variant="caption">Dont have account?</Typography>
        <Link className={classes.footerLink} to={AppRoute.SignUp}>
          Sign up
        </Link>
      </div>
    </Paper>
  );
};

export default withSignIn(SignInForm);
