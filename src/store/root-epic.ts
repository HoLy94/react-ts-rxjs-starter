import {combineEpics} from 'redux-observable';

// Auth
import {signInEpic, signUpEpic, signOutEpic} from '../modules/auth/store/epics';

// Common
import {
  setIsDarkModeEpic,
  getIsDarkModeEpic,
} from '../modules/common/store/epics';

export default combineEpics(
  signInEpic,
  signUpEpic,
  signOutEpic,
  setIsDarkModeEpic,
  getIsDarkModeEpic,
);
