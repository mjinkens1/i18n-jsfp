import actions from './actions';
import produce from 'immer';

// Utils
import utils from '../../utils';

const { types } = actions;

// Initial state
export const initialState = {
  scopePrefixId: {},
};

// Reducer functions
const addTranslations = (draft, { languageTag, translations }) => {
  draft = utils.merge(draft, { [languageTag]: translations });

  draft.scopePrefixId[languageTag] =
    (draft.scopePrefixId[languageTag] || 0) + 1;
};

const translationsReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;

    switch (type) {
      case types.ADD_TRANSLATIONS:
        return addTranslations(draft, payload);

      // no default
    }
  });

export default translationsReducer;
