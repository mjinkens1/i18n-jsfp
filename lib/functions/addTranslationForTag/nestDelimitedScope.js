// Constants
import { OPTIONS_KEY, SCOPE_DELIMITER } from '../../constants';

// Utils
import { reduceRight } from '../../utils';

const nestDelimitedScope = (scope, translations, options = {}) => {
  const scopeKeys = scope.split(SCOPE_DELIMITER);

  const reducer = (value, key, index) => {
    const optionsObject =
      index === scopeKeys.length - 1 ? { [OPTIONS_KEY]: options } : {};

    return {
      [key]: { ...value, ...optionsObject },
    };
  };

  return reduceRight(scopeKeys, reducer, translations);
};

export default nestDelimitedScope;
