import {createReducer, getType} from 'typesafe-actions';

// Models
import {User} from '../models';

// Actions
import * as a from './actions';
import * as signInActions from '../sign-in/store/actions';

export type AuthState = {
  user: User | null;
  isAuthorized: boolean;
  isAuthorizing: boolean;
};

const InitialAuthState: AuthState = {
  user: null,
  isAuthorized: false,
  isAuthorizing: true,
};

const authReducer = createReducer<AuthState>(InitialAuthState, {
  [getType(signInActions.attemptSignIn.request)]: (state) => ({
    ...state,
    isAuthorizing: true,
  }),
  [getType(signInActions.attemptSignIn.failure)]: (state) => ({
    ...state,
    isAuthorizing: false,
  }),
  [getType(a.fetchCurrentUserAsync.success)]: (state, {payload: user}) => ({
    ...state,
    user,
    isAuthorized: true,
    isAuthorizing: false,
  }),
  [getType(a.fetchCurrentUserAsync.failure)]: (state) => ({
    ...state,
    isAuthorized: false,
    isAuthorizing: false,
  }),
  [getType(a.signOutAsync.success)]: () => ({
    ...InitialAuthState,
    isAuthorized: false,
    isAuthorizing: false,
  }),
});

export default authReducer;
