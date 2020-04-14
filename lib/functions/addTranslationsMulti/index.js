// Functions
import addTranslations from '../addTranslations';

// Utils
import { merge } from '../../utils';

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

  // Merge all scope maps so we ensure any different keys between different translation objects make it into the scope map.
  return merge(...scopeMaps);
};

export default addTranslationsMulti;
