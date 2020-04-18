import { compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const configureStore = (rootReducer, preloadedState) => {
  const store = createStore(rootReducer, devToolsEnhancer());
  return store;
};

export default configureStore;
