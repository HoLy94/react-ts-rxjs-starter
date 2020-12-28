import {createAsyncAction} from 'typesafe-actions';

// Models
import {SignInDto} from '../models';

export const signInAsync = createAsyncAction(
  '@@sign-in/SIGN_IN_REQUEST',
  '@@sign-in/SIGN_IN_SUCCEEDED',
  '@@sign-in/SIGN_IN_FAILED',
)<SignInDto, undefined, unknown>();
export const attemptSignIn = createAsyncAction(
  '@@sign-in/ATTEMPT_SIGN_IN',
  '@@sign-in/ATTEMPT_SIGN_IN_SUCCEEDED',
  '@@sign-in/ATTEMPT_SIGN_IN_FAILED',
)<undefined, undefined, undefined>();
