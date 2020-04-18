import actions from './actions';
import produce from 'immer';

// Utils
import { merge } from '../../utils';
const { types } = actions;

// Initial state
export const initialState = {
  scopePrefixId: 0,
};

// Reducer functions
const addTranslations = (state, { languageTag, translations }) => {
  return merge(state, { [languageTag]: translations });
};

const incrementScopePrefixId = state => {
  return merge(state, { scopePrefixId: state.scopePrefixId + 1 });
};

const translationsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TRANSLATIONS:
      return addTranslations(state, payload);

    case types.INCREMENT_SCOPE_PREFIX_ID:
      return incrementScopePrefixId(state);

    default:
      return state;
  }
};

export default translationsReducer;
