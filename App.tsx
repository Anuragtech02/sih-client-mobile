import React from "react";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import {
  notificationServices,
  requestUserPermission,
} from "./src/utils/notification/pushNotification";
import {
  ThemeContextProvider,
  TextToSpeechProvider,
  LocaleContextProvider,
  ArticleContextProvider,
  AuthContextProvider,
} from "./src/utils/contexts/";
import { LogBox } from "react-native";
import { Register } from "./src/screens";
LogBox.ignoreAllLogs();
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
                <AuthNavigation />
              </NavigationContainer>
            </ArticleContextProvider>
          </TextToSpeechProvider>
        </AuthContextProvider>
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
