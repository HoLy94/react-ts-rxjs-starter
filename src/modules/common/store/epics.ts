import {of} from 'rxjs';
import {AnyAction} from 'redux';
import {isActionOf} from 'typesafe-actions';
import {filter, map, mergeMap} from 'rxjs/operators';
import {ActionsObservable, StateObservable} from 'redux-observable';

// Actions
import * as a from './actions';

// Constants
import {DARK_MODE_STORAGE_KEY} from '../constants';

// Models
import {RootState} from '../../../store/rootReducer';
import {Dependencies} from '../../../store/dependencies';

export const setIsDarkModeEpic = (
  action$: ActionsObservable<AnyAction>,
  _: StateObservable<RootState>,
  d: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.setIsDarkMode.request)),
    map(({payload}) => {
      d.localStorageService.setItem(DARK_MODE_STORAGE_KEY, String(payload));

      return a.setIsDarkMode.success(payload);
    }),
  );

export const getParamsFromStorageEpic = (
  action$: ActionsObservable<AnyAction>,
  _: StateObservable<RootState>,
  d: Dependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.getParamsFromStorage.request)),
    mergeMap(() => {
      const isDarkMode = d.localStorageService.getItem(DARK_MODE_STORAGE_KEY);

      return of(
        a.setIsDarkMode.success(
          isDarkMode === null ? false : JSON.parse(isDarkMode),
        ),
        a.getParamsFromStorage.success(),
      );
    }),
  );
