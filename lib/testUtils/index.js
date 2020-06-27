const selectState = (mockState, selector) => {
  return selector(mockState);
};

const withMockState = (mockState, selector) => {
  return wrappedFunction => {
    return wrappedFunction(selectState(mockState, selector));
  };
};

export { withMockState };
