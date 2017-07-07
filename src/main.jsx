/* global document:true window:true*/
/* eslint no-underscore-dangle: ["error", { "allow": ["__PRELOADED_STATE__"] }]*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes';
import configureStore from './store/store';
import runRootSaga from './sagas/rootSaga';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

runRootSaga();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
