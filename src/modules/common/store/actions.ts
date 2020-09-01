import {createAction} from 'typesafe-actions';

export const toggleDarkMode = createAction('@@common/TOGGLE_DARK_MODE')();
export const setIsDarkMode = createAction('@@common/SET_IS_DARK_MODE')();
export const getIsDarkMode = createAction('@@common/GET_IS_DARK_MODE')();
export const saveIsDarkMode = createAction('@@common/SAVE_IS_DARK_MODE')<
  boolean
>();
