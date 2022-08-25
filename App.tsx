import React from "react";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { About, Article, Home, Register, Settings } from "./src/screens";
import TopTabsNavigation from "./src/navigation/TopTabsNavigation";
import {
  notificationServices,
  requestUserPermission,
} from "./src/utils/notification/pushNotification";
import DrawerOptions from "./src/components/DrawerOptions";
import AppNavigation from "./src/navigation/AppNavigation";
import {
  ThemeContextProvider,
  TextToSpeechProvider,
  LocaleContextProvider,
  ArticleContextProvider,
  AuthContextProvider,
} from "./src/utils/contexts/";
import { LogBox } from "react-native";

const App = () => {
  React.useEffect(() => {
    // StatusBar.setHidden(true);

    // Request user permission for push notification
    requestUserPermission();
    // Initialize notification services
    notificationServices();
  }, []);

  return (
    <ThemeContextProvider>
      <LocaleContextProvider>
        <AuthContextProvider>
          <TextToSpeechProvider>
            <ArticleContextProvider>
              <NavigationContainer>
                {/* <Settings navigation={""} /> */}
                <AuthNavigation />
                {/* <Register navigation={""} /> */}
                {/* <Article /> */}
                {/* <AppNavigation /> */}
              </NavigationContainer>
            </ArticleContextProvider>
          </TextToSpeechProvider>
        </AuthContextProvider>
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
