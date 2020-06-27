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
