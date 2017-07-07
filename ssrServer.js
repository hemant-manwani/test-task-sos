
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import routes from './src/routes/routes';

import configureStore from './src/store/store';

const app = express();

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/static', express.static(__dirname + '/dist/static'))

app.use((req, res) => {
  match({ routes: routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found.');

    const store = configureStore();

    const InitialComponent = (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );
    const componentHTML = renderToString(InitialComponent);
    const preloadedState = store.getState();

    const HTML = `
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Isomorphic Redux Demo</title>
          </head>
          <body>
            <div id="root">${componentHTML}</div>
            <script type="text/javascript">
              window.__PRELOADED_STATE__ =${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
            </script>
            <script type="text/javascript" src="/static/bundle.js"></script>
          </body>
      </html>
    `
    res.end(HTML);
  });
});

app.listen(8000, function () {
  console.log('App listening on port 8000!')
})
