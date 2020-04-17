// Constants
import constants from '../../constants';

// Functions
import getFallbackTranslation from './getFallbackTranslation';
import missingTranslation from './missingTranslation';

// Redux
import store from '../../redux';

// Utils
import { getIn } from '../../utils';

const selector = state => ({
  languageTag: state.locale.currentLocale.languageTag,
  scopeDelimiter: state.settings.scopeDelimiter,
  translations: state.translations,
  useStrictLanguageTag: state.settings.useStrictLanguageTag,
});

const translate = (scope = '', options = { useFallback: true }) => {
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

  if (!translation && !state.useStrictLanguageTag && options.useFallback) {
    return getFallbackTranslation(translate, scope, scopeLanguageTag, options);
  }
  store.dispatch({
    type: 'TRANSLATE',
    payload: translation ?? defaultTranslation,
  });
  return translation ?? defaultTranslation;
};

export default translate;
