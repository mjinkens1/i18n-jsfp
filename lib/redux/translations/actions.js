const types = {
  ADD_TRANSLATIONS: 'ADD_TRANSLATIONS',
};

const creators = {
  addTranslations: payload => ({
    type: types.ADD_TRANSLATIONS,
    payload,
  }),
};

export default { creators, types };
