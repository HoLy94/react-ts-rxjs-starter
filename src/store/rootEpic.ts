import {combineEpics} from 'redux-observable';

// Auth
import {signOutEpic, fetchCurrentUserEpic} from '../modules/auth/store/epics';
import {signUpEpic} from '../modules/auth/sign-up/store/epics';
import {
  attemptSignInEpic,
  signInEpic,
} from '../modules/auth/sign-in/store/epics';

// Common
import {
  setIsDarkModeEpic,
  getParamsFromStorageEpic,
} from '../modules/common/store/epics';

export default combineEpics(
  signInEpic,
  signUpEpic,
  signOutEpic,
  attemptSignInEpic,
  fetchCurrentUserEpic,
  setIsDarkModeEpic,
  getParamsFromStorageEpic,
);
