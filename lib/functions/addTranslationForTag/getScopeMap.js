// Constants
import { SCOPE_DELIMITER } from '../../constants';

const getScopeMap = (scope, translations) => {
  const translationKeys = Object.keys(translations);

  return translationKeys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: [scope, key].filter(part => part).join(SCOPE_DELIMITER),
    }),
    {}
  );
};

export default getScopeMap;
