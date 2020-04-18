import { array, boolean, object, of, string } from 'yup';

// Redux
import store, { actions } from '../../redux';

// Utils
import { createError, optionError, typeError } from '../../utils';

const autoPrefixTypeError = typeError('useAutoScopePrefix', 'boolean');
const strictTagTypeError = typeError('useStrictLanguageTag', 'string');

const schema = object({
  useAutoScopePrefix: boolean(autoPrefixTypeError),
  useStrictLanguageTag: boolean(strictTagTypeError),
});

const configure = configuration => {
  try {
    schema.validateSync(configuration);
    const action = actions.setConfiguration(configuration);
    store.dispatch(action);
  } catch ({ message }) {
    throw createError(message);
  }
};

export default configure;
