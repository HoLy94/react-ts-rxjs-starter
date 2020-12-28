import {createAction, createAsyncAction} from 'typesafe-actions';

// Models
import {ErrorResponseType} from '../models';

export const getParamsFromStorage = createAsyncAction(
  '@@common/GET_PARAMS_FROM_STORAGE',
  '@@common/GET_PARAMS_FROM_STORAGE_SUCCEEDED',
  '@@common/GET_PARAMS_FROM_STORAGE_FAILED',
)<undefined, undefined, undefined>();
export const setIsDarkMode = createAsyncAction(
  '@@common/SET_IS_DARK_MODE',
  '@@common/SET_IS_DARK_MODE_SUCCEEDED',
  '@@common/SET_IS_DARK_MODE_FAILED',
)<boolean, boolean, undefined>();
export const setServerError = createAction('@@common/SET_SERVER_ERROR')<
  unknown | ErrorResponseType
>();
export const clearServerError = createAction('@@common/CLEAR_SERVER_ERROR')();
