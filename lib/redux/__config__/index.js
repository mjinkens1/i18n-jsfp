import { createStore } from 'redux';

const configureStore = rootReducer => {
  const store = createStore(rootReducer);
  return store;
};

export default configureStore;
