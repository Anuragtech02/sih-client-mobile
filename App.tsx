import React from "react";
import { Text, useColorScheme, View } from "react-native";

import ThemeContextProvider from "./src/utils/contexts/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </ThemeContextProvider>
  );
};

export default App;
