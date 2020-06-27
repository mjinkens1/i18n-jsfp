const NEXT = { type: '__@@NEXT@@__' };
const SELECT = { type: '__@@SELECT@@__' };

const defaultSelector = state => state;

// function* stateGenerator(rootReducer, currentState) {
//   const action = yield;
//   const nextState = rootReducer(currentState, action);
//   yield nextState;
//   yield* stateGenerator(rootReducer, nextState);
// }

// const createStore = (rootReducer, initialState = {}, enhancer) => {
//   const stateIterator = stateGenerator(rootReducer, initialState);
//   stateIterator.next();

//   const dispatch = action => {
//     stateIterator.next(action);
//     stateIterator.next(NEXT);
//     return action;
//   };

//   const selectState = (selector = defaultSelector) => {
//     const state = stateIterator.next(SELECT).value;
//     stateIterator.next(NEXT);
//     return selector(state);
//   };

//   if (enhancer) {
//     return {
//       ...enhancer(createStore)(rootReducer, initialState),
//       dispatch,
//       selectState,
//     };
//   }

//   return { dispatch, selectState };
// };

const calculateNextState = rootReducer => currentState => {
  return {
    selectState: selector =>
      selector ? selector(currentState) : defaultSelector(currentState),
    next: action => {
      const nextState = rootReducer(currentState, action);
      calculateNextState(rootReducer)(nextState);
    },
  };
};

const createStoreWithState = calculateNextState => (
  rootReducer,
  initialState = {},
  enhancer
) => {
  const { selectState, next } = calculateNextState(rootReducer)(initialState);

  const dispatch = action => {
    next(action);
    return action;
  };

  return { dispatch, selectState };
};

const createStore = createStoreWithState(calculateNextState);

export { createStore };
