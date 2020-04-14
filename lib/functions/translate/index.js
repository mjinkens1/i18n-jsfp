// Constants
import constants from '../../constants';

// Functions
import missingTranslation from './missingTranslation';

// Redux
import store from '../../redux';

// Utils
import { getIn, getBaseLanguageTag } from '../../utils';

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

  const translation = getIn(state.translations, completeScope);
  const defaultOptions = getIn(state.translations, optionsScope);

  // If no translation, try again with the base language tag if useStrictLanguageTag is not enabled
  if (!translation && !state.useStrictLanguageTag && !options.retry) {
    const baseLanguageTag = getBaseLanguageTag(scopeLanguageTag);

    return translate(scope, {
      ...options,
      langTag: baseLanguageTag,
      retry: true,
    });
  }

  return (typeof translation === 'string' && translation) || defaultTranslation;
};

export default translate;
