import { dispatch } from '../.';

const types = {
  SET_CONFIGURATION: 'SET_CONFIGURATION',
};

const creators = {
  setConfiguration: payload =>
    dispatch({
      type: types.SET_CONFIGURATION,
      payload,
    }),
};

export default { creators, types };
