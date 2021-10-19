import React, { createContext, useState, useCallback } from 'react';

import ru from './words/ru';
import en from './words/en';
import es from './words/es';


const words = {
  ru,
  en,
  es,
}
const defaultLang = (() => {
  const lsLang = localStorage.getItem('lang');

  if (!!lsLang) {
    return lsLang;
  }

  switch (navigator.language) {
    case 'en-US':
      return 'en';
    case 'ru-RU':
      return 'ru';
    case 'es-ES':
      return 'es';
    default:
      return !!navigator.language && !!words[navigator.language]
        ? navigator.language
        : 'ru';
  };
})();

const MultiLangContext = createContext({
  words: {},
  changeLang: () => { },
  selectedLang: '',
});

MultiLangContext.displayName = 'MultiLangContext';

const MultiLangProvider = (props) => {
  const [state, setState] = useState({
    selectedLang: defaultLang,
    words: words[defaultLang],
  });

  const changeLang = useCallback((lang) => {
    const newWords = words[lang];

    if (!newWords) {
      return;
    }
    localStorage.setItem('lang', lang);
    setState({
      words: newWords,
      selectedLang: lang,
    });
  }, []);

  return <MultiLangContext.Provider
    {...props}
    value={{
      words: state.words,
      selectedLang: state.selectedLang,
      changeLang,
    }}
  />
}

export { MultiLangContext, MultiLangProvider };