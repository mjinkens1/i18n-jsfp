// Functions
import getPrefixedScope from './getPrefixedScope';
import getScopeMap from './getScopeMap';
import nestDelimitedScope from './nestDelimitedScope';

// Redux
import store, { actions } from '../../redux';

// Utils
import { createError, isPlainObject, validateLanguageTag } from '../../utils';

const selector = state => ({
  scopeDelimiter: state.settings.scopeDelimiter,
  scopePrefix: state.settings.scopePrefix,
  scopePrefixId: state.translations.scopePrefixId,
  useAutoScopePrefix: state.settings.useAutoScopePrefix,
  validTags: state.settings.validLanguageTags,
  validateLanguageTags: state.settings.validateLanguageTags,
});

const addTranslations = (...args) => {
  const [languageTag, arg2, arg3, arg4] = args;

  if (typeof languageTag !== 'string') {
    throw createError(
      'You must pass a language tag (e.g. "en-US") as the first argument to addTranslations'
    );
  }

  // If a string is supplied as the second arg, take that as the scope, otherwise it is the translations object
  const useScope = typeof arg2 === 'string';

  const state = store.selectState(selector);
  const scope = getPrefixedScope(arg2, state, languageTag);
  const translations = useScope ? arg3 : arg2;
  const options = useScope ? arg4 : arg3;

  if (!isPlainObject(translations)) {
    throw createError(
      'You must pass a plain object for the "translations" parameter of addTranslations'
    );
  }

  if (state.validateLanguageTags) {
    const tagValid = validateLanguageTag(languageTag, state.validTags);

    if (!tagValid) {
      throw createError(
        `Invalid language tag "${languageTag}" passed to addTranslations. If this is the tag you meant to add, you can either add it to the list of valid tags, of turn off language tag validation when configuring the library.`
      );
    }
  }

  const nestedTranslations = nestDelimitedScope(
    scope,
    state.scopeDelimiter,
    translations,
    options
  );

  const scopeMap = getScopeMap(scope, translations, state.scopeDelimiter);

  const action = actions.addTranslations({
    languageTag,
    scope,
    translations: nestedTranslations,
  });

  store.dispatch(action);
  return scopeMap;
};

export default addTranslations;
