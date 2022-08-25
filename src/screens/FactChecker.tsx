import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import BackArrow from "../assets/icons/BackArrowIcon";
import { DrawerIcon } from "../assets/icons";
import WebView from "react-native-webview";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: "center",
      // alignItems: "center",
      padding: 40,
      backgroundColor: theme.colors.background,
    },
    heading: {
      marginTop: 150,
      marginStart: 100,
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
    iconContainer: {
      flexDirection: "row",
    },
  });
}

const FactChecker: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout customStyles={getStyle(theme).container}>
      <WebView source={{ uri: "https://factcheck.pib.gov.in/" }}></WebView>
    </MainLayout>
  );
};
export default FactChecker;
