import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import SavedTopTabsNavigation from "../navigation/SavedTopTabsNavigation";
import {
  BlueThemeIcon,
  GreenThemeIcon,
  LavenderThemeIcon,
  OrangeThemeIcon,
  PinkThemeIcon,
  ReddishBrownThemeIcon,
  ReddishOrangeThemeIcon,
  YellowThemeIcon,
} from "../assets/icons";
import { NavigationContainer } from "@react-navigation/native";

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
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <MainLayout
      customStyles={getStyle(theme).container}
      disableDefaultPadding={true}
    >
      {currentRegion === "blue" && (
        <BlueThemeIcon
          customStyle={{
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      {currentRegion === "green" && (
        <GreenThemeIcon
          customStyle={{
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      {currentRegion === "pink" && (
        <PinkThemeIcon
          customStyle={{
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      {currentRegion === "yellow" && (
        <YellowThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.6,
          }}
        />
      )}
      {currentRegion === "lavender" && (
        <LavenderThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.3,
          }}
        />
      )}
      {currentRegion === "reddishOrange" && (
        <ReddishOrangeThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.3,
          }}
        />
      )}
      {currentRegion === "reddishBrown" && (
        <ReddishBrownThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      {currentRegion === "orange" && (
        <OrangeThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      <Text style={getStyle(theme).heading}>Saved</Text>
      {/* <NavigationContainer> */}
      <SavedTopTabsNavigation />
      {/* </NavigationContainer> */}
    </MainLayout>
  );
};

export default Saved;
