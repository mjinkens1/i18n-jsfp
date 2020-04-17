import getLangTagFallbacks from './getLangTagFallbacks';

// If no translation, try again with progressively truncated tags if useStrictLanguageTag is not enabled.
// Implements BCP 47 lookup algorithm https://tools.ietf.org/html/rfc4647#section-3.4
const getFallbackTranslation = (
  translate,
  scope,
  scopeLanguageTag,
  options
) => {
  const fallbacks = getLangTagFallbacks(scopeLanguageTag);

  const fallbackIndex = Number.isInteger(fallbackIndex)
    ? fallbackIndex - 1
    : fallbacks.length - 1;

  const useFallback = Boolean(fallbackIndex);
  const langTag = fallbacks[fallbackIndex];

  return translate(scope, {
    ...options,
    langTag,
    fallbackIndex,
    useFallback,
  });
};

export default getFallbackTranslation;
