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
};

const InitialAuthState: AuthState = {
  user: null,
  signingIn: false,
  signingUp: false,
  isAuthorized: true,
};

const authReducer = createReducer<AuthState>(InitialAuthState, {
  [getType(a.signInAsync.request)]: (state) => ({
    ...state,
    signingIn: true,
    responseErrorMessage: undefined,
  }),
  [getType(a.signInAsync.success)]: (state, {payload: user}) => ({
    ...state,
    user,
    signingIn: false,
    isAuthorized: true,
  }),
  [getType(a.signInAsync.failure)]: (state, {payload}) => ({
    ...state,
    signingIn: false,
    isAuthorized: false,
    responseErrorMessage: payload,
  }),
  [getType(a.signUpAsync.request)]: (state) => ({
    ...state,
    signingUp: true,
    responseErrorMessage: undefined,
  }),
  [getType(a.signUpAsync.success)]: (state) => ({
    ...state,
    signingUp: false,
  }),
  [getType(a.signUpAsync.failure)]: (state, {payload}) => ({
    ...state,
    signingUp: false,
    responseErrorMessage: payload,
  }),
  [getType(a.signOutAsync.success)]: () => ({
    ...InitialAuthState,
    isAuthorized: false,
  }),
});

export default authReducer;
