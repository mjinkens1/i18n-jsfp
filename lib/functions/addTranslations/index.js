// Constants
import { SCOPE_PREFIX } from '../../constants';

// Functions
import addTranslationForTag from './addTranslationForTag';

// Redux
import { actions } from '../../redux';

// Utils
import { createError, isPlainObject, mergeAll, withState } from '../../utils';

const objectTypeError =
  'You must pass a plain object for the "translations"' +
  ' parameter of addTranslations';

const selector = ({ translations }) => translations.scopePrefixId;

const addTranslations = scopePrefixId => (translations, optionsForTag = {}) => {
  const scope = `${SCOPE_PREFIX}${scopePrefixId}`;

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
  actions.incrementScopePrefixId();

  if (scopeMaps?.length === 1) {
    return scopeMaps[0];
  }
  /* 
    Merge all scope maps so we ensure any different keys between different 
    translation objects make it into the scope map.
  */

  return mergeAll(scopeMaps);
};

// Export decoupled functions for testing
export { addTranslations, selector };
export default withState(selector)(addTranslations);
