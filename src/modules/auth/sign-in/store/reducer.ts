import {createReducer, getType} from 'typesafe-actions';

// Actions
import * as a from './actions';

export type SignInState = {
  signingIn: boolean;
};

const InitialSignInState: SignInState = {
  signingIn: false,
};

const singInReducer = createReducer<SignInState>(InitialSignInState, {
  [getType(a.signInAsync.request)]: (state) => ({
    ...state,
    signingIn: true,
  }),
  [getType(a.signInAsync.success)]: (state) => ({
    ...state,
    signedIn: true,
    signingIn: false,
  }),
  [getType(a.signInAsync.failure)]: (state) => ({
    ...state,
    signingIn: false,
  }),
});

export default singInReducer;
