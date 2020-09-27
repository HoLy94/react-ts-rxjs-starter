import {createSelector} from 'reselect';

// Models
import {RootState} from '../../../../store/rootReducer';

const selectSignUpStateSlice = (state: RootState) => state.signUp;

export const signingUpSelector = createSelector(
  selectSignUpStateSlice,
  (s) => s.signingUp,
);

export const signedUpSelector = createSelector(
  selectSignUpStateSlice,
  (s) => s.signedUp,
);
