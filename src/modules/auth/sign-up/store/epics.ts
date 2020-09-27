import {of} from 'rxjs';
import {AnyAction} from 'redux';
import {isActionOf} from 'typesafe-actions';
import {filter, map, catchError, delay} from 'rxjs/operators';
import {ActionsObservable, StateObservable} from 'redux-observable';

// Actions
import * as a from './actions';

// Models
import {RootState} from '../../../../store/rootReducer';
import {Dependencies} from '../../../../store/dependencies';

export const signUpEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.signUpAsync.request)),
    delay(1),
    map(() => {
      localStorage.removeItem('token');

      return a.signUpAsync.success();
    }),
    catchError((e) => of(a.signUpAsync.failure(e))),
  );
