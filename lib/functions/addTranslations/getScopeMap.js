// Constants
import { SCOPE_DELIMITER } from '../../constants';

// Redux
import { actions } from '../../redux';

// Utils
import { is } from '../../utils';

const wrapPrefix = (scope, languageTag, key, func) => (...args) => {
  actions.addTranslations({
    languageTag,
    translations: { [scope]: { [key]: func(...args) } },
  });
  return [scope, key].filter(part => part).join(SCOPE_DELIMITER);
};

const getScopeMap = (scope, translations, languageTag) => {
  return Object.entries(translations).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: is(Function, value)
        ? wrapPrefix(scope, languageTag, key, value)
        : [scope, key].filter(part => part).join(SCOPE_DELIMITER),
    };
  }, {});
};

export default getScopeMap;
