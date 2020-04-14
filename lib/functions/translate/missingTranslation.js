const missingTranslation = (scope, languageTag, delimiter) => {
  const scopeParts = scope
    .split(delimiter)
    .filter(part => part && part !== languageTag);

  const displayValue =
    scopeParts.length <= 1
      ? [languageTag, ...scopeParts, 'undefined'].join(delimiter)
      : scope;

  return `missing translation for ${displayValue}`;
};

export default missingTranslation;
