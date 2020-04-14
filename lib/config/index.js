import { compose, createStore } from 'redux';

const configureStore = (rootReducer, preloadedState) => {
  const store = createStore(
    rootReducer,
    window?.__REDUX_DEVTOOLS_EXTENSION__ &&
      window?.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;
