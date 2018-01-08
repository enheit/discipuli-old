import React from 'react';
import express from 'express';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import path from 'path';

import { App, reducer } from '../common';

const app = express();
const PORT = 3000;

//Serve static files
app.use('/static', express.static('static'));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(reducer)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/browser.bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(PORT, () => console.log(`\nDiscipuli server is running at http://localhost:${PORT}\n`));
