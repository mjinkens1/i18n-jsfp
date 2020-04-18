// Constants
import { OPTIONS_KEY, SCOPE_DELIMITER } from '../../constants';

// Functions
import getFallbackTranslation from './getFallbackTranslation';
import missingTranslation from './missingTranslation';

// Redux
import { selectState } from '../../redux';

// Utils
import { getIn } from '../../utils';

const selector = state => ({
  languageTag: state.locale.currentLocale.languageTag,
  translations: state.translations,
  useStrictLanguageTag: state.settings.useStrictLanguageTag,
});

const translate = (scope = '', options = { useFallback: true }) => {
  const state = selectState(selector);
  const scopeLanguageTag = options.langTag || state.languageTag;

  const completeScope = [scopeLanguageTag, scope]
    .filter(part => part)
    .join(SCOPE_DELIMITER);

  const optionsScope = [
    ...completeScope.split(SCOPE_DELIMITER).slice(0, -1),
    OPTIONS_KEY,
  ].join(SCOPE_DELIMITER);

  const defaultTranslation =
    options.default ||
    missingTranslation(completeScope, scopeLanguageTag, state.scopeDelimiter);

  const translation = getIn(state.translations, completeScope);
  const defaultOptions = getIn(state.translations, optionsScope);

  if (!translation && !state.useStrictLanguageTag && options.useFallback) {
    return getFallbackTranslation(translate, scope, scopeLanguageTag, options);
  }

  return translation ?? defaultTranslation;
};

export default translate;
