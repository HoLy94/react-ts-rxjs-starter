import React from 'react';
import {useDispatch} from 'react-redux';
import {Box, Button, Typography} from '@material-ui/core';

// Actions
import {signOutAsync} from '../../modules/auth/store/actions';

// Styles
import useStyles from './mainHeaderStyle';

const MainHeader = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Box className={classes.container} component="header">
      <Typography variant="h5">Main header</Typography>
      <Button
        color="secondary"
        size="small"
        onClick={() => dispatch(signOutAsync.request())}
      >
        Sign out
      </Button>
    </Box>
  );
};

export default MainHeader;
