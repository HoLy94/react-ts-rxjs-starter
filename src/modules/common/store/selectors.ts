import {createSelector} from 'reselect';

import {isAuthorizingSelector} from '../../auth/store/selectors';

// Models
import {RootState} from '../../../store/rootReducer';

const selectCommonStateSlice = (state: RootState) => state.common;

export const isDarkModeSelector = createSelector(
  selectCommonStateSlice,
  (s) => s.isDarkMode,
);

export const isParamsFromStorageGettingSelector = createSelector(
  selectCommonStateSlice,
  (s) => s.isParamsFromStorageGetting,
);

export const isAppLoadingSelector = createSelector(
  isAuthorizingSelector,
  isParamsFromStorageGettingSelector,
  (isAuthorizing, isParamsFromStorageGetting) =>
    isAuthorizing || isParamsFromStorageGetting,
);

export const serverErrorSelector = createSelector(
  selectCommonStateSlice,
  (s) => s.serverError,
);
