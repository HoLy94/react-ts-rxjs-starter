import {createReducer, getType} from 'typesafe-actions';

// Actions
import * as a from './actions';

export type CommonState = {
  isDarkMode: boolean;
};

const InitialCommonState: CommonState = {
  isDarkMode: true,
};

const commonReducer = createReducer<CommonState>(InitialCommonState, {
  [getType(a.toggleDarkMode)]: (state) => ({
    ...state,
    isDarkMode: !state.isDarkMode,
  }),
  [getType(a.saveIsDarkMode)]: (state, {payload}) => ({
    ...state,
    isDarkMode: payload,
  }),
});

export default commonReducer;
