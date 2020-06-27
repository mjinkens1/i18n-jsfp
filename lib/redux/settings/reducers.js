import actions from './actions';

// Utils
import { merge } from '../../utils';

const { types } = actions;

// Initial state
export const initialState = {
  useAutoScopePrefix: true,
  useStrictLanguageTag: false,
};

// Reducer functions
const setConfiguration = (state, payload) => {
  return merge(state, payload);
};

const settingsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_CONFIGURATION:
      return setConfiguration(state, payload);

    default:
      return state;
  }
};

export default settingsReducer;
