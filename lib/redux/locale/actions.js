const types = {
  SET_CURRENT_LOCALE: 'SET_CURRENT_LOCALE',
  SET_FALLBACK_LOCALE: 'SET_FALLBACK_LOCALE',
  SET_LOCALES: 'SET_LOCALES',
};

const creators = {
  setCurrentLocale: payload => ({
    type: types.SET_CURRENT_LOCALE,
    payload,
  }),
  setFallbackLocale: payload => ({
    type: types.SET_FALLBACK_LOCALE,
    payload,
  }),
  setLocales: payload => ({
    type: types.SET_LOCALES,
    payload,
  }),
};

export default { creators, types };
