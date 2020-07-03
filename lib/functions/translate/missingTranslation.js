import { SCOPE_DELIMITER } from '../../constants';

const missingTranslation = (scope, languageTag) => {
  const scopeParts = scope
    .split(SCOPE_DELIMITER)
    .filter(part => part && part !== languageTag);

  const displayValue =
    scopeParts.length <= 1
      ? [languageTag, ...scopeParts, 'undefined'].join(SCOPE_DELIMITER)
      : scope;

  return `[missing translation for ${displayValue}]`;
};

export default missingTranslation;
