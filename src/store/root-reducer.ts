import {combineReducers} from 'redux';

// Constants
import StoreKeys from './constants';

// Reducers
import authReducer, {AuthState} from '../modules/auth/store/reducer';
import commonReducer, {CommonState} from '../modules/common/store/reducer';

export type RootState = {
  auth: AuthState;
  common: CommonState;
};

export default combineReducers({
  [StoreKeys.auth]: authReducer,
  [StoreKeys.common]: commonReducer,
});
