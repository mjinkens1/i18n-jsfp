import { array, boolean, object, of, string } from 'yup';

// Redux
import store, { actions } from '../../redux';

// Utils
import { createError, optionError, typeError } from '../../utils';

const validDelimiters = '"#", "&", ",", "-", ".", ":", ";", "@", "_", "*", "+"';
const delimitersRegex = /^(#|&|,|\-|\.|:|;|@|_|\*|\+){1}$/g;

const delimiterTypeError = typeError('scopeDelimiter', 'string');
const delimiterOptionError = optionError('scopeDelimiter', validDelimiters);
const prefixTypeError = typeError('scopePrefix', 'string');
const autoPrefixTypeError = typeError('useAutoScopePrefix', 'boolean');
const strictTagTypeError = typeError('useStrictLanguageTag', 'string');
const tagsTypeError = typeError('validLanguageTags', 'array[string]');

const schema = object({
  scopeDelimiter: string(delimiterTypeError).matches(
    delimitersRegex,
    delimiterOptionError
  ),
  scopePrefix: string(prefixTypeError),
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
