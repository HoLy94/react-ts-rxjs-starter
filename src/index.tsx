import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './modules/App';
import * as serviceWorker from './serviceWorker';
import createReduxStoreWithEpic from './store';

ReactDOM.render(
  <Provider store={createReduxStoreWithEpic()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
