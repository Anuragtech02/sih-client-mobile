import React from "react";
import {} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  SendOTP,
  OTPVerification,
  ChooseLanguage,
  About,
  Notifications,
  Article,
} from "../screens/";
import AppNavigation from "./AppNavigation";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="AppNavigation">
      <Stack.Screen
        name="ChooseLanguageScreen"
        component={ChooseLanguage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SendOTPScreen"
        component={SendOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPVerificationScreen"
        component={OTPVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppNavigation"
        component={AppNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
