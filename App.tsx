import React from "react";
import { Text, useColorScheme, View } from "react-native";

import { Card, Button } from "./src/components";
import MainLayout from "./src/layouts/MainLayout";
import ChooseLanguageScreen from "./src/screens/ChooseLanguage";
import SendOTPScreen from "./src/screens/SendOTP";
import OTPVerificationScreen from "./src/screens/OTPVerification";
import { ThemeContextProvider } from "./src/utils/contexts";
import LoginScreen from "./src/screens/Login";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <ThemeContextProvider>
      <ChooseLanguageScreen />
    </ThemeContextProvider>
  );
};

export default App;
