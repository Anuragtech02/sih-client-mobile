import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import MainLayout from "../layouts/MainLayout";
import { BackArrowIcon, RadioButtonIcon } from "../assets/icons";
import {} from "react-native-svg";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    heading: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.primary,
      marginTop: 16,
    },
    innerContainer: {
      marginTop: 20,
    },
    items: {
      marginStart: 24,
      flexDirection: "row",
      alignItems: "center",
    },
    radioContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    radioButtonName: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.primary,
    },
    searchContainer: {
      marginVertical: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.g1,
      flexDirection: "row",
    },
    searchInput: {
      marginStart: 12,
      width: "100%",
    },
    title: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g5,
      marginTop: 24,
    },
  });
}

const Register: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout customStyles={getStyles(theme).container}>
      <View style={getStyles(theme).innerContainer}>
        <BackArrowIcon color={theme.colors.primary} />
        <Text style={getStyles(theme).heading}>Register</Text>
        {/* <Image source={} /> */}
        <Text style={getStyles(theme).title}>Name</Text>
        <View style={getStyles(theme).searchContainer}>
          <TextInput
            style={getStyles(theme).searchInput}
            placeholder="Enter Full Name"
          />
        </View>
        <Text style={getStyles(theme).title}>Gender</Text>
        <View style={getStyles(theme).radioContainer}>
          <RadioButtonIcon
            color={theme.colors.primary}
            colorFill={theme.colors.primary}
          />
          <Text style={getStyles(theme).radioButtonName}>Female</Text>

          <View style={getStyles(theme).items}>
            <RadioButtonIcon
              color={theme.colors.primary}
              colorFill={theme.colors.primary}
            />
            <Text style={getStyles(theme).radioButtonName}>Male</Text>
          </View>

          <View style={getStyles(theme).items}>
            <RadioButtonIcon
              color={theme.colors.primary}
              colorFill={theme.colors.primary}
            />
            <Text style={getStyles(theme).radioButtonName}>Others</Text>
          </View>
        </View>
      </View>
    </MainLayout>
  );
};

export default Register;
