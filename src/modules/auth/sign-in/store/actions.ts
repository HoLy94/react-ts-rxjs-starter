import {createAction, createAsyncAction} from 'typesafe-actions';

// Models
import {SignInCredentials} from '../models';

export const signInAsync = createAsyncAction(
  '@@sign-in/SIGN_IN_REQUEST',
  '@@sign-in/SIGN_IN_SUCCEEDED',
  '@@sign-in/SIGN_IN_FAILED',
)<SignInCredentials, undefined, unknown>();
export const attemptSignIn = createAction('@@sign-in/ATTEMPT_SIGN_IN')();
export const attemptSignInFailed = createAction(
  '@@sign-in/ATTEMPT_SIGN_IN_FAILED',
)();
