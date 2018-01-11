import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../webpack.config.babel';
import App from '../common/app';
import reducer from '../common/app.reducer';
import renderFullPage from './renderer';

const app = express();
const PORT = 3000;

const browserConfig = webpackConfig({
  NODE_ENV: 'browser',
  production: process.env.NODE_ENV === 'production'
});
const browserCompiler = webpack(browserConfig);

//Serve static files
app.use('/static', express.static('static'));
app.use(webpackDevMiddleware(browserCompiler, {
  publicPath: browserConfig.output.publicPath,
  serverSideRender: true
}));
app.use(webpackHotMiddleware(browserCompiler));
app.use(handleRender);


// This is fired every time the server side receives a request
function handleRender(req, res) {
  const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;

  // Create a new Redux store instance
  const store = createStore(reducer);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState, assetsByChunkName));
}

app.listen(PORT, () => console.log(`\nDiscipuli server is running at http://localhost:${PORT}\n`));
