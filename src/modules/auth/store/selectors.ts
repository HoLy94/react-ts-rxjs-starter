import {createSelector} from 'reselect';

// Models
import {RootState} from '../../../store/rootReducer';

const selectAuthStateSlice = (state: RootState) => state.auth;

export const userSelector = createSelector(selectAuthStateSlice, (s) => s.user);
export const isAuthorizedSelector = createSelector(
  selectAuthStateSlice,
  (s) => s.isAuthorized,
);
export const isAuthorizingSelector = createSelector(
  selectAuthStateSlice,
  (s) => s.isAuthorizing,
);
