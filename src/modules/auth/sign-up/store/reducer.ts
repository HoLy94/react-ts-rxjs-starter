import {createReducer, getType} from 'typesafe-actions';

// Actions
import * as a from './actions';

export type SignUpState = {
  signingUp: boolean;
  signedUp: boolean;
};

const InitialSignUpState: SignUpState = {
  signingUp: false,
  signedUp: false,
};

const singUpReducer = createReducer<SignUpState>(InitialSignUpState, {
  [getType(a.signUpAsync.request)]: (state) => ({
    ...state,
    signingUp: true,
  }),
  [getType(a.signUpAsync.success)]: (state) => ({
    ...state,
    signedUp: true,
    signingUp: false,
  }),
  [getType(a.signUpAsync.failure)]: (state) => ({
    ...state,
    signingUp: false,
  }),
});

export default singUpReducer;
