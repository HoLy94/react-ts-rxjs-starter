import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

// App
import App from './modules/App';

// Store
import createReduxStoreWithEpic from './store';

// Workers
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={createReduxStoreWithEpic()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
