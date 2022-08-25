import React, { useContext, useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { AuthContext, ThemeContext } from "../utils/contexts";
import Timer from "../components/Timer";
import MainLayout from "../layouts/MainLayout";
import BackArrow from "../assets/icons/BackArrowIcon";
import OTPInputView from "@twotalltotems/react-native-otp-input";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
    },
    message: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.subTitle.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      marginTop: 24,
      fontWeight: "500",
      lineHeight: 32,
    },
    newMessage: {
      color: "#757575",
      fontFamily: theme.fonts.body.fontFamily,
      fontSize: theme.fonts.body.fontSize,
      marginTop: 16,
      fontWeight: "100",
    },
    option: {
      marginTop: 8,
      textDecorationLine: "underline",
      fontSize: theme.fonts.body.fontSize,
      color: theme.colors.primary,
    },
    resendCodeContainer: {
      marginTop: 70,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    inputOTP: { width: "100%", height: 50, marginTop: 32 },
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: theme.colors.g1,
      color: theme.colors.primary,
      fontSize: theme.fonts.subTitle.fontSize,
    },
    underlineStyleHighLighted: {
      borderColor: theme.colors.primary,
    },
  });
}

const OTPVerification: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const { theme } = useContext(ThemeContext);
  const phoneNumber = route.params.number;
  const [pin, setPin] = useState<String>();
  const { confirmCode } = useContext(AuthContext);

  return (
    <MainLayout
      customStyles={{ backgroundColor: theme.colors.background, flex: 1 }}
    >
      <View style={getStyles(theme).container}>
        <BackArrow />
        <Text style={getStyles(theme).message}>
          {`Enter code sent to your
number`}
        </Text>
        <Text style={getStyles(theme).newMessage}>
          {`We sent it to the number +91 ${phoneNumber}`}
        </Text>
      </View>

      <OTPInputView
        style={getStyles(theme).inputOTP}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={getStyles(theme).underlineStyleBase}
        codeInputHighlightStyle={getStyles(theme).underlineStyleHighLighted}
        onCodeFilled={(code: any) => {
          navigation.navigate("Register");
          // setPin(code);
          // confirmCode(code, () => navigation.navigate("Register"));
        }}
      />

      <View style={getStyles(theme).resendCodeContainer}>
        <Timer initialSeconds="30" text="Resend" />
      </View>
    </MainLayout>
  );
};

export default OTPVerification;
