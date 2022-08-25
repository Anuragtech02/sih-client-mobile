import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import { Button } from "../components";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
  });
}

const TrendingTabs: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout customStyles={getStyle(theme).container}>
      <Text style={getStyle(theme).heading}>PM Videos</Text>
    </MainLayout>
  );
};
export default TrendingTabs;
