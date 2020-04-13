const getPrefixedScope = (scope, state, languageTag) => {
  const prefixedScope = `${state.scopePrefix}${
    state.scopePrefixId[languageTag] || 0
  }`;

  if (typeof scope === 'string' && state.useAutoScopePrefix) {
    return [prefixedScope, scope].join(state.scopeDelimiter);
  }
  return state.useAutoScopePrefix ? prefixedScope : '';
};

export default getPrefixedScope;
