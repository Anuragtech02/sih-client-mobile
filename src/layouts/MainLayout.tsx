import React, { useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { ThemeContext } from "../utils/contexts/ThemeContext";

const { width, height } = Dimensions.get("window");
interface IMainLayout {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  innerContainer: {
    // paddingHorizontal: 24,
  },
  container: {
    flex: 1,
  },
});

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default MainLayout;
