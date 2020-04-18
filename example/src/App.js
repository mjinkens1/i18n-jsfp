import React from 'react';
import logo from './logo.svg';
import './App.css';

import { addTranslations, translate, setCurrentLocale } from 'i18n-jsfp';

const translations = {
  ar: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  az: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  en: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  es: {
    appJS: 'src/App.js',
    edit: 'Editar ',
    learnReact: 'Aprender React',
    saveToReload: ' y guardar para recargar.',
  },
  fr: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  hg: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  it: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  jp: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  kr: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  mg: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  ps: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  pg: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  ru: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  tu: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  uk: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  ch: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
  za: {
    appJS: 'src/App.js',
    edit: 'Edit ',
    learnReact: 'Learn React',
    saveToReload: ' and save to reload.',
  },
};

const strings = addTranslations(translations);

const locales = [
  {
    countryCode: 'US',
    languageTag: 'en-US',
    languageCode: 'en',
  },
  {
    countryCode: 'MX',
    languageTag: 'es-MX',
    languageCode: 'es',
  },
];

const reactLinks = {
  en: 'https://reactjs.org',
  es: 'https://es.reactjs.org/',
};

function* generator() {
  const maxIndex = locales.length - 1;
  let currentIndex = 0;

  while (true) {
    yield locales[currentIndex];
    currentIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
  }
}

const iterator = generator();

function App() {
  const [localeKey, setLocaleKey] = React.useState('en');

  React.useEffect(() => {
    const interval = setInterval(() => {
      const { value } = iterator.next();
      setCurrentLocale(value);
      setLocaleKey(value.languageCode);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div key={localeKey}>
          <p>
            {translate(strings.edit)}
            <code>{translate(strings.appJS)}</code>
            {translate(strings.saveToReload)}
          </p>
          <a
            className="App-link"
            href={reactLinks[localeKey]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {translate(strings.learnReact)}
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
