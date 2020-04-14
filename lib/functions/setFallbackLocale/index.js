// Functions
import setLocale from '../setLocale';

// Redux
import { actions } from '../../redux';

const setFallbackLocale = locale => {
  setLocale(locale, actions.setFallbackLocale);
};

export default setFallbackLocale;
