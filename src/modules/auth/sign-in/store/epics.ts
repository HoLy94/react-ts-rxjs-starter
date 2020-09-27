import {of} from 'rxjs';
import {AnyAction} from 'redux';
import {isActionOf} from 'typesafe-actions';
import {filter, map, catchError, delay, mergeMap} from 'rxjs/operators';
import {ActionsObservable, StateObservable} from 'redux-observable';

// Actions
import * as a from './actions';
import * as authActions from '../../store/actions';

// Models
import {RootState} from '../../../../store/rootReducer';
import {Dependencies} from '../../../../store/dependencies';

export const signInEpic = (
  action$: ActionsObservable<AnyAction>,
  _: StateObservable<RootState>,
  d: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.signInAsync.request)),
    delay(1000),
    mergeMap(() => {
      localStorage.setItem('token', 'Test token');

      return of(
        a.signInAsync.success(),
        authActions.fetchCurrentUserAsync.request(),
      );
    }),
    catchError((e) => of(a.signInAsync.failure(e))),
  );

export const attemptSignInEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.attemptSignIn)),
    map(() => {
      const token = localStorage.getItem('token');

      if (token !== null) {
        d.authService.token = token;

        return authActions.fetchCurrentUserAsync.request();
      }

      return a.attemptSignInFailed();
    }),
  );
