import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

// App
import App from './modules/App';

// Workers
import * as serviceWorker from './serviceWorker';

// Store
import createReduxStoreWithEpic from './store';

const Root = () => (
  <Provider store={createReduxStoreWithEpic()}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
