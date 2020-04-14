// Functions
import setLocale from '../setLocale';

// Redux
import { actions } from '../../redux';

const setCurrentLocale = locale => {
  setLocale(locale, actions.setCurrentLocale);
};

export default setCurrentLocale;
