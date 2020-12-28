import React from 'react';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {clearServerError} from '../../modules/common/store/actions';

// Selectors
import {serverErrorSelector} from '../../modules/common/store/selectors';

// Models
import {ErrorResponseType} from '../../modules/common/models';

const ServerErrorMessage = () => {
  const dispatch = useDispatch();
  const serverError = useSelector(serverErrorSelector) as ErrorResponseType;

  const handleClose = () => {
    dispatch(clearServerError());
  };

  const getErrorText = () => {
    if (serverError === null) {
      return '';
    }
    const {message} = serverError;

    if (message) {
      return <span>{message}</span>;
    }

    return <span>Oops something wrong, try again later!</span>;
  };

  return (
    <Snackbar
      open={serverError !== null}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <MuiAlert
        onClose={handleClose}
        elevation={6}
        severity="error"
        variant="filled"
      >
        {getErrorText()}
      </MuiAlert>
    </Snackbar>
  );
};

export default ServerErrorMessage;
