import { boolean, object, string } from 'yup';

// Utils
import { createError } from '../../utils';

const schema = object({
  languageCode: string().required(),
  scriptCode: string(),
  countryCode: string().required(),
  languageTag: string().required(),
  isRTL: boolean(),
});

const localeError = `Invalid locale, locales must be an object of the shape:
  {
    languageCode: string.required,
    scriptCode: string.optional,
    countryCode: string.required,
    languageTag: string.required,
    isRTL: boolean.optional,
  }
`;

const setLocale = (locale, createAction) => {
  try {
    schema.validateSync(locale);
    createAction(locale);
  } catch (error) {
    // Catch yup error and throw our own error with better info
    throw createError(localeError);
  }
};

export default setLocale;
