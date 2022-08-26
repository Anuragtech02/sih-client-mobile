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
  Register,
  WebViewArticle,
  Splash,
  PMV,
} from "../screens/";
import AppNavigation from "./AppNavigation";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{ headerShown: false }}
      />
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
        name="Register"
        component={Register}
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
      <Stack.Screen
        name="WebViewArticle"
        component={WebViewArticle}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PMV"
        component={PMV}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
