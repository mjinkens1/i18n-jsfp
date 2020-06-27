import { combineReducers } from 'redux';

// Config
import configureStore from './__config__';

// Utils
import { createError, isFunction } from '../utils';

// Actions
import localeActions from './locale/actions';
import settingsActions from './settings/actions';
import translationActions from './translations/actions';

// Reducers
import localeReducer from './locale/reducers';
import settingsReducer from './settings/reducers';
import translationReducer from './translations/reducers';

export const actions = {
  ...localeActions.creators,
  ...settingsActions.creators,
  ...translationActions.creators,
};

export const actionTypes = {
  ...localeActions.types,
  ...settingsActions.types,
  ...translationActions.types,
};

const rootReducer = combineReducers({
  locale: localeReducer,
  settings: settingsReducer,
  translations: translationReducer,
});

const { dispatch, getState } = configureStore(rootReducer);
const defaultSelector = state => state;

const selectState = (selector = defaultSelector) => {
  if (!isFunction(selector)) {
    throw createError('You must pass a valid selector function to selectState');
  }
  return selector(getState());
};

export { dispatch, getState, selectState };
