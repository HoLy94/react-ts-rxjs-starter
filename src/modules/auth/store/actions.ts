import {createAsyncAction} from 'typesafe-actions';

// Models
import {User} from '../models';

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
