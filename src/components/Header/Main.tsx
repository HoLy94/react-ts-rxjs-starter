import React from 'react';
import {useDispatch} from 'react-redux';
import {Box, Button, Typography} from '@material-ui/core';

// Components
import {ThemeSwitch} from '../ThemeSwitch';

// Actions
import {signOutAsync} from '../../modules/auth/store/actions';

// Styles
import useStyles from './styles';

const Main = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSignOut = () => dispatch(signOutAsync.request());

  return (
    <Box className={classes.container__main} component="header">
      <Typography variant="h5">Main header</Typography>
      <ThemeSwitch />
      <Button color="secondary" size="small" onClick={handleSignOut}>
        Sign out
      </Button>
    </Box>
  );
};

export default Main;
