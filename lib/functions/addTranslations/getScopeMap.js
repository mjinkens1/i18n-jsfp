const getScopeMap = (scope, translations, delimiter) => {
  const translationKeys = Object.keys(translations);

  return translationKeys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: [scope, key].filter(part => part).join(delimiter),
    }),
    {}
  );
};

export default getScopeMap;
