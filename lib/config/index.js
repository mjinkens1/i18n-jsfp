import { compose, createStore } from 'redux';
import rootReducer from '../redux';

const configureStore = (rootReducer, preloadedState) => {
  const store = createStore(
    rootReducer,
    window?.__REDUX_DEVTOOLS_EXTENSION__ &&
      window?.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;
