import {createSelector} from 'reselect';

import {isAuthorizingSelector} from '../../auth/store/selectors';

// Models
import {RootState} from '../../../store/rootReducer';

const selectCommonStateSlice = (state: RootState) => state.common;

export const isDarkModeSelector = createSelector(
  selectCommonStateSlice,
  (s) => s.isDarkMode,
);

export const isDarkModeGettingSelector = createSelector(
  selectCommonStateSlice,
  (s) => s.isDarkModeGetting,
);

export const isAppLoadingSelector = createSelector(
  isAuthorizingSelector,
  isDarkModeGettingSelector,
  (isAuthorizing, isDarkModeGetting) => isAuthorizing || isDarkModeGetting,
);
