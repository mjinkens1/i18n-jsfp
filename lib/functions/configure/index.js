import { boolean, object } from 'yup';

// Redux
import { actions } from '../../redux';

// Utils
import { createError, typeError } from '../../utils';

const autoPrefixTypeError = typeError('useAutoScopePrefix', 'boolean');
const strictTagTypeError = typeError('useStrictLanguageTag', 'string');
const schema = object({
  useAutoScopePrefix: boolean(autoPrefixTypeError),
  useStrictLanguageTag: boolean(strictTagTypeError),
});

const configure = configuration => {
  try {
    schema.validateSync(configuration);
    actions.setConfiguration(configuration);
  } catch ({ message }) {
    throw createError(message);
  }
};

export default configure;
