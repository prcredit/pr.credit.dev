import { IMultiLangWords } from "./MultiLang";


export interface IWords {
  [word: string]: string;
}

export interface IAllLanguagesWords {
  [lang: string]: IMultiLangWords;
}

export interface IMultiLangState {
  words: IMultiLangWords;
  changeLang: (lang: string, isUpdateLocale?: boolean) => void;
  selectedLang: string;
}