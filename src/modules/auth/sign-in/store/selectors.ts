import {createSelector} from 'reselect';

// Models
import {RootState} from '../../../../store/rootReducer';

const selectSignInStateSlice = (state: RootState) => state.signIn;

export const signingInSelector = createSelector(
  selectSignInStateSlice,
  (s) => s.signingIn,
);
