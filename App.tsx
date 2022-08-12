import React from "react";
import { Text, useColorScheme, View } from "react-native";

import { Card, Button } from "./src/components";
import MainLayout from "./src/layouts/MainLayout";
import ThemeContextProvider from "./src/utils/contexts/ThemeContext";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <ThemeContextProvider>
      <MainLayout>
        <View>
          <Card>
            <Text>This is a view</Text>
          </Card>
        </View>
      </MainLayout>
    </ThemeContextProvider>
  );
};

export default App;
