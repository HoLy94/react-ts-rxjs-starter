import {combineReducers} from 'redux';

// Constants
import StoreKeys from './constants';

// Reducers
import authReducer, {AuthState} from '../modules/auth/store/reducer';
import singInReducer, {
  SignInState,
} from '../modules/auth/sign-in/store/reducer';
import singUpReducer, {
  SignUpState,
} from '../modules/auth/sign-up/store/reducer';
import commonReducer, {CommonState} from '../modules/common/store/reducer';

export type RootState = {
  auth: AuthState;
  common: CommonState;
  signIn: SignInState;
  signUp: SignUpState;
};

export default combineReducers({
  [StoreKeys.auth]: authReducer,
  [StoreKeys.signIn]: singInReducer,
  [StoreKeys.signUp]: singUpReducer,
  [StoreKeys.common]: commonReducer,
});
