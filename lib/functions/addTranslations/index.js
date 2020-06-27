// Constants
import { SCOPE_PREFIX } from '../../constants';

// Functions
import addTranslationForTag from './addTranslationForTag';

// Redux
import { actions } from '../../redux';

// Utils
import { createError, isPlainObject, merge, withState } from '../../utils';

const objectTypeError =
  'You must pass a plain object for the "translations"' +
  ' parameter of addTranslations';

const selector = ({ translations }) => translations.scopePrefixId;

const addTranslations = scopePrefixId => (arg1, arg2 = {}, arg3 = {}) => {
  /* 
    If a string is supplied as the first arg, take that as the scope,
    otherwise it is the translations object
  */
  const useCustomScope = typeof arg1 === 'string';
  const scope = useCustomScope ? arg1 : `${SCOPE_PREFIX}${scopePrefixId}`;
  const translations = useCustomScope ? arg2 : arg1;
  const optionsForTag = useCustomScope ? arg3 : arg2;

  if (!isPlainObject(translations) || !Object.keys(translations).length) {
    throw createError(objectTypeError);
  }

  const languageTags = Object.keys(translations);

  const scopeMaps = languageTags.map(tag => {
    const options = optionsForTag[tag];
    return addTranslationForTag(scope, tag, translations[tag], options);
  });

  /* 
    Bump prefix ID to create new scope next time function is called
    if not using custom scope 
  */
  if (!useCustomScope) {
    actions.incrementScopePrefixId();
  }

  if (scopeMaps?.length === 1) {
    return scopeMaps[0];
  }
  /* 
    Merge all scope maps so we ensure any different keys between different 
    translation objects make it into the scope map.
  */
  return merge(...scopeMaps);
};

// Export decoupled functions for testing
export { addTranslations, selector };
export default withState(selector)(addTranslations);
