import { arrayOf, boolean, object, string } from 'yup';

// Redux
import { actions } from '../../redux';

// Utils
import { createError, optionError, typeError } from '../../utils';

const validDelimiters = '"#", "&", ",", "-", ".", ":", ";", "@", "_", "*", "+"';
const delimitersRegex = /^(#|&|,|\-|\.|:|;|@|_|\*|\+){1}$/g;
const prefixRegex = /./g;
const languageTagRegex = /./g;

const unknownOption = field => {
  console.log(field);
};

const delimiterTypeError = typeError('scopeDelimiter', 'string');
const delimiterOptionError = optionError('scopeDelimiter', validDelimiters);
const prefixTypeError = typeError('scopePrefix', 'string');
const autoPrefixTypeError = typeError('useAutoScopePrefix', 'boolean');
const strictTagTypeError = typeError('useStrictLanguageTag', 'string');
const tagsTypeError = typeError('validLanguageTags', 'array[string]');
const validateTagsTypeError = typeError('validateLanguageTags', 'boolean');

const validationSchema = object({
  scopeDelimiter: string(delimiterTypeError).matches(
    delimitersRegex,
    delimiterOptionError
  ),
  scopePrefix: string(prefixTypeError),
  useAutoScopePrefix: boolean(autoPrefixTypeError),
  useStrictLanguageTag: boolean(strictTagTypeError),
  validLanguageTags: arrayOf(string(tagsTypeError)),
  validateLanguageTags: boolean(validateTagsTypeError),
}).noUnknown(true, unknownOption);

const configure = configuration => {
  try {
    validationSchema.validate(configuration);
    actions.setConfiguration(configuration);
  } catch (error) {
    console.log(error);
  }
};
