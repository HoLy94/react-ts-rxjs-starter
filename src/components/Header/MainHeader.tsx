import React from 'react';
import {useDispatch} from 'react-redux';
import {Box, Button, Typography} from '@material-ui/core';

// Actions
import {signOutAsync} from '../../modules/auth/store/actions';

const MainHeader = () => {
  const dispatch = useDispatch();

  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      px={2}
    >
      <Typography variant="h4" color="textPrimary">
        Main header
      </Typography>
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
