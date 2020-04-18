// Constants
import { SCOPE_PREFIX } from '../../constants';

// Functions
import addTranslationForTag from '../addTranslationForTag';

// Redux
import store, { actions, selectState } from '../../redux';

// Utils
import { isPlainObject, merge } from '../../utils';

const objectTypeError =
  'You must pass a plain object for the "translations"' +
  ' parameter of addTranslations';

const selectPrefixId = ({ translations }) => translations.scopePrefixId;

const addTranslations = (arg1, arg2 = {}, arg3 = {}) => {
  const scopePrefixId = selectState(selectPrefixId);

  /* 
    If a string is supplied as the first arg, take that as the scope,
    otherwise it is the translations object
  */
  const useCustomScope = typeof arg1 === 'string';
  const scope = useCustomScope ? arg1 : `${SCOPE_PREFIX}${scopePrefixId}`;
  const translations = useCustomScope ? arg2 : arg1;
  const optionsForTag = useCustomScope ? arg3 : arg2;
  const languageTags = Object.keys(translations);

  if (!isPlainObject(translations)) {
    throw createError(objectTypeError);
  }

  const scopeMaps = languageTags.map(tag => {
    const options = optionsForTag[tag];
    return addTranslationForTag(scope, tag, translations[tag], options);
  });

  /* 
    Bump prefix ID to create new scope next time function is called
    if not using custom scope 
  */
  if (!useCustomScope) {
    store.dispatch(actions.incrementScopePrefixId());
  }

  /* 
    Merge all scope maps so we ensure any different keys between different 
    translation objects make it into the scope map.
  */
  return merge(...scopeMaps);
};

export default addTranslations;
