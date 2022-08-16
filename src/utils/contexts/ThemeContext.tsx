import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themeDark, themeLight } from "../theme";
import { ITheme, IThemeContext } from "./interfaces";

export const ThemeContext = createContext<IThemeContext>({
  theme: themeLight,
  handleChangeTheme: () => {},
  isDarkMode: false,
});

const ThemeContextProvider: React.FC<{
  children: ReactNode;
  handleChangeTheme?: void;
}> = ({ children }) => {
  const [theme, setTheme] = useState<any>({ ...themeLight });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    async function getTheme() {
      const theme = await AsyncStorage.getItem("theme");
      setTheme(theme === "dark" ? themeDark : themeLight);
    }
    getTheme();
  }, []);

  function handleChangeTheme(theme: string) {
    setTheme(theme === "dark" ? themeDark : themeLight);
    AsyncStorage.setItem("theme", theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
