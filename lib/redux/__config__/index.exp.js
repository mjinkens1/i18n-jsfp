const NEXT = { type: '__@@NEXT@@__' };
const SELECT = { type: '__@@SELECT@@__' };

const defaultSelector = state => state;

function* stateGenerator(rootReducer, currentState) {
  const action = yield;
  const nextState = rootReducer(currentState, action);
  yield nextState;
  yield* stateGenerator(rootReducer, nextState);
}

const calculateNextState = (rootReducer, currentState) => {
  return {
    state: currentState,
    next: action => {
      const nextState = rootReducer(currentState, action);
      return calculateNextState(rootReducer, nextState);
    },
  };
};

const createStore = (rootReducer, initialState = {}, enhancer) => {
  const stateIterator = stateGenerator(rootReducer, initialState);
  stateIterator.next();

  const dispatch = action => {
    stateIterator.next(action);
    stateIterator.next(NEXT);
    return action;
  };

  const selectState = (selector = defaultSelector) => {
    const state = stateIterator.next(SELECT).value;
    stateIterator.next(NEXT);
    return selector(state);
  };

  if (enhancer) {
    return {
      ...enhancer(createStore)(rootReducer, initialState),
      dispatch,
      selectState,
    };
  }

  return {
    dispatch,
    selectState,
  };
};

export { createStore };

const combineReducers = reducers => {
  const reducerKeys = Object.keys(reducers);

  const finalReducers = reducerKeys.reduce((acc, key) => {
    return typeof reducers[key] === 'function'
      ? { ...acc, [key]: reducers[key] }
      : acc;
  });

  const finalReducerKeys = Object.keys(finalReducers);

  return function combination(state = {}, action) {
    const { nextState, hasChanged } = finalReducerKeys.reduce(
      (acc, key) => {
        const reducer = finalReducers[key];
        const currentStateForKey = state[key];
        const nextStateForKey = reducer(currentStateForKey, action);

        return {
          nexState: { ...acc.nextState, [key]: nextStateForKey },
          hasChanged:
            acc.hasChanged || currentStateForKey !== previousStateForKey,
        };
      },
      { nextState: {}, hasChanged: false }
    );

    const stateHasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length;

    return stateHasChanged ? nextState : state;
  };
};
