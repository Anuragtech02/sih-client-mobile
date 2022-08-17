import React from "react";
import { StatusBar, Text, useColorScheme, View } from "react-native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { ThemeContextProvider } from "./src/utils/contexts";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/screens";
import TopTabsNavigation from "./src/navigation/TopTabsNavigation";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  // React.useEffect(() => {
  //   StatusBar.setHidden(true);
  // });
  return (
    <ThemeContextProvider>
      <StatusBar animated={true} backgroundColor="white" hidden={false} />
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </ThemeContextProvider>
  );
};

export default App;
