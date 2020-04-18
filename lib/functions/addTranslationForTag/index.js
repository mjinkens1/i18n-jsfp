// Constants
import { SCOPE_DELIMITER } from '../../constants';

// Functions
import getScopeMap from './getScopeMap';
import nestDelimitedScope from './nestDelimitedScope';

// Redux
import store, { actions } from '../../redux';

const addTranslationsForTag = (scope, languageTag, translations, options) => {
  const nestedTranslations = nestDelimitedScope(scope, translations, options);
  const scopeMap = getScopeMap(scope, translations, SCOPE_DELIMITER);

  const action = actions.addTranslations({
    languageTag,
    translations: nestedTranslations,
  });

  store.dispatch(action);
  return scopeMap;
};

export default addTranslationsForTag;
