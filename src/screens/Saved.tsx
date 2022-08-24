import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import SavedTopTabsNavigation from "../navigation/SavedTopTabsNavigation";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    articelHeading: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.primary,
      marginTop: 8,
    },
    cardContainer: {
      borderWidth: 1,
      borderRadius: 0,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    eyeContainer: {
      marginStart: 20,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
      color: theme.colors.primary,
      marginVertical: 24,
      marginStart: 24,
    },
    iconContainer: {
      flexDirection: "row",
      marginTop: 12,
      alignItems: "center",
    },
    innerContainer: {
      width: "100%",
      padding: 8,
    },
    image: {
      width: "100%",
      borderRadius: 8,
    },
    time: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
      marginStart: 8,
    },
    views: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
      marginStart: 8,
    },
  });
}

const Saved: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout
      customStyles={getStyle(theme).container}
      disableDefaultPadding={true}
    >
      <Text style={getStyle(theme).heading}>Saved</Text>
      <SavedTopTabsNavigation />
    </MainLayout>
  );
};

export default Saved;
