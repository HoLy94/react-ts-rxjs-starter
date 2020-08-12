import {of} from 'rxjs';
import {AnyAction} from 'redux';
import {isActionOf} from 'typesafe-actions';
import {filter, map, catchError, delay} from 'rxjs/operators';
import {ActionsObservable, StateObservable} from 'redux-observable';

// Actions
import * as a from './actions';

// Models
import {RootState} from '../../../store/root-reducer';
import {EpicDependencies} from '../../../store/epic-dependencies';

export const signInEpic = (
  action$: ActionsObservable<AnyAction>,
  _: StateObservable<RootState>,
  d: EpicDependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.signInAsync.request)),
    delay(1),
    map(() => a.signInAsync.success({name: 'Test'})),
    catchError((e) => of(a.signInAsync.failure(e))),
  );

export const signOutEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: EpicDependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.signOutAsync.request)),
    delay(0.5),
    map(() => a.signOutAsync.success()),
    catchError((e) => of(a.signOutAsync.failure(e))),
  );

export const signUpEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: EpicDependencies,
) => action$.pipe(filter(isActionOf(a.signUpAsync.request)));
