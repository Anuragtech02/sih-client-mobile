import React, { createContext, useState, ReactNode } from "react";
import { ILocaleContext } from "./interfaces";
import LocalizedStrings from "react-native-localization";
import * as RNLocalize from "react-native-localize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "../i18n/en.json";
import hi from "../i18n/hi.json";

const DEFAULT_LANGUAGE = "hi";
const APP_LANGUAGE = "APP_LANGUAGE";

const languages = { en, hi };

const translations = new LocalizedStrings(languages);

const LocaleContext = createContext<ILocaleContext>({
  translations: [],
  setLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

interface ILocaleContextContextProvider {
  children: ReactNode;
}

export const LocaleContextProvider: React.FC<ILocaleContextContextProvider> = ({
  children,
}) => {
  const [appLanguage, setAppLanguage] = useState<string>(DEFAULT_LANGUAGE);

  function setLanguage(language: string) {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  }

  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    if (currentLanguage) {
      setLanguage(currentLanguage);
    } else {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCodes = translations.getAvailableLanguages();
      const phoneLocaleCodes = RNLocalize.getLocales().map(
        (locale) => locale.languageCode
      );
      console.log(supportedLocaleCodes);
      phoneLocaleCodes.some((code) => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setLanguage(localeCode);
    }
  };

  return (
    <LocaleContext.Provider
      value={{ appLanguage, setLanguage, translations, initializeAppLanguage }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
