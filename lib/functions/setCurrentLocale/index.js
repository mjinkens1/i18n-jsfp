import store, { actions } from '../../redux';
import { boolean, object, string } from 'yup';

const validationSchema = object({
  languageCode: string().required('LANG_CODE'),
  scriptCode: string('SCRIPT_CODE'),
  countryCode: string().required('COUNTRY_CODE'),
  languageTag: string().required('LANG_TAG'),
  isRTL: boolean('RTL'),
});

const setCurrentLocale = locale => {
  try {
    const isValidLocale = validationSchema.validateSync(locale, {
      abortEarly: false,
    });
    const action = actions.setCurrentLocale(locale);
    store.dispatch(action);
  } catch (error) {
    console.warn(error);
  }
};

export default setCurrentLocale;
