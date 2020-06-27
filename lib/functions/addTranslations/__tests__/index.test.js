import { addTranslations as addTranslationsPartial, selector } from '../.';

// Utils
import { withMockState } from '../../../testUtils';

// 'en-GB': {
//   hi: 'cheerio'
// },
// es: {
//   hi: 'Hola'
// }

const getAddTranslationsFunction = mockState => {
  return withMockState(mockState, selector)(addTranslationsPartial);
};

describe('Function addTranslations', () => {
  test('it returns the correct default scope map for a single langauge tag', () => {
    const mockState = {
      translations: {
        scopePrefixId: 0,
      },
    };

    const translations = {
      en: {
        hi: 'Hi',
      },
    };

    const addTranslations = getAddTranslationsFunction(mockState);
    const scopeMap = addTranslations(translations);
    expect(scopeMap).toEqual({ hi: '__TRANSLATIONS__0.hi' });
  });

  test('it returns the correct default scope map for multiple langauge tags', () => {
    const mockState = {
      translations: {
        scopePrefixId: 0,
      },
    };

    const translations = {
      en: {
        hi: 'Hi',
      },
      es: {
        hi: 'Hola',
      },
    };

    const addTranslations = getAddTranslationsFunction(mockState);
    const scopeMap = addTranslations(translations);
    expect(scopeMap).toEqual({ hi: '__TRANSLATIONS__0.hi' });
  });

  test('it returns the correct custom scope map', () => {
    const mockState = {
      translations: {
        scopePrefixId: 0,
      },
    };

    const translations = {
      en: {
        hi: 'Hi',
      },
      es: {
        hi: 'Hola',
      },
    };

    const addTranslations = getAddTranslationsFunction(mockState);
    const scopeMap = addTranslations('screen1.module1', translations);
    expect(scopeMap).toEqual({ hi: 'screen1.module1.hi' });
  });

  test('it throws an error when an object is not passed for the translations argument', () => {
    const mockState = {
      translations: {
        scopePrefixId: 0,
      },
    };

    expect(() => {
      const addTranslations = getAddTranslationsFunction(mockState);
      addTranslations(undefined);
    }).toThrow(
      Error(
        '[i18n-jsfp] You must pass a plain object for the "translations" parameter of addTranslations'
      )
    );
  });
});
