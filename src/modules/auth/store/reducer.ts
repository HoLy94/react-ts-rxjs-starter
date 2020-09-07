import {createReducer, getType} from 'typesafe-actions';

// Models
import {User} from '../models';

// Actions
import * as a from './actions';

export type AuthState = {
  user: User | null;
  signingIn: boolean;
  signingUp: boolean;
  isAuthorized: boolean;
  isAuthorizing: boolean;
};

const InitialAuthState: AuthState = {
  user: null,
  signingIn: false,
  signingUp: false,
  isAuthorized: false,
  isAuthorizing: true,
};

const authReducer = createReducer<AuthState>(InitialAuthState, {
  [getType(a.signInAsync.request)]: (state) => ({
    ...state,
    signingIn: true,
  }),
  [getType(a.signInAsync.success)]: (state, {payload: user}) => ({
    ...state,
    user,
    signingIn: false,
    isAuthorized: true,
  }),
  [getType(a.signInAsync.failure)]: (state) => ({
    ...state,
    signingIn: false,
    isAuthorized: false,
  }),
  [getType(a.signUpAsync.request)]: (state) => ({
    ...state,
    signingUp: true,
  }),
  [getType(a.signUpAsync.success)]: (state) => ({
    ...state,
    signingUp: false,
  }),
  [getType(a.signUpAsync.failure)]: (state) => ({
    ...state,
    signingUp: false,
  }),
  [getType(a.attemptSignIn)]: (state) => ({
    ...state,
    isAuthorizing: true,
  }),
  [getType(a.attemptSignInFailed)]: (state) => ({
    ...state,
    isAuthorizing: false,
  }),
  [getType(a.fetchCurrentUserAsync.success)]: (state, {payload: user}) => ({
    ...state,
    user,
    isAuthorized: true,
    isAuthorizing: false,
  }),
  [getType(a.signOutAsync.success)]: () => ({
    ...InitialAuthState,
    isAuthorized: false,
  }),
});

export default authReducer;
