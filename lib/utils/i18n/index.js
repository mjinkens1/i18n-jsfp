const getBaseLanguageTag = tag => {
  return tag.split('-')[0];
};

const validateLanguageTag = (tag, validTags) => {
  return validTags.includes(tag);
};

export { getBaseLanguageTag, validateLanguageTag };
