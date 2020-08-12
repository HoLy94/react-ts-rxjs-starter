import {AnyAction} from 'redux';
import {filter, map, catchError} from 'rxjs/operators';
import {isActionOf} from 'typesafe-actions';
import {of} from 'rxjs';
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
    map(() => a.signInAsync.success({name: 'Test'})),
    catchError((e) => of(a.signInAsync.failure(e))),
  );

export const signOutEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: EpicDependencies,
) => action$.pipe(filter(isActionOf(a.signOutAsync.request)));

export const signUpEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: EpicDependencies,
) => action$.pipe(filter(isActionOf(a.signUpAsync.request)));
