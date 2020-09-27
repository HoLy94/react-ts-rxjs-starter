import {createAction, createAsyncAction} from 'typesafe-actions';

// Models
import {SignUpCredentials} from '../models';

export const signUpAsync = createAsyncAction(
  '@@auth/SIGN_UP_REQUEST',
  '@@auth/SIGN_UP_SUCCEEDED',
  '@@auth/SIGN_UP_FAILED',
)<SignUpCredentials, undefined, unknown>();
