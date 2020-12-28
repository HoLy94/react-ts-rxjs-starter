import {of} from 'rxjs';
import {AnyAction} from 'redux';
import {isActionOf} from 'typesafe-actions';
import {filter, catchError, switchMap, mergeMap} from 'rxjs/operators';
import {ActionsObservable, StateObservable} from 'redux-observable';

// Actions
import * as a from './actions';
import {setServerError} from '../../../common/store/actions';

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
    switchMap(({payload}) =>
      d.signUpService.signUp(payload).pipe(
        mergeMap(() => of(a.signUpAsync.success())),
        catchError((e) => of([a.signUpAsync.failure(e), setServerError(e)])),
      ),
    ),
  );
