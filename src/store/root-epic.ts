import {combineEpics} from 'redux-observable';

// Auth
import authEpics from '../modules/auth/store/epics';

export default combineEpics(authEpics);
