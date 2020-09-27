import {of} from 'rxjs';
import {AnyAction} from 'redux';
import {isActionOf} from 'typesafe-actions';
import {filter, map, catchError, delay} from 'rxjs/operators';
import {ActionsObservable, StateObservable} from 'redux-observable';

// Actions
import * as a from './actions';

// Models
import {RootState} from '../../../store/rootReducer';
import {Dependencies} from '../../../store/dependencies';

export const signOutEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.signOutAsync.request)),
    delay(0.5),
    map(() => {
      localStorage.removeItem('token');

      return a.signOutAsync.success();
    }),
    catchError((e) => of(a.signOutAsync.failure(e))),
  );

export const fetchCurrentUserEpic = (
  action$: ActionsObservable<AnyAction>,
  _: StateObservable<RootState>,
  d: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.fetchCurrentUserAsync.request)),
    delay(500),
    map(() => {
      return a.fetchCurrentUserAsync.success({name: 'Test'});
    }),
    catchError((e) => of(a.fetchCurrentUserAsync.failure(e))),
  );
