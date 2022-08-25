import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themeDark, themeLight, regionalThemes } from "../theme";
import { ITheme, IThemeContext } from "./interfaces";
import { useColorScheme } from "react-native";

const ThemeContext = createContext<IThemeContext>({
  theme: themeLight,
  handleChangeTheme: () => {},
  isDarkMode: false,
  setCurrentRegion: () => {},
  currentRegion: "default",
});

export const ThemeContextProvider: React.FC<{
  children: ReactNode;
  handleChangeTheme?: void;
}> = ({ children }) => {
  const isDarkMode = useColorScheme() === "dark";
  const [currentRegion, setCurrentRegion] = useState<string>("default");
  const [theme, setTheme] = useState<any>(themeLight);

  // const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const newTheme = {
      ...theme,
      regionalColor: regionalThemes[currentRegion].color,
    };
    setTheme(newTheme);
    console.log(newTheme);
  }, [currentRegion]);
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
    <ThemeContext.Provider
      value={{
        theme,
        handleChangeTheme,
        isDarkMode,
        currentRegion,
        setCurrentRegion,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
