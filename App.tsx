import React from "react";
import { Text, useColorScheme, View } from "react-native";

import { Card, Button } from "./src/components";
import MainLayout from "./src/layouts/MainLayout";
import ChooseLanguageScreen from "./src/screens/ChooseLanguageScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OTPVerificationScreen from "./src/screens/OTPVerificationScreen";
import ThemeContextProvider from "./src/utils/contexts/ThemeContext";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <ThemeContextProvider>
      <ChooseLanguageScreen />
    </ThemeContextProvider>
  );
};

export default App;
