import React, { useContext, useRef, useState, useEffect } from "react";
import {
  ActivityIndicator,
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
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OTP } from "../components";

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
    resendCodeContainer: {
      marginTop: 70,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    otpContainer: {
      marginTop: 12,
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
  const [loading, setLoading] = useState(false);
  const { confirmCode, handleLogin, setCurrentUser } = useContext(AuthContext);

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

      <OTP
        customStyles={getStyles(theme).otpContainer}
        onCodeFilled={(code: any) => {
          setPin(code);
          setLoading(true);
          confirmCode(code, () =>
            handleLogin(phoneNumber, (data: any) => {
              if (data === "404") {
                navigation.navigate("Register");
              } else {
                const user = jwtDecode(data);
                setCurrentUser(user);
                AsyncStorage.setItem("CURRENT_USER", JSON.stringify(user));
                // console.log(user);
                // console.log(data);
                navigation.navigate(
                  "AppNavigation",
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "AppNavigation" }],
                  })
                );
              }
            })
          );
        }}
      />
      <View style={getStyles(theme).resendCodeContainer}>
        <Timer initialSeconds="30" text="Resend" />
      </View>
      {loading ? (
        <ActivityIndicator
          color={theme.colors.primary}
          style={{ alignSelf: "center", flex: 1 }}
        />
      ) : (
        <></>
      )}
    </MainLayout>
  );
};

export default OTPVerification;
