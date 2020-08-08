import {createLogger} from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';
import {AnyAction, applyMiddleware, createStore, Store} from 'redux';

// Reducer
import rootReducer, {RootState} from './root-reducer';

// Root epic
import rootEpic from './root-epic';

// Epic-dependencies
import dependencies, {EpicDependencies} from './epic-dependencies';

const epicMiddleware = createEpicMiddleware<
  AnyAction,
  AnyAction,
  RootState,
  EpicDependencies
>({dependencies});
const logger = createLogger({
  collapsed: true,
});

const developmentMiddleware = [];

if (process.env.NODE_ENV === 'development') {
  developmentMiddleware.push(logger);
}

const middleware = applyMiddleware(epicMiddleware, ...developmentMiddleware);
const createReduxStoreWithEpic = () => {
  const store = createStore(rootReducer, {}, middleware);

  epicMiddleware.run(rootEpic);

  return store;
};

export default createReduxStoreWithEpic;
