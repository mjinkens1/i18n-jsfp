import store, { actions } from '../../redux';

const setCurrentLocale = locale => {
  const action = actions.setCurrentLocale(locale);
  store.dispatch(action);
};

export default setCurrentLocale;
