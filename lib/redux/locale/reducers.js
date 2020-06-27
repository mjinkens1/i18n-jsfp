import actions from './actions';

const { types } = actions;

// Utils
import { merge } from '../../utils';

// Initial state
export const initialState = {
  currentLocale: {
    countryCode: 'US',
    languageTag: 'en-US',
    languageCode: 'en',
  },
  fallbackLocale: {
    countryCode: 'US',
    languageTag: 'en-US',
    languageCode: 'en',
  },
  locales: [
    {
      countryCode: 'US',
      languageTag: 'en-US',
      languageCode: 'en',
    },
  ],
};

// Reducer functions
const setCurrentLocale = (state, payload) => {
  return merge(state, { currentLocale: payload });
};

const setFallbackLocale = (state, payload) => {
  return merge(state, { fallbackLocale: payload });
};

const setLocales = (state, payload) => {
  return merge(state, { locales: payload });
};

const localeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_CURRENT_LOCALE:
      return setCurrentLocale(state, payload);

    case types.SET_FALLBACK_LOCALE:
      return setFallbackLocale(state, payload);

    case types.SET_LOCALES:
      return setLocales(state, payload);

    default:
      return state;
  }
};

export default localeReducer;
