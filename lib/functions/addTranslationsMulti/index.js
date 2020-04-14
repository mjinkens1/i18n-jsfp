// Functions
import addTranslations from '../addTranslations';

// Utils
import { merge } from '../../utils';

const asDefaultOptions = options => options || {};

const addTranslationsMulti = (arg1, arg2, arg3) => {
  const useScope = typeof arg1 === 'string';
  const translations = useScope ? arg2 : arg1;
  const scope = useScope && arg1;
  const options = useScope ? asDefaultOptions(arg3) : asDefaultOptions(arg2);

  const languageTags = Object.keys(translations);

  const scopeMaps = languageTags.map(tag => {
    const option = options[tag];
    const restArgs = useScope ? [arg2, option] : [option];

    return addTranslations(tag, translations[tag], ...restArgs);
  });

  // Merge all scope maps so we ensure any different keys between different translation objects make it into the scope map.
  return merge(...scopeMaps);
};

export default addTranslationsMulti;
