import actions from './actions';
import produce from 'immer';

const { types } = actions;

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
const setCurrentLocale = (draft, payload) => {
  draft.currentLocale = payload;
};

const setFallbackLocale = (draft, payload) => {
  draft.fallbackLocale = payload;
};

const setLocales = (draft, payload) => {
  draft.currentLocale = payload;
};

const localeReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;

    switch (type) {
      case types.SET_CURRENT_LOCALE:
        return setCurrentLocale(draft, payload);

      case types.SET_FALLBACK_LOCALE:
        return setFallbackLocale(draft, payload);

      case types.SET_LOCALES:
        return setLocales(draft, payload);

      // no default
    }
  });

export default localeReducer;
