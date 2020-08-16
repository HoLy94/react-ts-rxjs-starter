import React from 'react';
import {Link} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers';
import {useForm, Controller} from 'react-hook-form';
import {Paper, Typography, TextField, Button} from '@material-ui/core';

// Models
import {SignUpCredentials} from '../../models';

// Constants
import {AppRoute} from '../../../../constants';

// HOCs
import withSignUp, {WithSignUpProps} from '../../hoc/withSignUp';

// Validation
import {signUpSchema} from '../../../../utils/validationSchemas';

// Styles
import useStyles from './style';

const SignUpForm = (props: WithSignUpProps) => {
  const {signUp} = props;
  const classes = useStyles();
  const {handleSubmit, errors, control} = useForm<SignUpCredentials>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {email: '', password: '', confirm: ''},
  });

  return (
    <Paper elevation={2} className={classes.container}>
      <Typography variant="h5" gutterBottom align="center">
        Sign up
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(signUp)}>
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
          required
          margin="dense"
          error={Boolean(errors?.password)}
          helperText={errors?.password?.message}
        />
        <Controller
          as={TextField}
          name="confirm"
          control={control}
          label="Confirm password"
          required
          margin="dense"
          error={Boolean(errors?.confirm)}
          helperText={errors?.confirm?.message}
        />
        <Button
          className={classes.submitButton}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign up
        </Button>
      </form>
      <div className={classes.footer}>
        <Typography variant="caption">Already have account?</Typography>
        <Link className={classes.footerLink} to={AppRoute.SignIn}>
          Sign in
        </Link>
      </div>
    </Paper>
  );
};

export default withSignUp(SignUpForm);
