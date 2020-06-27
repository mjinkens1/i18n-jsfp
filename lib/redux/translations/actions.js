import { dispatch } from '../.';

const types = {
  ADD_TRANSLATIONS: 'ADD_TRANSLATIONS',
  INCREMENT_SCOPE_PREFIX_ID: 'INCREMENT_SCOPE_PREFIX_ID',
};

const creators = {
  addTranslations: payload =>
    dispatch({
      type: types.ADD_TRANSLATIONS,
      payload,
    }),
  incrementScopePrefixId: () =>
    dispatch({ type: types.INCREMENT_SCOPE_PREFIX_ID }),
};

export default { creators, types };
