import { array, boolean, number, object, string } from 'yup';

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
    setLocales(locales);
  } catch ({ message }) {
    // Catch yup error and throw our own error with better info
    throw createError(message);
  }
};

export default setLocales;
