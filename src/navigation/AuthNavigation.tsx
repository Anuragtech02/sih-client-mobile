import React from "react";

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
  MyAccount,
  FactChecker,
  Settings,
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
      <Stack.Screen
        name="My Account"
        component={MyAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About PIB"
        component={About}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fact Checker"
        component={FactChecker}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
