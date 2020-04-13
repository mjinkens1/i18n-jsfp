// Functions
import addTranslations from '../addTranslations';

// Utils
import utils from '../../utils';

const asDefaultOptions = options => options || {};

const addTranslationsMulti = (...args) => {
  const [translations, arg2, arg3] = args;
  const languageTags = Object.keys(translations);

  const useScope = typeof arg2 === 'string';
  const scope = useScope && arg2;
  const options = useScope ? asDefaultOptions(arg3) : asDefaultOptions(arg2);

  const scopeMaps = languageTags.map(tag => {
    const option = options[tag];
    const restArgs = useScope ? [arg2, option] : [option];

    return addTranslations(tag, translations[tag], ...restArgs);
  });

  // Merge all scope maps, this will different keys for different translation objects
  return utils.merge(...scopeMaps);
};

export default addTranslationsMulti;
