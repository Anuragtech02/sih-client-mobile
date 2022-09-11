import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button } from "../components";

import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/";
import metrics from "../utils/metrics";
import MainLayout from "../layouts/MainLayout";
import { useNavigation, CommonActions } from "@react-navigation/native";

const myNavigation = useNavigation();

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    button: {
      marginBottom: 20,
      marginTop: "auto",
      alignSelf: "flex-end",
      width: "96%",
    },
    container: {
      elevation: 0,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    heading: {
      marginTop: 48,
      fontSize: theme.fonts.title.fontSize,
      color: theme.colors.primary,
      fontFamily: theme.fonts.title.fontFamily,
    },
    subHeading: {
      marginTop: 8,
      fontSize: theme.fonts.body.fontSize,
      color: "#646464",
      fontFamily: theme.fonts.body.fontFamily,
      fontWeight: "500",
    },
    textContainer: {
      // marginLeft: 36,
      // backgroundColor: "pink",
    },
    widthContainer: {
      width: "100%",
      paddingHorizontal: 20,
      position: "absolute",
      height: metrics.screenHeight,
      justifyContent: "space-between",
      alignSelf: "center",
      // backgroundColor: "green",
      elevation: 4,
    },
    mainContainer: { backgroundColor: "white" },
    skipButton: {
      fontSize: theme.fonts.body.fontSize,
      color: theme.colors.g2,
      fontFamily: theme.fonts.body.fontFamily,
      alignSelf: "center",
      marginBottom: 32,
      fontWeight: "bold",
      textDecorationLine: "underline",
    },
  });
}

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout
      customStyles={{
        alignItems: "center",
        backgroundColor: theme.colors.background,
      }}
      disableDefaultPadding
    >
      <Image
        resizeMethod="auto"
        resizeMode="cover"
        source={require("../assets/LoginBackgroundImage.png")}
        style={getStyles(theme).container}
      />
      <View style={getStyles(theme).widthContainer}>
        <View style={getStyles(theme).textContainer}>
          <Text style={getStyles(theme).heading}>{`Namaste,
Let’s get started.`}</Text>
          <Text style={getStyles(theme).subHeading}>
            Login using your number to continue.
          </Text>
        </View>
        <Button
          customStyle={getStyles(theme).button}
          onPress={() => navigation.navigate("SendOTPScreen")}
        >
          Login
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("AppNavigation")}>
          <Text style={getStyles(theme).skipButton}>{`Skip & Continue`}</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default Login;
