import {createSelector} from 'reselect';

// Models
import {RootState} from '../../../store/root-reducer';

const selectAuthStateSlice = (state: RootState) => state.auth;

export const selectUser = createSelector(selectAuthStateSlice, (s) => s.user);
export const selectSigningIn = createSelector(
  selectAuthStateSlice,
  (s) => s.signingIn,
);
export const selectSigningUp = createSelector(
  selectAuthStateSlice,
  (s) => s.signingUp,
);
export const selectAuthorizing = createSelector(
  selectAuthStateSlice,
  (s) => s.authorizing,
);
