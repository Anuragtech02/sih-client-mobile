import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import MainLayout from "../layouts/MainLayout";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 40,
      backgroundColor: theme.colors.background,
    },
    innerContainer: {
      width: "100%",
    },
    itemSeperator: {
      height: 1,
      width: "100%",
      backgroundColor: theme.colors.g4,
    },
    name: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.primary,
      marginStart: 24,
    },
    optionContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 18,
    },
    seperatorContainer: {
      marginTop: 18,
    },
  });
}

const DrawerOptions: React.FC<{
  children: React.ReactNode;
  optionName: string;
  icon?: React.ReactNode;
  customOnPress: any;
  myStyle: any;
}> = ({ children, optionName, icon, customOnPress, myStyle }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout
      disableDefaultPadding={true}
      customStyles={getStyles(theme).container}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={customOnPress}
        style={getStyles(theme).innerContainer}
      >
        <View style={getStyles(theme).optionContainer}>
          {children}
          <Text style={{ ...getStyles(theme).name, ...myStyle }}>
            {optionName}
          </Text>
          {icon}
        </View>
        <View style={getStyles(theme).seperatorContainer}>
          <View style={getStyles(theme).itemSeperator} />
        </View>
      </TouchableOpacity>
    </MainLayout>
  );
};

export default DrawerOptions;
