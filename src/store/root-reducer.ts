import {combineReducers} from 'redux';

// Constants
import StoreKeys from './constants';

// Reducers
import authReducer, {AuthState} from '../modules/auth/store/reducer';

export type RootState = {
  auth: AuthState;
};

export default combineReducers({
  [StoreKeys.auth]: authReducer,
});
