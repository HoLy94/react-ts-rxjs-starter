import {createAction, createAsyncAction} from 'typesafe-actions';
import {SignInCredentials, SignUpCredentials, User} from '../models';

export const signInAsync = createAsyncAction(
  '@@auth/SIGN_IN',
  '@@auth/SIGN_IN_SUCCEEDED',
  '@@auth/SIGN_IN_FAILED',
)<SignInCredentials, User, unknown>();
export const signUpAsync = createAsyncAction(
  '@@auth/SIGN_UP',
  '@@auth/SIGN_UP_SUCCEEDED',
  '@@auth/SIGN_UP_FAILED',
)<SignUpCredentials, undefined, unknown>();
export const signOutAsync = createAsyncAction(
  '@@auth/SIGN_OUT',
  '@@auth/SIGN_OUT_SUCCEEDED',
  '@@auth/SIGN_OUT_FAILED',
)<undefined, undefined, unknown>();

export const attemptSignIn = createAction('@@auth/ATTEMPT_SIGN_IN')();
