import React, { createContext, useState, ReactNode } from "react";
import { ILocaleContext } from "./interfaces";
import LocalizedStrings from "react-native-localization";
import * as RNLocalize from "react-native-localize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "../i18n/en.json";
import hi from "../i18n/hi.json";
import te from "../i18n/te.json";
import kn from "../i18n/kn.json";
import { APP_LANGUAGE } from "../constants";

const DEFAULT_LANGUAGE = "en";

const languages = { en, hi, te, kn };

const translations = new LocalizedStrings(languages);

const LocaleContext = createContext<ILocaleContext>({
  translations: [],
  setLocaleLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

interface ILocaleContextContextProvider {
  children: ReactNode;
}

export const LocaleContextProvider: React.FC<ILocaleContextContextProvider> = ({
  children,
}) => {
  const [appLanguage, setAppLanguage] = useState<
    "en" | "hi" | "gu" | "kn" | "pa" | "ta" | "te" | "mr" | "ml" | string
  >(DEFAULT_LANGUAGE);

  function setLocaleLanguage(language: string) {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  }

  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    if (currentLanguage) {
      console.log(currentLanguage);
      setLocaleLanguage(currentLanguage);
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
      setLocaleLanguage(localeCode);
    }
  };

  return (
    <LocaleContext.Provider
      value={{
        appLanguage,
        setLocaleLanguage,
        translations,
        initializeAppLanguage,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
