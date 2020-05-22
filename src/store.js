/* eslint-disable no-undef */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from 'modules';
import rootSaga from 'modules/sagas/root-saga';

const isProduction = process.env.NODE_ENV === 'production';

// Create store
const createAppStore = () => {
  let store = null;
  let persistor = null;
  let middleware = null;
  const sagaMiddleware = createSagaMiddleware();

  if (isProduction) {
    // Producction middlewares
    middleware = applyMiddleware(sagaMiddleware, routerMiddleware);
  } else {
    // define the logger
    const logger = createLogger({ collapsed: true });

    // Development middlewares
    middleware = applyMiddleware(sagaMiddleware, logger);

    // Enable redux devtool if browser extension is installed
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }

  store = createStore(rootReducer, middleware);

  sagaMiddleware.run(rootSaga);
  // begin periodically persisting the store
  persistor = persistStore(store, null, () => store.getState());

  if (module.hot) {
    // Enable webpack hot module replacement for redux modules
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  // Return store and persistor instance
  return { store, persistor };
};

const { store, persistor } = createAppStore();

export { store, persistor };
