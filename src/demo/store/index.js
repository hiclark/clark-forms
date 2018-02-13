/* eslint global-require: 0 */
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(rootReducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
