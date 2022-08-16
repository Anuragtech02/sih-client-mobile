import React from "react";
import {} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SendOTPScreen from "../screens/SendOTPScreen";
import OTPVerificationScreen from "../screens/OTPVerificationScreen";
import ChooseLanguageScreen from "../screens/ChooseLanguageScreen";
import AppNavigation from "./AppNavigation";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChooseLanguageScreen"
        component={ChooseLanguageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SendOTPScreen"
        component={SendOTPScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPVerificationScreen"
        component={OTPVerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppNavigation"
        component={AppNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
