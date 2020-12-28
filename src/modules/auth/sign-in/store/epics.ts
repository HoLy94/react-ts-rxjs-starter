import {of} from 'rxjs';
import {AnyAction} from 'redux';
import {isActionOf} from 'typesafe-actions';
import {filter, map, catchError, mergeMap} from 'rxjs/operators';
import {ActionsObservable, StateObservable} from 'redux-observable';

// Actions
import * as a from './actions';
import * as authActions from '../../store/actions';
import {setServerError} from '../../../common/store/actions';

// Constants
import {TOKEN_STORAGE_KEY} from '../../constants';

// Models
import {RootState} from '../../../../store/rootReducer';
import {Dependencies} from '../../../../store/dependencies';

export const signInEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.signInAsync.request)),
    mergeMap(() => {
      d.localStorageService.setItem(TOKEN_STORAGE_KEY, 'Test token');

      return of(
        a.signInAsync.success(),
        authActions.fetchCurrentUserAsync.request(),
      );
    }),
    catchError((e) => of([a.signInAsync.failure(e), setServerError(e)])),
  );

export const attemptSignInEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.attemptSignIn.request)),
    map(() => {
      const token = d.localStorageService.getItem(TOKEN_STORAGE_KEY);

      if (token !== null) {
        d.authService.setToken(token);

        return authActions.fetchCurrentUserAsync.request();
      }

      return a.attemptSignIn.failure();
    }),
  );
