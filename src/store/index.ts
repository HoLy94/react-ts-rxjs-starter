import {createLogger} from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';
import {AnyAction, applyMiddleware, createStore} from 'redux';

// Reducer
import rootReducer, {RootState} from './rootReducer';

// Root epic
import rootEpic from './rootEpic';

// Epic-dependencies
import dependencies, {Dependencies} from './dependencies';

const epicMiddleware = createEpicMiddleware<
  AnyAction,
  AnyAction,
  RootState,
  Dependencies
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
