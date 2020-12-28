import {createReducer, getType} from 'typesafe-actions';

// Actions
import * as a from './actions';

// Models
import {ErrorResponseType} from '../models';

export type CommonState = {
  isDarkMode: boolean;
  isParamsFromStorageGetting: boolean;
  serverError: unknown | ErrorResponseType;
};

const InitialCommonState: CommonState = {
  isDarkMode: true,
  serverError: null,
  isParamsFromStorageGetting: false,
};

const commonReducer = createReducer<CommonState>(InitialCommonState, {
  [getType(a.setIsDarkMode.success)]: (state, {payload}) => ({
    ...state,
    isDarkMode: payload,
  }),
  [getType(a.getParamsFromStorage.request)]: (state) => ({
    ...state,
    isParamsFromStorageGetting: true,
  }),
  [getType(a.getParamsFromStorage.success)]: (state) => ({
    ...state,
    isParamsFromStorageGetting: false,
  }),
  [getType(a.setServerError)]: (state, {payload}) => ({
    ...state,
    serverError: payload,
  }),
  [getType(a.clearServerError)]: (state) => ({
    ...state,
    serverError: null,
  }),
});

export default commonReducer;
