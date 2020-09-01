import {createSelector} from 'reselect';

// Models
import {RootState} from '../../../store/root-reducer';

const selectCommonStateSlice = (state: RootState) => state.common;

export const isDarkModeSelector = createSelector(
  selectCommonStateSlice,
  (s) => s.isDarkMode,
);
