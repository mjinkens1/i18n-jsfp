import { dispatch } from '../.';

const types = {
  SET_CURRENT_LOCALE: 'SET_CURRENT_LOCALE',
  SET_FALLBACK_LOCALE: 'SET_FALLBACK_LOCALE',
  SET_LOCALES: 'SET_LOCALES',
};

const creators = {
  setCurrentLocale: payload =>
    dispatch({
      type: types.SET_CURRENT_LOCALE,
      payload,
    }),
  setFallbackLocale: payload =>
    dispatch({
      type: types.SET_FALLBACK_LOCALE,
      payload,
    }),
  setLocales: payload =>
    dispatch({
      type: types.SET_LOCALES,
      payload,
    }),
};

export default { creators, types };
