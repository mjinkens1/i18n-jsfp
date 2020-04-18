const types = {
  ADD_TRANSLATIONS: 'ADD_TRANSLATIONS',
  INCREMENT_SCOPE_PREFIX_ID: 'INCREMENT_SCOPE_PREFIX_ID',
};

const creators = {
  addTranslations: payload => ({
    type: types.ADD_TRANSLATIONS,
    payload,
  }),
  incrementScopePrefixId: payload => ({
    type: types.INCREMENT_SCOPE_PREFIX_ID,
  }),
};

export default { creators, types };
