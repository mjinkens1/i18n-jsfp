import store, { actions } from '../../redux';
import { array, boolean, number, object, of, string } from 'yup';

// Redux
import actions from '../../redux';

// Utils
import { createError } from '../../utils';

const localeError = `Invalid locale, locales must be an object of the shape:
  {
    languageCode: string.required,
    scriptCode: string.optional,
    countryCode: string.required,
    languageTag: string.required,
    isRTL: boolean.optional,
  }
`;

const minLocalesError =
  'You must pass at least one locale to the setLocales function';

const localeSchema = object({
  languageCode: string().required(),
  scriptCode: string(),
  countryCode: string().required(),
  languageTag: string().required(),
  isRTL: boolean(),
  priority: number(),
});

const arraySchema = array()
  .of(localeSchema, localeError)
  .min(1, minLocalesError);

const setLocales = locales => {
  try {
    arraySchema.validateSync(locales);
    const action = actions.setLocales(locales);
    store.dispatch(action);
  } catch ({ message }) {
    // Catch yup error and throw our own error with better info
    throw createError(message);
  }
};

export default setLocales;
