const types = {
  ADD_VALID_LANGUAGE_TAG: 'ADD_VALID_LANGUAGE_TAG',
  SET_CONFIGURATION: 'SET_CONFIGURATION',
  SET_VALID_LANGUAGE_TAGS: 'SET_VALID_LANGUAGE_TAGS',
};

const creators = {
  addValidLanguageTag: payload => ({
    type: types.ADD_VALID_LANGUAGE_TAG,
    payload,
  }),
  setConfiguration: payload => ({
    type: types.SET_CONFIGURATION,
    payload,
  }),
  setValidLanguageTags: payload => ({
    type: types.SET_VALID_LANGUAGE_TAGS,
    payload,
  }),
};

export default { creators, types };
