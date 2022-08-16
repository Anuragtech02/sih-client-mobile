import React from "react";
import { StatusBar, Text, useColorScheme, View } from "react-native";
import { ChooseLanguage } from "./src/screens";
import { ThemeContextProvider } from "./src/utils/contexts";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  // React.useEffect(() => {
  //   StatusBar.setHidden(true);
  // });
  return (
    <ThemeContextProvider>
      <StatusBar animated={true} backgroundColor="white" hidden={false} />
      <ChooseLanguage />
    </ThemeContextProvider>
  );
};

export default App;
