import React, { useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/ThemeContext";
import Button from "../components/Button";
import BackArrow from "../assets/icons/BackArrow";
import MainLayout from "../layouts/MainLayout";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      marginTop: 24,
    },
    countryCode: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.title.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      fontWeight: "500",
    },
    message: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.title.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      marginTop: 24,
      fontWeight: "500",
    },
    newMessage: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.body.fontFamily,
      fontSize: theme.fonts.body.fontSize,
      marginTop: 16,
      fontWeight: "400",
    },
    phoneNumber: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.title.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      paddingTop: 0,
      paddingBottom: 0,
      marginStart: 8,
      marginTop: 6,
      alignSelf: "center",
      width: "70%",
      //textAlign: "center",
      textAlignVertical: "top",
      fontWeight: "400",
    },
    phoneNumberContainer: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
      width: "100%",
    },
    button: {
      marginTop: 24,
    },
  });
}

function LoginScreen() {
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout>
      <View style={getStyles(theme).container}>
        <BackArrow />
        <Text style={getStyles(theme).message}>
          {`Enter your
mobile number`}
        </Text>
        <Text style={getStyles(theme).newMessage}>
          Hello, please write something here!
        </Text>
        <View style={getStyles(theme).phoneNumberContainer}>
          <Text style={getStyles(theme).countryCode}>+91</Text>
          <TextInput
            keyboardType="numeric"
            style={getStyles(theme).phoneNumber}
            placeholder="(XXX) XXX-XX-XX"
            maxLength={10}
          />
        </View>
        <Button
          onPress={() => console.log("DONE")}
          customStyle={getStyles(theme).button}
        >
          Send OTP
        </Button>
      </View>
    </MainLayout>
  );
}

export default LoginScreen;
