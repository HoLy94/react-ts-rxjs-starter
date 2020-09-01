import {AnyAction} from 'redux';
import {isActionOf} from 'typesafe-actions';
import {filter, map, withLatestFrom} from 'rxjs/operators';
import {ActionsObservable, StateObservable} from 'redux-observable';

// Actions
import * as a from './actions';

// Models
import {RootState} from '../../../store/root-reducer';
import {EpicDependencies} from '../../../store/epic-dependencies';

// Selectors
import {isDarkModeSelector} from './selectors';

export const setIsDarkModeEpic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<RootState>,
  d: EpicDependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.toggleDarkMode)),
    withLatestFrom(state$),
    map(([_, state]) => {
      const isDarkMode = isDarkModeSelector(state);

      localStorage.setItem('isDarkMode', String(isDarkMode));

      return a.setIsDarkMode();
    }),
  );

export const getIsDarkModeEpic = (
  action$: ActionsObservable<AnyAction>,
  _: StateObservable<RootState>,
  d: EpicDependencies,
) =>
  action$.pipe(
    filter(isActionOf(a.getIsDarkMode)),
    map(() => {
      const isDarkMode = localStorage.getItem('isDarkMode');

      if (isDarkMode === null) {
        return a.saveIsDarkMode(false);
      }

      return a.saveIsDarkMode(JSON.parse(isDarkMode));
    }),
  );
