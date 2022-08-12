import React, { useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { ThemeContext } from "../utils/contexts/ThemeContext";

interface IMainLayout {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    flex: 1,
  },
});

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainLayout;
