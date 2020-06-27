// Constants
import { OPTIONS_KEY, SCOPE_DELIMITER } from '../../constants';

// Utils
import { last, reduce } from '../../utils';

const nestDelimitedScope = (scope, translations, options = {}) => {
  const scopeKeys = scope.split(SCOPE_DELIMITER);

  const reducer = (acc, val) => {
    return {
      ...acc,
      [val]:
        val === last(scopeKeys)
          ? { ...translations, [OPTIONS_KEY]: options }
          : {},
    };
  };

  return reduce(reducer, {}, scopeKeys);
};

export default nestDelimitedScope;
