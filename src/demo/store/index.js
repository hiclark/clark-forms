/* eslint global-require: 0, flowtype/require-valid-file-annotation: 0 */
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(logger));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
