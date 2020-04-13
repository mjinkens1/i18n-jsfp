// Constants
import constants from '../../constants';

// Utils
import utils from '../../utils';

const nestDelimitedScope = (scope, delimiter, translations, options = {}) => {
  const scopeKeys = scope.split(delimiter);

  return utils.reduceRight(
    scopeKeys,
    (value, key) => ({ [key]: { ...value, [constants.OPTIONS_KEY]: options } }),
    translations
  );
};

export default nestDelimitedScope;
