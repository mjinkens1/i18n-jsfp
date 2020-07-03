// Constants
import { SCOPE_DELIMITER } from '../../constants';

// Functions
import getFallbackTranslation from './getFallbackTranslation';
import missingTranslation from './missingTranslation';

// Utils
import { getIn, withState } from '../../utils';

const defaultScope = '';
const defaultOptions = { useFallback: true };

const selector = state => ({
  languageTag: state.locale.currentLocale.languageTag,
  translations: state.translations,
  useStrictLanguageTag: state.settings.useStrictLanguageTag,
});

const translate = state => (scope = defaultScope, options = defaultOptions) => {
  const scopeLanguageTag = options.langTag || state.languageTag;

  const completeScope = [scopeLanguageTag, scope]
    .filter(part => part)
    .join(SCOPE_DELIMITER);

  const defaultTranslation =
    options.default ||
    missingTranslation(completeScope, scopeLanguageTag, state.scopeDelimiter);

  const translation = getIn(state.translations, completeScope);

  if (!translation && !state.useStrictLanguageTag && options.useFallback) {
    return getFallbackTranslation(
      withState(selector)(translate),
      scope,
      scopeLanguageTag,
      options
    );
  }

  // Missing translations come back as objects from state query,
  // if translation is not a string, return missing translation message
  return (typeof translation === 'string' && translation) || defaultTranslation;
};

// Export decoupled functions for testing
export { translate, selector };
export default withState(selector)(translate);
