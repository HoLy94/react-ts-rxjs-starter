import {createSelector} from 'reselect';

// Models
import {RootState} from '../../../store/root-reducer';

const selectAuthStateSlice = (state: RootState) => state.auth;

export const userSelector = createSelector(selectAuthStateSlice, (s) => s.user);
export const signingInSelector = createSelector(
  selectAuthStateSlice,
  (s) => s.signingIn,
);
export const signingUpSelector = createSelector(
  selectAuthStateSlice,
  (s) => s.signingUp,
);
export const isAuthorizedSelector = createSelector(
  selectAuthStateSlice,
  (s) => s.isAuthorized,
);
