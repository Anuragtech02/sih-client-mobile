import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/";
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
      fontFamily: theme.fonts.subTitle.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      fontWeight: "500",
    },
    message: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.subTitle.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      marginTop: 24,
      //fontWeight: "500",
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
      fontFamily: theme.fonts.subTitle.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      paddingTop: 0,
      paddingBottom: 0,
      marginStart: 8,
      // marginTop: 8,
      // alignSelf: "center",
      width: "70%",
      //textAlign: "center",
      // textAlignVertical: "top",
      fontWeight: "400",
    },
    phoneNumberContainer: {
      marginTop: 20,
      justifyContent: "flex-start",
      flexDirection: "row",
      width: "100%",
    },
    button: {
      marginTop: 24,
    },
  });
}

const SendOTP: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const formatPN = function formatPhoneNumber(value: string) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, "");

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early

    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };
  const handlePhoneChange = function handlePhoneNumberChange(e: string) {
    const formatedString = formatPN(e);
    setPhoneNumber(formatedString);
  };
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
            value={phoneNumber}
            onChangeText={handlePhoneChange}
            keyboardType="numeric"
            style={getStyles(theme).phoneNumber}
            placeholder="(XXX) XXX-XX-XX"
            maxLength={14}
          />
        </View>
        <Button
          onPress={() =>
            console.log(navigation.navigate("OTPVerificationScreen"))
          }
          customStyle={getStyles(theme).button}
        >
          Send OTP
        </Button>
      </View>
    </MainLayout>
  );
};

export default SendOTP;
