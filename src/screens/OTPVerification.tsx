import React, { useContext, useRef, useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import Timer from "../components/Timer";
import MainLayout from "../layouts/MainLayout";
import BackArrow from "../assets/icons/BackArrow";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      marginTop: 24,
    },
    innerContainer: {
      marginTop: 24,
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
    },
    message: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.subTitle.fontFamily,
      fontSize: theme.fonts.subTitle.fontSize,
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
    textInputView: {
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#B3B3B3",
      width: 50,
    },
    option: {
      marginTop: 8,
      textDecorationLine: "underline",
      fontSize: theme.fonts.body.fontSize,
      color: theme.colors.primary,
    },
    OTPinput: {
      width: "100%",
      textAlign: "center",
      fontSize: theme.fonts.subTitle.fontSize,
      fontWeight: "500",
    },
    resendCodeContainer: {
      marginTop: 70,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    resendCode: {
      color: theme.colors.primary,
      fontFamily: "Poppins-Medium",
      fontSize: theme.fonts.body.fontSize,
      marginEnd: 5,
    },
  });
}

const OTPVerification = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    pin1Ref.current.focus();
  }, []);

  const pin1Ref = useRef<any>(null);
  const pin2Ref = useRef<any>(null);
  const pin3Ref = useRef<any>(null);
  const pin4Ref = useRef<any>(null);

  const [pin1, setPin1] = useState<any>("");
  const [pin2, setPin2] = useState<any>("");
  const [pin3, setPin3] = useState<any>("");
  const [pin4, setPin4] = useState<any>("");

  return (
    <MainLayout>
      <View style={getStyles(theme).container}>
        <BackArrow />
        <Text style={getStyles(theme).message}>
          {`Enter code sent to your
number`}
        </Text>
        <Text style={getStyles(theme).newMessage}>
          We sent it to the number +91 (987) 654-23-10
        </Text>
        <Text style={getStyles(theme).option}>Change number</Text>
      </View>
      <View style={getStyles(theme).innerContainer}>
        <View style={getStyles(theme).textInputView}>
          <TextInput
            ref={pin1Ref}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(pin1) => {
              setPin1(pin1);
              if (pin1 !== "") {
                pin2Ref.current.focus();
              }
            }}
            style={getStyles(theme).OTPinput}
          />
        </View>
        <View style={getStyles(theme).textInputView}>
          <TextInput
            ref={pin2Ref}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(pin2) => {
              setPin2(pin2);
              if (pin2 !== "") {
                pin3Ref.current.focus();
              }
            }}
            style={getStyles(theme).OTPinput}
          />
        </View>
        <View style={getStyles(theme).textInputView}>
          <TextInput
            ref={pin3Ref}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(pin3) => {
              setPin3(pin3);
              if (pin3 !== "") {
                pin4Ref.current.focus();
              }
            }}
            style={getStyles(theme).OTPinput}
          />
        </View>
        <View style={getStyles(theme).textInputView}>
          <TextInput
            ref={pin4Ref}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(pin4) => {
              setPin4(pin4);
            }}
            style={getStyles(theme).OTPinput}
          />
        </View>
      </View>
      <View style={getStyles(theme).resendCodeContainer}>
        <Text style={getStyles(theme).resendCode}>Resend code in</Text>
        <Timer initialSeconds="30" text="resend" />
      </View>
    </MainLayout>
  );
};

export default OTPVerification;
