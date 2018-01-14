import { createStore } from 'redux';

import reducer from '../common/app.reducer';

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../common/app.reducer', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../common/app.reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
