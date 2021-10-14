import React, { createContext, useState, useCallback } from 'react';

import ru from './words/ru';
import en from './words/en';

import {
  IAllLanguagesWords,
  IMultiLangState,
} from './MultiLang.types';


export type IMultiLangWords = ReturnType<() => typeof en>;


const words: IAllLanguagesWords = {
  ru,
  en,
}
const defaultLang: string = ((): string => {
  const lsLang = localStorage.getItem('lang');

  if (!!lsLang) {
    return lsLang;
  }

  switch (navigator.language) {
    case 'en-US':
      return 'en';
    case 'ru-RU':
      return 'ru';
    default:
      return !!navigator.language && !!words[navigator.language]
        ? navigator.language
        : 'en';
  }
})();

const MultiLangContext = createContext<IMultiLangState>({
  words: words[defaultLang],
  changeLang: (lang: string) => { },
  selectedLang: '',
});

MultiLangContext.displayName = 'MultiLangContext';

const MultiLangProvider = (props: any) => {
  const [state, setState] = useState({
    selectedLang: defaultLang,
    words: words[defaultLang],
  });

  const changeLang = useCallback((lang: string) => {
    const newWords = words[lang];

    setState(prevState => {
      if (prevState.selectedLang === lang || !newWords) {
        return prevState;
      }
      localStorage.setItem('lang', lang);

      return {
        selectedLang: lang,
        words: newWords,
      }
    });
  }, []);

  const value: IMultiLangState = {
    words: state.words,
    selectedLang: state.selectedLang,
    changeLang,
  }

  return <MultiLangContext.Provider
    {...props}
    value={value}
  />
}

export { MultiLangContext, MultiLangProvider };