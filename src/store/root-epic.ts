import {combineEpics} from 'redux-observable';

// Auth
import {signInEpic, signUpEpic, signOutEpic} from '../modules/auth/store/epics';

export default combineEpics(signInEpic, signUpEpic, signOutEpic);
