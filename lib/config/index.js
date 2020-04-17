import { applyMiddleware, compose, createStore } from 'redux';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const configureStore = (rootReducer, preloadedState) => {
  const middleware = [logger];
  const composeEnhancers =
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
};

export default configureStore;

// AWAIT CONFIGURE MIDDLEWARE
