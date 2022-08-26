import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import WebView from "react-native-webview";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
  });
}

function SocialMedia() {
  const { theme } = useContext(ThemeContext);
  let JS =
    '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';

  let source =
    JS +
    '<a class="twitter-timeline" href="https://twitter.com/PIB_India?ref_src=twsrc%5Etfw">Tweets by PIB_India</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  return (
    <MainLayout customStyles={getStyle(theme).container}>
      <WebView
        // originWhitelist={["*"]}
        source={{ html: source }}
        style={{ minWidth: "100%", minHeight: "100%" }}
        javaScriptEnabled={true}
      ></WebView>
    </MainLayout>
  );
}
export default SocialMedia;
