import {createAsyncAction} from 'typesafe-actions';

// Models
import {SignUpDto} from '../models';

export const signUpAsync = createAsyncAction(
  '@@auth/SIGN_UP_REQUEST',
  '@@auth/SIGN_UP_SUCCEEDED',
  '@@auth/SIGN_UP_FAILED',
)<SignUpDto, undefined, unknown>();
