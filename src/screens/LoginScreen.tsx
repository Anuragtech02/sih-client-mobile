import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import LoginBackgroundImage from "../assets/LoginBackgroundImage";
// import {ReactComponent as LoginBackground} from "../assets/LoginBackgroundImage.svg"

function LoginScreen() {
  return <Image source={require("../assets/LoginBackgroundImage.svg")} />;
}

export default LoginScreen;
