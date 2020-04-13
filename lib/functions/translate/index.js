// Constants
import constants from '../../constants';

// Redux
import store from '../../redux';

// Utils
import utils from '../../utils';

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

const selector = state => ({
  languageTag: state.locale.currentLocale.languageTag,
  scopeDelimiter: state.settings.scopeDelimiter,
  translations: state.translations,
  useStrictLanguageTag: state.settings.useStrictLanguageTag,
});

const translate = (scope = '', options = {}) => {
  const state = store.selectState(selector);
  const delimiter = state.scopeDelimiter;
  const scopeLanguageTag = options.langTag || state.languageTag;

  const completeScope = [scopeLanguageTag, scope]
    .filter(part => part)
    .join(delimiter);

  const optionsScope = [
    ...completeScope.split(delimiter).slice(0, -1),
    constants.OPTIONS_KEY,
  ].join(delimiter);

  const defaultTranslation =
    options.default ||
    missingTranslation(completeScope, scopeLanguageTag, state.scopeDelimiter);

  const translation = utils.get(state.translations, completeScope);
  const defaultOptions = utils.get(state.translations, optionsScope);

  // Try again with the base langauge tag if useStrictLanguageTag is not enabled
  if (!translation && !state.useStrictLanguageTag && !options.retry) {
    const baseLanguageTag = utils.getBaseLanguageTag(scopeLanguageTag);

    return translate(scope, {
      ...options,
      langTag: baseLanguageTag,
      retry: true,
    });
  }

  return (typeof translation === 'string' && translation) || defaultTranslation;
};

export default translate;
