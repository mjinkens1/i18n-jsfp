import actions from './actions';
import produce from 'immer';

// Utils
import utils from '../../utils';

// Default valid tags
import validLanguageTags from './languageTags.json';

const { types } = actions;

// Initial state
export const initialState = {
  scopeDelimiter: '.',
  scopePrefix: 'I18N_',
  useAutoScopePrefix: true,
  useStrictLanguageTag: false,
  validLanguageTags,
  validateLanguageTags: true,
};

// Reducer functions
const addValidLanguageTag = (draft, payload) => {
  draft.validLanguageTags = [...draft.validLanguageTags, payload];
};

const setConfiguration = (draft, payload) => {
  draft = utils.merge(draft, payload);
};

const setValidLanguageTags = (draft, payload) => {
  draft.validLanguageTags = payload;
};

const settingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;

    switch (type) {
      case types.ADD_VALID_LANGUAGE_TAG:
        return addValidLanguageTag(draft, payload);

      case types.SET_CONFIGURATION:
        return setScopeDelimiter(draft, payload);

      case types.SET_VALID_LANGUAGE_TAGS:
        return setValidLanguageTags(draft, payload);

      // no default
    }
  });

export default settingsReducer;
