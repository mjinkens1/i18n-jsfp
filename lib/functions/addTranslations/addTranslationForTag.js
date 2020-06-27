// Constants
import { SCOPE_DELIMITER } from '../../constants';

// Functions
import getScopeMap from './getScopeMap';
import nestDelimitedScope from './nestDelimitedScope';

// Redux
import { actions } from '../../redux';

const addTranslationsForTag = (scope, languageTag, translations, options) => {
  const nestedTranslations = nestDelimitedScope(scope, translations, options);
  const scopeMap = getScopeMap(scope, translations, SCOPE_DELIMITER);

  actions.addTranslations({
    languageTag,
    translations: nestedTranslations,
  });

  return scopeMap;
};

export default addTranslationsForTag;
