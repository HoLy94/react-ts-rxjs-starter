import {of} from 'rxjs';
import {AnyAction} from 'redux';
import {isActionOf} from 'typesafe-actions';
import {ActionsObservable} from 'redux-observable';
import {filter, map, catchError} from 'rxjs/operators';

// Actions
import * as a from './actions';
import {setServerError} from '../../common/store/actions';

export const signOutEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    filter(isActionOf(a.signOutAsync.request)),
    map(() => {
      localStorage.removeItem('token');

      return a.signOutAsync.success();
    }),
    catchError((e) => of([a.signOutAsync.failure(e), setServerError(e)])),
  );

export const fetchCurrentUserEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    filter(isActionOf(a.fetchCurrentUserAsync.request)),
    map(() => {
      return a.fetchCurrentUserAsync.success({name: 'Test'});
    }),
    catchError((e) =>
      of([a.fetchCurrentUserAsync.failure(e), setServerError(e)]),
    ),
  );
