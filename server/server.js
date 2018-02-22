import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { PORT, IS_PRODUCTION, SERVER_RUNNING_MESSAGE } from './config';
import webpackConfig from '../webpack.config.babel';
import App from '../common/app';
import reducer from '../common/app.reducer';
import { renderDevFullPage, renderFullPage } from './renderer';
import postGqlMiddleware from './postgraphile';

const app = express();

// This is fired every time the server side receives a request
function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(reducer);

  // Render the component to a string
  // eslint-disable-next-line react/jsx-filename-extension
  const html = renderToString(<Provider store={store}><App /></Provider>);

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  if (IS_PRODUCTION) {
    res.send(renderFullPage(html, preloadedState));
  } else {
    const { assetsByChunkName } = res.locals.webpackStats.toJson();
    res.send(renderDevFullPage(html, preloadedState, assetsByChunkName));
  }
}

// Serve static files
app.use('/static', express.static('static'));

if (!IS_PRODUCTION) { // Is develop build
  /* eslint-disable global-require, import/no-extraneous-dependencies */
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  /* eslint-enable global-require, import/no-extraneous-dependencies */

  const buildConfig = {
    NODE_ENV: 'browser',
    production: IS_PRODUCTION,
  };
  const browserConfig = webpackConfig(buildConfig);
  const webpackDevMiddlewareOptions = {
    publicPath: browserConfig.output.publicPath,
    serverSideRender: true,
  };
  const browserCompiler = webpack(browserConfig);

  app.use(webpackDevMiddleware(browserCompiler, webpackDevMiddlewareOptions));
  app.use(webpackHotMiddleware(browserCompiler));
}

// Postgraphile middleware should goes before handleRender
app.use(postGqlMiddleware);
app.use(handleRender);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(SERVER_RUNNING_MESSAGE));
