import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themeDark, themeLight } from "../theme";
import { ITheme, IThemeContext } from "./interfaces";
import { useColorScheme } from "react-native";

const ThemeContext = createContext<IThemeContext>({
  theme: themeLight,
  handleChangeTheme: () => {},
  isDarkMode: false,
});

export const regionalThemes = {
  default: {
    color: "#292D32",
  },
  blue: {
    color: "#0077B6",
  },
  yellow: {
    color: "#F9DC5C",
  },
  pink: {
    color: "#F582A8",
  },
  green: {
    color: "#88CA5E",
  },
  lavender: {
    color: "#CDB4DB",
  },
  bhagwa: {
    color: "#FF7F51",
  },
  reddishBrown: {
    color: "#A44A3F",
  },
  orange: {
    color: "#E7625F",
  },
};

export const currentRegion = regionalThemes.orange;

export const ThemeContextProvider: React.FC<{
  children: ReactNode;
  handleChangeTheme?: void;
}> = ({ children }) => {
  const isDarkMode = useColorScheme() === "dark";

  const [theme, setTheme] = useState<any>(themeLight);

  // const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    async function getTheme() {
      const temp = await AsyncStorage.getItem("theme");
      setTheme(isDarkMode ? themeDark : themeLight);
    }
    getTheme();
  }, [isDarkMode]);

  function handleChangeTheme(tempTheme: string) {
    setTheme(tempTheme === "dark" ? themeDark : themeLight);
    AsyncStorage.setItem("theme", tempTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
