import React, { useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { ThemeContext } from "../utils/contexts";

const { width, height } = Dimensions.get("window");
interface IMainLayout {
  children: React.ReactNode;
  disableDefaultPadding?: boolean;
  customStyles?: any;
}

const styles = StyleSheet.create({
  innerContainer: {
    // backgroundColor: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

const MainLayout: React.FC<IMainLayout> = ({
  children,
  disableDefaultPadding = false,
  customStyles,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View
        style={{
          ...styles.innerContainer,
          paddingHorizontal: disableDefaultPadding ? 0 : 24,
          ...customStyles,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default MainLayout;
