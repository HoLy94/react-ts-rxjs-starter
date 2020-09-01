import {createReducer, getType} from 'typesafe-actions';

// Actions
import * as a from './actions';

export type CommonState = {
  isDarkMode: boolean;
  isDarkModeGetting: boolean;
};

const InitialCommonState: CommonState = {
  isDarkMode: true,
  isDarkModeGetting: false,
};

const commonReducer = createReducer<CommonState>(InitialCommonState, {
  [getType(a.toggleDarkMode)]: (state) => ({
    ...state,
    isDarkMode: !state.isDarkMode,
  }),
  [getType(a.getIsDarkMode)]: (state) => ({
    ...state,
    isDarkModeGetting: true,
  }),
  [getType(a.saveIsDarkMode)]: (state, {payload}) => ({
    ...state,
    isDarkMode: payload,
    isDarkModeGetting: false,
  }),
});

export default commonReducer;
