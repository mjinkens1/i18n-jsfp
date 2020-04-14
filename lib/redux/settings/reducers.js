import actions from './actions';
import produce from 'immer';

const { types } = actions;

// Initial state
export const initialState = {
  scopeDelimiter: '.',
  scopePrefix: 'I18N_',
  useAutoScopePrefix: true,
  useStrictLanguageTag: false,
};

// Reducer functions
const setConfiguration = (draft, payload) => {
  draft = { ...draft, ...payload };
};

const settingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;

    switch (type) {
      case types.SET_CONFIGURATION:
        return setConfiguration(draft, payload);

      // no default
    }
  });

export default settingsReducer;
