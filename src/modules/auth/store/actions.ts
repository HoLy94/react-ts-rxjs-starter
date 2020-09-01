import {createAction, createAsyncAction} from 'typesafe-actions';

// Models
import {SignInCredentials, SignUpCredentials, User} from '../models';

export const signInAsync = createAsyncAction(
  '@@auth/SIGN_IN_REQUEST',
  '@@auth/SIGN_IN_SUCCEEDED',
  '@@auth/SIGN_IN_FAILED',
)<SignInCredentials, User, unknown>();
export const signUpAsync = createAsyncAction(
  '@@auth/SIGN_UP_REQUEST',
  '@@auth/SIGN_UP_SUCCEEDED',
  '@@auth/SIGN_UP_FAILED',
)<SignUpCredentials, undefined, unknown>();
export const signOutAsync = createAsyncAction(
  '@@auth/SIGN_OUT_REQUEST',
  '@@auth/SIGN_OUT_SUCCEEDED',
  '@@auth/SIGN_OUT_FAILED',
)<undefined, undefined, unknown>();
export const fetchCurrentUserAsync = createAsyncAction(
  '@@auth/FETCH_CURRENT_USER_REQUEST',
  '@@auth/FETCH_CURRENT_USER_SUCCEEDED',
  '@@auth/FETCH_CURRENT_USER_FAILED',
)<undefined, User, unknown>();
export const attemptSignIn = createAction('@@auth/ATTEMPT_SIGN_IN')();
export const attemptSignInFailed = createAction(
  '@@auth/ATTEMPT_SIGN_IN_FAILED',
)();
