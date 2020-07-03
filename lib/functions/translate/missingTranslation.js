import { SCOPE_DELIMITER, SCOPE_PREFIX } from '../../constants';

const missingTranslation = (scope, languageTag) => {
  const scopeParts = scope
    .split(SCOPE_DELIMITER)
    .filter(part => part && part !== languageTag);

  const displayValue =
    scopeParts.length <= 1
      ? [languageTag, ...scopeParts, 'undefined'].join(SCOPE_DELIMITER)
      : scope;

  const prefixRegex = new RegExp(`${SCOPE_PREFIX}\\d+${SCOPE_DELIMITER}`);
  const strippedPrefix = displayValue.replace(prefixRegex, '');

  return `[missing translation for ${strippedPrefix}]`;
};

export default missingTranslation;
